/* Original solo-study lessons and scenarios. Not official PMI exam questions.
   Keep these IDs stable: saved missions and mistake history refer to them. */
window.STUDY_CONTENT = {
  version: 1,
  reviewedAt: "2026-10-25",
  sources: [
    { id: "eco2026", title: "PMI PMP Examination Content Outline — July 2026", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf" },
    { id: "scrum", title: "The Scrum Guide — November 2020", url: "https://scrumguides.org/scrum-guide.html" },
    { id: "evm", title: "PMI: Earned Value Management — Reading the Numbers", url: "https://www.pmi.org/blog/earned-value-management" },
    { id: "benefits", title: "PMI Benefits Realization Management Framework", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/benefits-realization-management-framework.pdf" },
    { id: "ethics", title: "PMI Code of Ethics and Professional Conduct", url: "https://www.pmi.org/-/media/pmi/documents/public/pdf/ethics/pmi-code-of-ethics.pdf" }
  ],
  concepts: [
    {
      id: "change-control", title: "Changes without surprises", domain: "Process",
      summary: "Evaluate a request before committing, then use the project's agreed approval process.",
      principle: "A valuable change still needs an informed decision and the right authority.",
      workedExample: "A reporting feature adds two weeks to an approved launch plan. Clarify its benefit, assess scope, time, cost, and risk together, and provide that information to the authorized decision-maker before updating the baseline.",
      trap: "Approving because the sponsor asked, or refusing because a baseline exists, both skip the decision process.",
      keywords: ["change request", "change control", "baseline", "scope creep", "CCB"], sources: ["eco2026"]
    },
    {
      id: "conflict", title: "Resolve the disagreement", domain: "People",
      summary: "Understand the cause of conflict and select a response that fits the stakes and available time.",
      principle: "Solve the shared problem while protecting people and the working relationship.",
      workedExample: "Two designers disagree about a design. With time available, compare evidence and shared acceptance criteria together. An immediate safety concern needs protective action before a longer problem-solving conversation.",
      trap: "Escalation, compromise, and collaboration have different uses; no one response fits every situation.",
      keywords: ["conflict", "disagreement", "argu", "collaborat", "negotiat", "team-building"], sources: ["eco2026"]
    },
    {
      id: "stakeholders", title: "Earn stakeholder support", domain: "People",
      summary: "Find out what stakeholders need and tailor engagement as the project changes.",
      principle: "Sending information is only useful when it creates the understanding people need.",
      workedExample: "A service manager resists a new platform because support staffing is unclear. A targeted discussion of handover and workload can address that concern more effectively than another generic status report.",
      trap: "Silence does not prove support, and a stakeholder's needs can change after kickoff.",
      keywords: ["stakeholder", "communication", "engagement", "salience", "power/interest", "register"], sources: ["eco2026"]
    },
    {
      id: "risk-issue", title: "Risk or issue?", domain: "Process",
      summary: "Prepare for uncertain events; manage events that have already happened as current issues.",
      principle: "Match the action to what is uncertain, what has occurred, and who owns the response.",
      workedExample: "A supplier might miss a future delivery: assess that risk and plan a response. If the supplier confirms the delivery has failed, activate the response, assign issue actions, and assess the resulting impact.",
      trap: "Recording a problem does not resolve it; avoid leaving an active issue in a list of future risks.",
      keywords: ["risk", "issue", "contingency", "mitigat", "response", "probability", "opportunity"], sources: ["eco2026"]
    },
    {
      id: "agile-priorities", title: "Make room for value", domain: "Process",
      summary: "Discuss value, effort, capacity, and the current goal before changing agile work.",
      principle: "The Product Owner orders the Product Backlog; Developers plan how much work they can deliver.",
      workedExample: "Before Sprint Planning, the Product Owner brings a valuable new idea. The team clarifies it and discusses effort. During a Sprint, newly discovered work requires a discussion about the Sprint Goal and scope rather than an automatic addition.",
      trap: "A high-priority request is not unlimited team capacity, and the Sprint Goal must remain protected.",
      keywords: ["Product Owner", "backlog", "Sprint Goal", "capacity", "velocity", "prioriti"], sources: ["eco2026", "scrum"]
    },
    {
      id: "earned-value", title: "Read the project numbers", domain: "Process",
      summary: "Compare earned value with actual cost for cost performance and planned value for schedule performance.",
      principle: "CPI = EV / AC. SPI = EV / PV. Interpret each measure separately.",
      workedExample: "EV is $48,000, AC is $60,000, and PV is $40,000. CPI is 0.80: the work has cost more than its budgeted value. SPI is 1.20: more budgeted work is complete than planned at this point.",
      trap: "A project can be ahead of plan and over budget at the same time. Budget-based schedule measures do not directly tell you days late.",
      keywords: ["earned value", "EV", "CPI", "SPI", "cost variance", "schedule variance", "EAC", "VAC", "TCPI"], sources: ["eco2026", "evm"]
    },
    {
      id: "quality-acceptance", title: "Correct, done, and accepted", domain: "Process",
      summary: "Distinguish checking quality from obtaining acceptance and keep the quality standard intact.",
      principle: "Conformance, a shared completion standard, and authorized acceptance answer different questions.",
      workedExample: "An internal test shows a report meets the agreed specifications. Customer acceptance still follows the agreed acceptance process. In Scrum, work that fails the Definition of Done is not part of a usable Increment.",
      trap: "A deadline or a positive demonstration does not replace the agreed quality and acceptance criteria.",
      keywords: ["quality", "Validate Scope", "acceptance", "accepted", "Definition of Done", "defect", "testing"], sources: ["eco2026", "scrum"]
    },
    {
      id: "business-value", title: "Deliver benefits, not just outputs", domain: "Business",
      summary: "Keep the business case relevant and connect deliverables to measurable benefits and accountable owners.",
      principle: "A finished deliverable creates an opportunity for value; benefits still need adoption and measurement.",
      workedExample: "Installing a scheduling tool is an output. Reducing missed appointments is a benefit. Agree on the baseline, target, measurement date, and operational owner who will monitor that reduction.",
      trap: "Money already spent does not establish that the remaining investment is worthwhile.",
      keywords: ["benefit", "business case", "value", "sunk", "strategic", "governance", "ROI"], sources: ["eco2026", "benefits"]
    },
    {
      id: "ethics-ai", title: "Keep judgment accountable", domain: "Business",
      summary: "Use evidence, transparency, and human accountability when decisions involve people, data, or AI.",
      principle: "A tool's recommendation does not transfer professional responsibility away from the people using it.",
      workedExample: "An AI planning tool favors a supplier using incomplete historical data. Validate the data and selection criteria, involve authorized reviewers, and document the decision instead of treating the recommendation as approval.",
      trap: "A convincing output can still be inaccurate, biased, confidential, or unsupported.",
      keywords: ["AI", "ethic", "bias", "conflict of interest", "gift", "confidential", "honesty", "privacy"], sources: ["eco2026", "ethics"]
    },
    {
      id: "hybrid-tailoring", title: "Choose the approach that fits", domain: "Process",
      summary: "Tailor delivery and governance to uncertainty, feedback needs, dependencies, and constraints.",
      principle: "Use enough structure to manage the actual risks while preserving useful opportunities to learn.",
      workedExample: "A medical device project has evolving interface needs and fixed approval evidence. The team can test interface ideas iteratively while planning compliance evidence and approval gates across the release.",
      trap: "A method's popularity does not make it suitable for every part of a project.",
      keywords: ["hybrid", "tailor", "predictive", "adaptive", "approach", "iterative", "life cycle"], sources: ["eco2026"]
    }
  ],
  missions: [
    {
      id: "mission-change", title: "Handle the late request", conceptId: "change-control", domain: "Process", minutes: 8,
      briefing: "Your project has a launch date. A sponsor has one more idea. Help the team make an informed change decision.",
      lesson: "A baseline is an approved reference, not a ban on change. First make sure the request and its expected benefit are understood. Assess its effects and follow the agreed approval process before committing to changed work. In an adaptive setting, the same need for informed tradeoffs may use backlog refinement instead of a formal board.",
      steps: [
        {
          id: "change-baseline", approach: "Predictive",
          scenario: "A sponsor requests a new dashboard on a project with approved scope and a fixed launch date. The request has not been analyzed. There is no emergency, and your change plan requires an impact assessment before approval.",
          prompt: "What is the most useful next step?", correct: 1,
          hint: "What information does the authorized decision-maker still need?",
          principle: "Clarify and assess the request, then obtain the approval required by the change plan.",
          options: [
            { text: "Schedule the dashboard because the sponsor requested it.", feedback: "The sponsor's interest matters, but the request is not yet an informed approval. Committing the team now hides the effect on the fixed launch date.", misconception: "Committing before assessment" },
            { text: "Clarify the benefit and assess the impact with the team.", feedback: "The missing impact assessment is the deciding clue. It lets the authorized decision-maker compare the dashboard's value with scope, cost, schedule, and risk tradeoffs.", misconception: "" },
            { text: "Ask the change board to approve before estimating it.", feedback: "You identified the approval route, but moved to a decision before supplying the impact information required by this project's plan.", misconception: "Following steps in the wrong order" },
            { text: "Decline the dashboard because scope is already baselined.", feedback: "An approved baseline supports controlled decisions. It does not make a potentially useful request automatically unacceptable.", misconception: "Treating a baseline as fixed forever" }
          ]
        },
        {
          id: "change-backlog", approach: "Agile",
          scenario: "On another project, the Product Owner suggests a dashboard before the next Sprint is planned. The team has limited capacity. The agreed governance allows ordinary feature changes through Product Backlog ordering.",
          prompt: "How should you apply the same principle here?", correct: 3,
          hint: "Keep the need for evidence and tradeoffs; adapt the procedure to this project's governance.",
          principle: "Evaluate value and effort before making priority and capacity decisions.",
          options: [
            { text: "Require a formal change board for every backlog update.", feedback: "You carried over the predictive project's procedure. This project explicitly allows ordinary feature changes through backlog ordering.", misconception: "Using one process in every context" },
            { text: "Promise the dashboard in the next Sprint to protect value.", feedback: "A valuable idea still competes for finite capacity. Promising delivery skips the team's effort and capacity discussion.", misconception: "Committing before assessment" },
            { text: "Keep the backlog order unchanged until the release ends.", feedback: "This would prevent useful adaptation even though the project's governance supports backlog changes.", misconception: "Treating a baseline as fixed forever" },
            { text: "Discuss value and effort, then make priority tradeoffs.", feedback: "You kept the principle while adapting the method. The Product Owner can order the backlog using value information, with the team's input on effort and capacity.", misconception: "" }
          ]
        }
      ]
    },
    {
      id: "mission-conflict", title: "Get the team moving again", conceptId: "conflict", domain: "People", minutes: 8,
      briefing: "Two experienced colleagues disagree. Find the response that fits both the problem and the situation.",
      lesson: "Conflict can reveal information the team needs. Understand its cause, the people involved, and the available time before selecting a response. When time and safety allow, working through evidence together can produce a durable agreement. An immediate threat requires protective action before a longer discussion.",
      steps: [
        {
          id: "conflict-design", approach: "Hybrid",
          scenario: "Two engineers favor different designs. Neither has compared the options against the agreed reliability criteria. Work has stalled, but you have two days to decide and no immediate safety issue.",
          prompt: "What should you do first?", correct: 2,
          hint: "There is time to solve the technical disagreement using shared criteria.",
          principle: "Understand the disagreement and facilitate evidence-based problem solving.",
          options: [
            { text: "Ask the sponsor to select the preferred engineering design.", feedback: "Escalating before the engineers compare their evidence gives the sponsor an unresolved technical dispute rather than an informed recommendation.", misconception: "Escalating before problem solving" },
            { text: "Split the implementation equally between the two designs.", feedback: "Compromise is not automatically a sound technical solution. The combined approach may satisfy neither reliability requirement.", misconception: "Compromising without evaluating the problem" },
            { text: "Help both compare evidence against the reliability criteria.", feedback: "The missing comparison and available time make joint problem solving appropriate. Shared criteria focus the discussion on the project need.", misconception: "" },
            { text: "Choose the design supported by the more senior engineer.", feedback: "Seniority does not establish which design meets the criteria. This replaces evidence with position and leaves the disagreement unresolved.", misconception: "Substituting authority for evidence" }
          ]
        },
        {
          id: "conflict-safety", approach: "Predictive",
          scenario: "During equipment commissioning, two specialists disagree about a connection. One reports exposed live wiring that could injure a worker immediately. You have authority to pause unsafe work.",
          prompt: "What should you do first in this changed situation?", correct: 0,
          hint: "The immediate risk to people changes the order of action.",
          principle: "Protect people immediately, then investigate and resolve the underlying disagreement.",
          options: [
            { text: "Pause the affected work and secure qualified safety support.", feedback: "The immediate potential for injury is the deciding clue. Use your authority to protect people, then investigate and agree on a safe resolution.", misconception: "" },
            { text: "Hold a design workshop before deciding whether to pause.", feedback: "Collaboration remains useful, but waiting for a workshop leaves people exposed to the reported immediate hazard.", misconception: "Applying collaboration without considering urgency" },
            { text: "Continue testing while the specialists compare their views.", feedback: "This treats a current safety concern as an ordinary disagreement. Continuing the affected work preserves the exposure.", misconception: "Prioritizing delivery over immediate safety" },
            { text: "Record the disagreement for the next planned risk review.", feedback: "Recording supports follow-up, but it does not protect workers from the immediate reported condition.", misconception: "Recording instead of acting" }
          ]
        }
      ]
    },
    {
      id: "mission-stakeholders", title: "Turn concern into understanding", conceptId: "stakeholders", domain: "People", minutes: 7,
      briefing: "A project update has reached everyone, yet support is slipping. Find out what communication has missed.",
      lesson: "Stakeholder engagement is an ongoing activity. A report being delivered does not prove the recipient understands or supports the change. Find the person's concern and tailor the conversation to it. Update engagement and communication plans when the people or their needs change.",
      steps: [
        {
          id: "stakeholder-resistance", approach: "Predictive",
          scenario: "The operations manager received every status report but now resists rollout. In a short conversation, she says she does not know who will support the new system after launch. Support ownership is not yet agreed.",
          prompt: "What is the best next action?", correct: 0,
          hint: "The specific concern is the missing support arrangement.",
          principle: "Address the stakeholder's underlying need and agree on concrete responsibilities.",
          options: [
            { text: "Work with her and the relevant owners to agree on support.", feedback: "You use the stated concern to target engagement. Agreeing on support responsibilities addresses the real barrier to rollout.", misconception: "" },
            { text: "Increase the status report frequency for all stakeholders.", feedback: "More reporting does not settle who will support the system. The communication needs to address this specific concern.", misconception: "Confusing information delivery with engagement" },
            { text: "Ask the sponsor to require her written support immediately.", feedback: "A signature would not create a workable support arrangement. First address the operational concern with the right people.", misconception: "Using authority before understanding needs" },
            { text: "Mark her as informed because every report was delivered.", feedback: "Receipt of reports is evidence of distribution, not of understanding or readiness to operate the system.", misconception: "Confusing information delivery with engagement" }
          ]
        },
        {
          id: "stakeholder-new-user", approach: "Agile",
          scenario: "After a Sprint Review, a newly appointed accessibility lead identifies a user group that was missing from discovery. Their needs could affect upcoming backlog items. There is no immediate compliance breach.",
          prompt: "What should happen next?", correct: 2,
          hint: "A new stakeholder and new information call for updated understanding.",
          principle: "Reassess stakeholder needs and use feedback to inform upcoming work.",
          options: [
            { text: "Wait until the final release to add the new user group.", feedback: "Waiting increases the chance of expensive rework and lost value. Stakeholder analysis should evolve as relevant people are discovered.", misconception: "Treating stakeholder analysis as a one-time task" },
            { text: "Add every requested feature to the current Sprint.", feedback: "The needs require understanding and prioritization. Adding work immediately bypasses capacity, the Sprint Goal, and the Product Owner's role.", misconception: "Committing before assessment" },
            { text: "Explore their needs and discuss backlog implications with the Product Owner.", feedback: "You update the team's understanding before making a commitment. The Product Owner can weigh these needs against other product priorities.", misconception: "" },
            { text: "Send the existing project report as the complete response.", feedback: "The existing report was created without these needs. Sending it alone misses the opportunity to learn from a newly identified stakeholder.", misconception: "Confusing information delivery with engagement" }
          ]
        }
      ]
    },
    {
      id: "mission-risk", title: "Spot the turning point", conceptId: "risk-issue", domain: "Process", minutes: 7,
      briefing: "A supplier warning changes into a confirmed problem. Adjust the response as the facts change.",
      lesson: "A risk involves uncertainty; an issue is a situation that currently needs attention. Assess a future event's likelihood and impact so an owner can prepare a suitable response. When it occurs, manage the current effects and activate the agreed response where appropriate. Keep both the response and the relevant records up to date.",
      steps: [
        {
          id: "risk-warning", approach: "Predictive",
          scenario: "A supplier says a component delivery may be delayed next month. There is no confirmed delay yet. The component has a backup source, but switching suppliers would add cost.",
          prompt: "What is the most appropriate next action?", correct: 3,
          hint: "The delivery may be late; it has not failed yet.",
          principle: "Assess the uncertainty and prepare an owned response before committing to an expensive action.",
          options: [
            { text: "Use the schedule reserve immediately as a confirmed delay.", feedback: "You are treating a possible event as if it has happened. First understand the exposure and the conditions for using the agreed response.", misconception: "Confusing a risk with a current issue" },
            { text: "Change suppliers now without comparing the alternatives.", feedback: "A proactive response can be sensible, but this action commits extra cost before the team evaluates likelihood, impact, and options.", misconception: "Committing before assessment" },
            { text: "Wait for the delivery date before planning a response.", feedback: "The advance warning provides time to prepare. Waiting discards the opportunity to reduce disruption if the event occurs.", misconception: "Waiting instead of preparing" },
            { text: "Assess likelihood and impact, assign an owner, and plan a response.", feedback: "The uncertain future delivery is a risk. An assessment and owned response let the project prepare while avoiding an unsupported commitment.", misconception: "" }
          ]
        },
        {
          id: "risk-materialized", approach: "Predictive",
          scenario: "The supplier now confirms the delivery will miss the needed date. Your approved response authorizes an alternate source when this trigger occurs, within a specified cost limit. The alternate is available within that limit.",
          prompt: "What should you do now?", correct: 1,
          hint: "The trigger has occurred and the response authority is already defined.",
          principle: "Manage the active issue and use the authorized response, while communicating the impact.",
          options: [
            { text: "Keep it only in the risk register until the next monthly review.", feedback: "The delay is now confirmed. Leaving it only as a future uncertainty postpones action on a current delivery problem.", misconception: "Confusing a current issue with a future risk" },
            { text: "Activate the approved response and track the delivery issue.", feedback: "The confirmed delay meets the agreed trigger and limit. Use that authority, track the issue actions, and communicate the revised impact.", misconception: "" },
            { text: "Request the same response approval again before acting.", feedback: "The scenario already provides approval, a trigger, and a cost limit. Seeking duplicate approval adds delay without a stated governance need.", misconception: "Missing existing decision authority" },
            { text: "Close the risk because the uncertainty has ended.", feedback: "Its status needs updating, but simply closing the risk ignores the current issue and the response that still needs execution.", misconception: "Recording instead of acting" }
          ]
        }
      ]
    },
    {
      id: "mission-agile", title: "Protect value and capacity", conceptId: "agile-priorities", domain: "Process", minutes: 8,
      briefing: "A valuable feature arrives. Help the product team decide how to handle it before and during a Sprint.",
      lesson: "In Scrum, the Product Owner is accountable for ordering the Product Backlog. Developers use capacity and delivery experience to select a feasible amount of work in planning. During a Sprint, scope can be clarified and renegotiated with the Product Owner as learning occurs. Such changes must preserve the Sprint Goal and the quality standard.",
      steps: [
        {
          id: "agile-planning", approach: "Agile",
          scenario: "Before Sprint Planning, sales requests a valuable feature. The Product Owner considers it important, but Developers say the proposed Sprint workload is already near capacity. No Sprint commitment has been made.",
          prompt: "What is the best way forward?", correct: 2,
          hint: "Who orders value, and who determines feasible work?",
          principle: "Discuss priority tradeoffs while respecting the team's delivery capacity.",
          options: [
            { text: "Let sales add the feature without removing any other work.", feedback: "Stakeholder input is useful, but sales does not determine Sprint capacity. The new feature still requires a priority and feasibility discussion.", misconception: "Ignoring capacity and accountabilities" },
            { text: "Have the project manager assign all features to Developers.", feedback: "This bypasses the Product Owner's ordering role and the Developers' planning responsibility instead of resolving the tradeoff.", misconception: "Confusing agile accountabilities" },
            { text: "Have the Product Owner discuss tradeoffs with Developers.", feedback: "This joins the Product Owner's value decisions with the Developers' understanding of effort and capacity before work is selected.", misconception: "" },
            { text: "Exclude the feature because the earlier forecast is complete.", feedback: "Sprint Planning has not occurred. A forecast supports planning; it does not prohibit considering newly valuable work.", misconception: "Treating a forecast as a fixed commitment" }
          ]
        },
        {
          id: "agile-mid-sprint", approach: "Agile",
          scenario: "Mid-Sprint, customer feedback reveals a small change that supports the existing Sprint Goal. Developers and the Product Owner believe equivalent lower-value work can be removed without reducing quality.",
          prompt: "What should the Scrum Team do?", correct: 0,
          hint: "The Sprint Goal is still valid; the team has a feasible tradeoff.",
          principle: "Adapt the scope through collaboration while protecting the Sprint Goal and quality.",
          options: [
            { text: "Renegotiate the scope together and update the Sprint plan.", feedback: "The change supports the same goal, and the team can make a feasible tradeoff. Adapting the plan does not require abandoning the Sprint.", misconception: "" },
            { text: "Reject any change after Sprint Planning has finished.", feedback: "This applies an absolute rule. Scrum permits scope clarification and renegotiation with the Product Owner while protecting the Sprint Goal.", misconception: "Using a rigid rule without context" },
            { text: "Keep all original work and add the change as overtime.", feedback: "The scenario offers a scope tradeoff. Automatically adding work ignores capacity and increases delivery risk.", misconception: "Ignoring capacity and accountabilities" },
            { text: "Cancel the Sprint because customer feedback arrived.", feedback: "The goal remains valid, so the stated reason for cancellation is absent. The Product Owner's cancellation authority is not a substitute for adapting the plan.", misconception: "Escalating beyond what the situation needs" }
          ]
        }
      ]
    },
    {
      id: "mission-numbers", title: "Decode the status report", conceptId: "earned-value", domain: "Process", minutes: 9,
      briefing: "A project can spend less and still be behind. Use earned value to explain what the numbers actually show.",
      lesson: "Earned value expresses completed work using its approved budget value. Compare it with actual cost to assess cost efficiency and with planned value to assess progress against plan. A ratio below one signals unfavorable performance for that measure. Read the measures separately and investigate causes before selecting a corrective action.",
      steps: [
        {
          id: "numbers-ahead-over", approach: "Predictive",
          scenario: "A report shows earned value (EV) of $48,000, actual cost (AC) of $60,000, and planned value (PV) of $40,000. The team asks how to describe current performance.",
          prompt: "Which interpretation is correct?", correct: 1,
          hint: "Calculate EV / AC for cost and EV / PV for schedule performance.",
          principle: "CPI = 0.80 and SPI = 1.20: over budget for completed work and ahead of planned work.",
          options: [
            { text: "Under budget and behind plan: CPI 1.25, SPI 0.83.", feedback: "Both ratios were inverted. EV belongs in the numerator: 48,000 / 60,000 = 0.80 and 48,000 / 40,000 = 1.20.", misconception: "Reversing performance ratios" },
            { text: "Over budget and ahead of plan: CPI 0.80, SPI 1.20.", feedback: "Correct. Completed work worth $48,000 cost $60,000, but exceeds the $40,000 of work planned by now. Cost and schedule can move in different directions.", misconception: "" },
            { text: "Over budget and behind plan because AC is highest.", feedback: "AC helps assess cost, not schedule progress. The schedule comparison uses EV and PV; here EV exceeds PV.", misconception: "Using cost data to judge schedule" },
            { text: "Under budget and ahead of plan because EV exceeds PV.", feedback: "EV exceeding PV indicates more completed work than planned, but says nothing favorable about cost. Cost performance compares EV with AC.", misconception: "Confusing cost and schedule measures" }
          ]
        },
        {
          id: "numbers-behind-under", approach: "Predictive",
          scenario: "Another project has EV of $30,000, AC of $25,000, and PV of $40,000. A colleague says spending less than planned proves the project is on track.",
          prompt: "What is the most accurate response?", correct: 3,
          hint: "Less spending can reflect less work. Use the earned value comparisons.",
          principle: "CPI = 1.20 and SPI = 0.75: favorable cost efficiency, but less work completed than planned.",
          options: [
            { text: "Agree: actual spending below planned value proves success.", feedback: "Comparing AC with PV alone leaves out how much work was completed. EV is below PV, so progress is behind the plan.", misconception: "Confusing low spending with good performance" },
            { text: "Report both cost and schedule as unfavorable.", feedback: "The project is behind planned work, but EV exceeds AC. Its CPI is 30,000 / 25,000 = 1.20, which is favorable cost efficiency.", misconception: "Confusing cost and schedule measures" },
            { text: "Report a 25-day schedule delay because SPI is 0.75.", feedback: "SPI compares budgeted work values, not calendar days. It cannot by itself establish a specific number of days late.", misconception: "Interpreting a ratio as calendar time" },
            { text: "Explain that cost efficiency is favorable but work is behind plan.", feedback: "CPI is 1.20 while SPI is 0.75. These show favorable cost efficiency and unfavorable schedule performance; the causes still need investigation.", misconception: "" }
          ]
        }
      ]
    },
    {
      id: "mission-quality", title: "Know when work is really done", conceptId: "quality-acceptance", domain: "Process", minutes: 8,
      briefing: "A deliverable passes internal checks. Decide what that proves, and what still needs to happen.",
      lesson: "Quality checks establish whether work meets specified requirements. Formal acceptance is an authorized customer's or sponsor's decision under the agreed process. In Scrum, a shared Definition of Done establishes the quality standard for an Increment. A deadline or a favorable demonstration does not remove an unmet completion requirement.",
      steps: [
        {
          id: "quality-customer", approach: "Predictive",
          scenario: "A reporting package passes all internal tests against its specifications. The contract requires the customer's authorized representative to accept it, and that review has not happened.",
          prompt: "What should the project manager arrange next?", correct: 0,
          hint: "Internal correctness and authorized acceptance are different decisions.",
          principle: "Use the agreed acceptance process after the required verification evidence is available.",
          options: [
            { text: "Present the verified deliverable for the agreed acceptance review.", feedback: "Internal tests provide quality evidence. The separate customer acceptance required by this contract is still outstanding.", misconception: "" },
            { text: "Record customer acceptance because all internal tests passed.", feedback: "The tests verify conformance, but the scenario gives acceptance authority to the customer's representative.", misconception: "Confusing quality checks with acceptance" },
            { text: "Close the project before requesting the customer's decision.", feedback: "The required acceptance review has not happened. Closing first skips an explicit condition in the agreed process.", misconception: "Closing before required acceptance" },
            { text: "Repeat the same tests instead of involving the customer.", feedback: "No failed test or missing evidence is stated. More internal testing cannot replace the authorized customer's acceptance decision.", misconception: "Confusing quality checks with acceptance" }
          ]
        },
        {
          id: "quality-dod", approach: "Agile",
          scenario: "A Scrum team's feature works in a demonstration but has not passed the security checks in its Definition of Done. The Sprint ends today, and a stakeholder wants the feature counted as a completed Increment.",
          prompt: "What is the appropriate response?", correct: 2,
          hint: "Demonstration success does not satisfy the missing security requirement.",
          principle: "Work must meet the Definition of Done to become part of the Increment.",
          options: [
            { text: "Count it as done because the stakeholder liked the demonstration.", feedback: "Positive feedback does not replace the shared quality standard. The specified security checks remain incomplete.", misconception: "Confusing a demonstration with completion" },
            { text: "Remove the security requirement so the team can finish on time.", feedback: "Changing the standard to accommodate unfinished work reduces quality. The deadline does not justify bypassing the agreed checks.", misconception: "Lowering quality to meet a deadline" },
            { text: "Keep it out of the Increment and make the remaining work transparent.", feedback: "The unmet Definition of Done is decisive. The work is not yet part of the Increment; make the unfinished checks visible and return the item for future consideration.", misconception: "" },
            { text: "Ask the Scrum Master to accept it on the customer's behalf.", feedback: "The Scrum Master does not have an override that makes unmet quality requirements disappear. The same Definition of Done still applies.", misconception: "Confusing agile accountabilities" }
          ]
        }
      ]
    },
    {
      id: "mission-value", title: "Follow the benefit", conceptId: "business-value", domain: "Business", minutes: 8,
      briefing: "Your team can finish the work. Establish whether it will still produce a worthwhile result.",
      lesson: "Project outputs enable outcomes, but benefits require people to use the result successfully. Define measures and owners so the expected value can be checked after delivery. Revisit the business case when assumptions change. Authorized governance should compare remaining costs, risks, and expected benefits when deciding whether to continue or change direction.",
      steps: [
        {
          id: "value-adoption", approach: "Hybrid",
          scenario: "A scheduling platform launches on time and passes acceptance. Its intended benefit is fewer missed appointments, but adoption is low. No one has been assigned to measure appointment outcomes after launch.",
          prompt: "Which action best supports the intended benefit?", correct: 3,
          hint: "Delivery has happened. What is missing between the platform and the business result?",
          principle: "Connect adoption, benefit measures, and ongoing ownership.",
          options: [
            { text: "Declare the benefit achieved because the platform was accepted.", feedback: "Acceptance confirms delivery conditions, not a reduction in missed appointments. The stated business result still needs evidence.", misconception: "Confusing outputs with benefits" },
            { text: "Measure only the number of features delivered on time.", feedback: "Feature delivery is an output measure. It does not show whether people use the platform or whether missed appointments decrease.", misconception: "Measuring activity instead of outcomes" },
            { text: "Add more features before discussing the adoption problem.", feedback: "Additional features may not address the cause of low adoption. First establish ownership, measures, and what prevents the intended use.", misconception: "Adding scope before understanding the problem" },
            { text: "Agree on an operational owner, adoption actions, and benefit measures.", feedback: "This addresses the missing link between the accepted platform and fewer missed appointments. An owner can track outcomes and coordinate adoption after project handover.", misconception: "" }
          ]
        },
        {
          id: "value-business-case", approach: "Predictive",
          scenario: "Halfway through another project, a market change substantially reduces the expected benefit. Most remaining costs have not yet been incurred. The sponsor asks whether to continue under the organization's investment governance.",
          prompt: "What should guide the next decision?", correct: 1,
          hint: "Which information helps choose the best use of resources from this point onward?",
          principle: "Reassess future value and remaining exposure through the authorized governance process.",
          options: [
            { text: "Continue because the money already spent must be recovered.", feedback: "Past spending cannot be changed by today's decision. It does not establish that the remaining investment is worthwhile.", misconception: "Using sunk cost to justify continuation" },
            { text: "Update the business case using remaining costs, risks, and benefits.", feedback: "The changed assumption calls for a current comparison of future value and exposure. Present it to the authorized governance body rather than deciding from past spending alone.", misconception: "" },
            { text: "Cancel immediately without involving the sponsor or governance.", feedback: "The reduced benefit deserves reassessment, but cancellation authority belongs to the organization's agreed governance process.", misconception: "Exceeding decision authority" },
            { text: "Keep the original business case until the project is complete.", feedback: "A business case should inform current decisions. Leaving a material changed assumption unexamined prevents an informed choice.", misconception: "Treating the business case as a one-time document" }
          ]
        }
      ]
    },
    {
      id: "mission-ethics", title: "Keep the decision trustworthy", conceptId: "ethics-ai", domain: "Business", minutes: 8,
      briefing: "An AI recommendation looks convincing. Check what makes a project decision defensible.",
      lesson: "Professionals remain accountable for decisions made with technology. Check that relevant data, assumptions, and criteria support a recommendation. Disclose conflicts through the agreed process and protect information using approved practices. An AI result or another person's request is not a substitute for the authorization and evidence the situation needs.",
      steps: [
        {
          id: "ethics-ai-bias", approach: "Hybrid",
          scenario: "An AI tool ranks suppliers using past awards. A reviewer notices that the historical data excludes several qualified small suppliers. No selection decision has been made, and procurement requires a documented evaluation against agreed criteria.",
          prompt: "What should the project manager do?", correct: 2,
          hint: "Consider the reliability and completeness of the evidence before using the ranking.",
          principle: "Validate AI-supported recommendations and retain accountable human decision-making.",
          options: [
            { text: "Use the ranking because historical awards are objective evidence.", feedback: "Past awards may reflect incomplete participation. The identified gap could distort the recommendation and must be assessed against the agreed criteria.", misconception: "Treating AI output as verified evidence" },
            { text: "Change the ranking manually without recording a reason.", feedback: "An undocumented override replaces one unsupported process with another. Evaluate the data and criteria transparently with the authorized reviewers.", misconception: "Correcting a result without a defensible process" },
            { text: "Review the data gap and validate options against the agreed criteria.", feedback: "The excluded qualified suppliers are the deciding clue. Human reviewers should check the evidence and document a fair evaluation before a selection is authorized.", misconception: "" },
            { text: "Ask the vendor of the AI tool to make the selection decision.", feedback: "The tool vendor does not inherit your organization's procurement authority or professional accountability.", misconception: "Transferring accountability to a tool" }
          ]
        },
        {
          id: "ethics-conflict", approach: "Predictive",
          scenario: "You join an evaluation panel and discover that a bidding supplier is managed by a close relative. The procurement policy requires disclosure and an independent decision on participation. You believe you can remain impartial.",
          prompt: "What is the appropriate next action?", correct: 0,
          hint: "Personal confidence in impartiality does not replace the stated disclosure process.",
          principle: "Make potential conflicts visible and follow the authorized process for handling them.",
          options: [
            { text: "Disclose the relationship and follow the participation decision.", feedback: "The relationship creates a potential conflict regardless of your intent. Disclosure allows an independent decision under the stated policy.", misconception: "" },
            { text: "Keep evaluating because you intend to score everyone fairly.", feedback: "Good intent does not satisfy the explicit disclosure requirement or allow others to assess the potential conflict.", misconception: "Confusing good intent with proper governance" },
            { text: "Score the relative's supplier lower to remove any advantage.", feedback: "Deliberately changing a score would undermine fairness. The appropriate response is disclosure and independent handling of your participation.", misconception: "Correcting a conflict through biased scoring" },
            { text: "Ask the relative to promise not to discuss the bid with you.", feedback: "A private agreement does not replace the organization's required disclosure and participation decision.", misconception: "Handling a conflict privately" }
          ]
        }
      ]
    },
    {
      id: "mission-hybrid", title: "Fit the method to the work", conceptId: "hybrid-tailoring", domain: "Process", minutes: 8,
      briefing: "Some work is uncertain; some commitments are fixed. Shape a delivery approach around the real conditions.",
      lesson: "Tailoring starts with the project's needs and constraints. Consider how stable requirements are, how quickly feedback is needed, and what evidence or approvals are mandatory. Different parts of a project may benefit from different delivery practices. Revisit the arrangement when new information changes the context, with the appropriate stakeholders and governance.",
      steps: [
        {
          id: "hybrid-device", approach: "Hybrid",
          scenario: "A device project has mandatory approval evidence and an uncertain user interface. Teams can test interface ideas safely in short cycles, but the release cannot proceed without the required compliance evidence.",
          prompt: "Which approach best fits these conditions?", correct: 1,
          hint: "Can the team learn about the interface while still planning the required evidence?",
          principle: "Combine feedback-driven development with explicit management of mandatory approvals.",
          options: [
            { text: "Freeze every interface detail before gathering user feedback.", feedback: "This treats uncertain needs as already known and postpones useful learning, even though short, safe tests are available.", misconception: "Using a fixed plan for uncertain work" },
            { text: "Iterate the interface while planning compliance evidence and release gates.", feedback: "You match the approach to both conditions: iterative learning for uncertain needs and planned evidence for mandatory approvals.", misconception: "" },
            { text: "Replace the approval evidence with stakeholder demonstrations.", feedback: "Feedback is useful but cannot substitute for the stated mandatory approval evidence.", misconception: "Treating agility as an exemption from governance" },
            { text: "Choose one method for every activity to keep governance simple.", feedback: "Consistency can help, but forcing one delivery method onto work with different needs may reduce learning or control. Integration matters more than uniformity.", misconception: "Using one process in every context" }
          ]
        },
        {
          id: "hybrid-clear-work", approach: "Predictive",
          scenario: "Another project replaces standard equipment at 40 sites. The specifications are stable, the installation sequence is well understood, and access windows are fixed. A colleague proposes adding rapid experiments to every installation because another team's product work benefited from them.",
          prompt: "What should you recommend?", correct: 3,
          hint: "Which uncertainty would those experiments resolve on this project?",
          principle: "Select practices because they address the project's conditions, and adjust when evidence supports a change.",
          options: [
            { text: "Use the other team's approach without reviewing the differences.", feedback: "A method's success elsewhere does not establish its fit here. This project has stable specifications and fixed access windows.", misconception: "Copying a method without considering context" },
            { text: "Prohibit any learning or adaptation after planning is complete.", feedback: "Stable work can still reveal new information. A predictive plan should remain responsive to evidence through its agreed controls.", misconception: "Using a rigid rule without context" },
            { text: "Remove the access-window commitments to enable experimentation.", feedback: "The fixed access windows are a real constraint. Changing them without authority or a demonstrated need would create avoidable disruption.", misconception: "Ignoring stated constraints" },
            { text: "Use the understood sequence and review improvements as evidence emerges.", feedback: "The known work and fixed windows support a planned sequence. You can still inspect results and adapt where actual evidence justifies a change.", misconception: "" }
          ]
        }
      ]
    }
  ]
};
