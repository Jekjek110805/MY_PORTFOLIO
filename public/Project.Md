    Here's a simple, step-by-step explanation of the Behavioral Risk Signals proposal—no jargon, just plain English:



    🎯 What This Is Trying to Do
    Instead of just banning users (yes/no), we want to spot risky behaviors over time—like manipulation, pressure, or scams—by looking at what people write. We’ll show these risks as a heat map or radar chart (like a weather map for behavior) so human reviewers can see patterns and decide what to do.
    Crucially: This is not about diagnosing personalities (e.g., "narcissist" or "sociopath"). It’s only about observable actions in text.



    🔒 Why We’re Doing It This Way (The Hard Rules)
    1. No secret psychological profiling
       Earlier ideas to secretly detect "sociopaths" using text were rejected because:
       - You can’t accurately diagnose personality disorders from someone’s messages (it’s like guessing if someone has diabetes from their grocery list).
       - Doing this secretly would violate privacy laws (GDPR treats this as sensitive health data).
       - Past mistakes: A tiny bug once caused 374 wrongful bans with zero warnings. Hidden scores automating bans would make this worse.

    2. Only behavior, never diagnosis
       Every term used must describe what someone did (e.g., "pressured for photos after saying no"), not what they "are" (e.g., "manipulative personality").
       → If it sounds like a psychology term, it’s banned from this design.



    🛠️ How It Works (Step by Step)
    Here’s the flow when someone sends a message or updates their profile:

    1. 📥 Ingest the text
       - Grab the message, bio, or note (e.g., a chat message, profile "About Me").
       - Immediately strip personal info (names, emails, etc.) using Google’s Cloud DLP tool—like blurring faces in a photo before saving it.
       → Only the cleaned, redacted text goes further. Raw messages are never stored.

    2. 🔍 Check for risks (two-layer AI check)
       - Layer 1 (Toxicity): Use a tweaked version of Detoxify (trained on Jigsaw data) to spot insults, threats, hate speech—but specifically tuned for dating context (so it doesn’t flag consensual flirting as harassment).
       - Layer 2 (JaB-specific risks): Use Vertex AI (Google’s Gemini) to catch risks unique to our app:
         - Pressure: "Just send the money, or I’ll tell everyone."
         - Scams: "Let’s move to WhatsApp NOW."
         - Boundary violation: Repeated asks after "no."
         - Copy-paste scams: Same script sent to 50 people.
       - Evidence grab: For every flag, save the exact phrase that triggered it (like highlighting text in a PDF)—so reviewers see why it was flagged, not just a score.

    3. 📊 Update the person’s behavioral profile
       - One profile per person (not per app section).
         Example: If someone shows pressure in dating chats, that’s visible if they later use co-parenting features.
       - For each of 8 risk types (see below), store:
         - Probability: How likely is this risk? (0%–100%)
         - Confidence: How sure are we? (Based on how many examples we’ve seen)
         - Trend: Is this getting worse/better over time? (Decay model TBD)
         - Evidence pointers: Links to the saved snippets (with source: dating bio, co-parent chat, etc.)
       → No full message history. No psychological vectors. Just scores + evidence.

    4. 🚨 Human review (if needed)
       - If a risk score crosses a threshold (TBD by reviewers), create a "Review Case."
       - Reviewers see:
         - Radar/heat map of all 8 risks
         - Evidence snippets (with source tags: e.g., "This came from a dating bio")
         - Trend arrows (is pressure increasing?)
       - Reviewer actions:
         - ✅ Dismiss (if it’s a false alarm)
         - 👀 Monitor more closely
         - ⚖️ Send to existing ban/enforcement team (this system never bans anyone directly)
       → Always human-in-the-loop. No automation.

    5. 🗑️ Privacy & cleanup
       - Raw messages deleted after step 1.
       - Evidence snippets kept for a limited time (longer if tied to an enforcement decision; shorter if dismissed).
       - Profiles never store personality traits—just behavior scores + evidence links.



    📏 The 8 Risk Types We’re Watching For
    (All behavior-based, no psychology terms)
    1. Manipulation – Gaslighting, guilt-tripping, moving goalposts.
    2. Coercive Pressure – Pushing after "no," ultimatums, sexual pressure post-refusal.
    3. Scam/Exploitation – Money/crypto/doc requests, rushing off-platform.
    4. Harassment/Toxicity – Insults, threats, hate, obscene language.
    5. Volatility – Rapid mood swings (ideal → hostile in short time).
    6. Deception – Lying about identity/job/history across messages.
    7. Boundary Violation – Repeated contact/requests after clear "no."
    8. Cross-Person Pattern – Same scam script used on many different people.



    ⚠️ What We’re NOT Doing (Critical Boundaries)
    - ❌ No auto-bans – Scores never trigger actions without human review.
    - ❌ No co-parent features yet – Designing for future reuse, but not building it now.
    - ❌ No personality tests as training data – Absolutely no SD3/NPI/Big Five/Dark Triad data used to train or calibrate models (this is the #1 rule).
    - ❌ No skipping redaction – Personal info removal is step 1, not "phase 2."
    - ❌ No mixing with other fixes – If we wire moderation checks into write paths (AGP-59/60), we also send to this system—but their timelines stay separate.
    - ❌ No voice/video yet – Text-only for now (keeps it focused and private-safe).



    ❓ Open Questions the Team Needs to Decide
    (These need human input—not guesses)
    1. Review thresholds – What score/confidence actually shows a reviewer needs to look? (Ask the humans who’ll do the reviewing.)
    2. V1 scope – Day 1: Only check already-known risky areas (chats, bios, helper notes)? Or all chats immediately?
    3. Decay function – Should a severe pressure signal fade slower than a mild manipulation hint? (Or same half-life for all?)
    4. Training data labels – Who labels examples for JaB-specific risks? (Mod team? Special labeling team?) This affects how fast we launch.
    5. Evidence retention – How long to keep snippets? (Reviewed cases longer than dismissed ones? Exact call = legal/policy.)
    6. Disclosure approval – Who writes/approves the safety notice? (Must cover all contexts the profile might be used in—e.g., "We monitor for manipulation/scams/harassment to keep the platform safe"—not just dating.)
    7. Voice/video scope – Will we ever check calls/video, or is this text-only forever? (Affects long-term tools needed.)



    💡 Why This Matters
    - For users: Safer platform via behavior-spotting (not secret profiling).
    - For reviewers: Clear radar chart + evidence = faster, fairer decisions.
    - For legal/privacy: Built-in safeguards (redaction, no psych data, purpose-limited sharing) reduce GDPR risks.
    - For the team: Human-in-the-loop design prevents repeat of past automation failures.

    This isn’t about catching "bad people"—it’s about giving humans better tools to spot patterns of harm before they escalate, while respecting privacy and avoiding overreach.
