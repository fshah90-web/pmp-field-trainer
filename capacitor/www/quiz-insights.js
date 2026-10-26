/* Professor feedback for the 300-question bank.
 * IDs use an FNV-1a hash of the whitespace-normalized question stem.
 * why[] follows ORIGINAL q.o order, before the display options are shuffled.
 * No storage or learner analytics: callers own attempt persistence.
 * Metadata reviewed against the July 2026 PMI ECO and 2020 Scrum Guide.
 */
(function(global){
  'use strict';
  const DATA = {
  "q-aa8aab76": {
    "conceptId": "conflict",
    "clue": "The work is stalled by a design disagreement that the engineers can resolve together.",
    "why": [
      "Collaborating / problem-solving produces a lasting win-win and is PMI's preferred conflict mode. Avoid authority, compromise, or avoidance when there is time to solve the real issue.",
      "Sponsor arbitration bypasses the people with the technical knowledge before they have explored a shared solution.",
      "Splitting the difference may leave both designs weakened without resolving the underlying technical issue.",
      "Reassignment avoids the disagreement and loses an engineer’s contribution without solving the design problem."
    ],
    "tip": "Invite the parties to identify interests and evaluate options together.",
    "conceptTitle": "Conflict and collaboration",
    "id": "q-aa8aab76",
    "specific": true
  },
  "q-621b9eb1": {
    "conceptId": "conflict",
    "clue": "The release is only 20 minutes away; the intervention is explicitly temporary.",
    "why": [
      "When stakes are high and time is extremely short, forcing is an acceptable temporary measure. Return to collaboration afterward to address the underlying issue.",
      "A full collaborative discussion may take longer than the immediate release window; use it afterward to resolve the cause.",
      "Withdrawing leaves the immediate argument and blocked release unresolved.",
      "Smoothing emphasizes agreement but may not produce the immediate decision this release requires."
    ],
    "tip": "Match the conflict response to urgency, then return to the root cause.",
    "conceptTitle": "Conflict and collaboration",
    "id": "q-621b9eb1",
    "specific": true
  },
  "q-5ee04493": {
    "conceptId": "team-development",
    "clue": "Friction appeared after the team’s membership changed.",
    "why": [
      "Teams commonly slip back to Storming when a member joins or leaves, the goal changes, or the team is reorganized.",
      "Forming centers on initial orientation; the renewed friction points to storming.",
      "Norming means shared expectations are settling; this team is experiencing renewed conflict.",
      "Adjourning is the ending and disbanding stage, not a response to a new member."
    ],
    "tip": "Team development can move backward when membership or conditions change.",
    "conceptTitle": "Team development and working agreements",
    "id": "q-5ee04493",
    "specific": true
  },
  "q-b24fae13": {
    "conceptId": "servant-leadership",
    "clue": "The dependency is outside the team’s ability to resolve.",
    "why": [
      "Removing impediments is the core of the servant-leader role. If an option says the leader cleared a blocker, it is usually correct.",
      "Giving detailed instructions takes over the team’s work; the leader’s useful action is clearing the external blocker.",
      "Replacing a team member does not remove an external dependency.",
      "This is an existing impediment; recording a possible risk and waiting will not unblock the team."
    ],
    "tip": "Support self-management while helping with blockers beyond the team’s control.",
    "conceptTitle": "Servant leadership",
    "id": "q-b24fae13",
    "specific": true
  },
  "q-27f8d443": {
    "conceptId": "servant-leadership",
    "clue": "The team is new and is not yet succeeding at self-management.",
    "why": [
      "A sanctioned exception to non-directive leadership: a team genuinely new to agile may be led more directively until it can self-organize.",
      "Leaving an inexperienced team unsupported repeats the condition that is causing it to struggle.",
      "Replacing people skips coaching and capability development.",
      "The difficulty calls for tailored support, not abandoning agile without investigating its needs."
    ],
    "tip": "Increase support when needed and reduce direction as capability grows.",
    "conceptTitle": "Servant leadership",
    "id": "q-27f8d443",
    "specific": true
  },
  "q-cb03339f": {
    "conceptId": "cognitive-bias",
    "clue": "Technical excellence was assumed to predict skill at managing people.",
    "why": [
      "The halo effect assumes someone good at one thing (engineering) will be good at an unrelated thing (managing people) — a classic promotion trap.",
      "The Hawthorne effect concerns changed behavior under observation, not promotion based on an unrelated strength.",
      "Groupthink suppresses dissent in a group decision; the clue here is transferring a positive impression between skills.",
      "Confirmation bias favors evidence that supports an existing belief; halo specifically generalizes one strength to another area."
    ],
    "tip": "Assess the skills required for the new role independently.",
    "conceptTitle": "Judgment and cognitive biases",
    "id": "q-cb03339f",
    "specific": true
  },
  "q-a05f5c66": {
    "conceptId": "cognitive-bias",
    "clue": "Performance changed because the team knew it was being observed.",
    "why": [
      "The Hawthorne effect: people change behavior because they are being observed. It is also a warning that measurement itself can distort behavior.",
      "Halo effect generalizes a favorable impression; it does not describe reacting to being watched.",
      "Herzberg distinguishes motivators and hygiene factors, not observation effects.",
      "Theory X describes assumptions about controlling workers; observation itself is the deciding clue here."
    ],
    "tip": "Check whether the act of measuring is affecting the behavior measured.",
    "conceptTitle": "Judgment and cognitive biases",
    "id": "q-a05f5c66",
    "specific": true
  },
  "q-d81b875c": {
    "conceptId": "negotiation",
    "clue": "You identified the alternative available if no agreement is reached.",
    "why": [
      "BATNA = Best Alternative To a Negotiated Agreement. ZOPA is the zone of possible agreement; knowing your BATNA sets your walk-away point.",
      "ZOPA is the overlap in acceptable terms, not your alternative if negotiations fail.",
      "A walk-away price is a limit; BATNA is the action or option you can pursue without this agreement.",
      "A WBS decomposes project scope and has no role in naming a negotiation alternative."
    ],
    "tip": "Separate your alternative, your reservation point, and the bargaining zone.",
    "conceptTitle": "Negotiation and shared interests",
    "id": "q-d81b875c",
    "specific": true
  },
  "q-3adf73a3": {
    "conceptId": "negotiation",
    "clue": "The question asks for the first attempt at resolving a contract dispute.",
    "why": [
      "PMI's escalation order is negotiation → mediation → arbitration → litigation. Negotiation is always first; litigation is always last.",
      "Litigation moves to a court before trying a direct resolution.",
      "Arbitration involves a third-party decision; direct negotiation is the initial route in this question.",
      "Mediation brings in a neutral facilitator; direct negotiation is tried first in the sequence tested here."
    ],
    "tip": "Use the contract’s agreed dispute process and start with direct resolution where appropriate.",
    "conceptTitle": "Negotiation and shared interests",
    "id": "q-3adf73a3",
    "specific": true
  },
  "q-554b3086": {
    "conceptId": "coaching",
    "clue": "The cause of the repeated performance problem is not yet known.",
    "why": [
      "Assess and understand before acting. PMI favors coaching and addressing root causes over removing or working around people.",
      "Removal starts a punitive process before understanding whether training, workload, or another issue is responsible.",
      "Redistributing work hides the problem and may overload colleagues without helping the team member improve.",
      "Reducing responsibilities without discussion assumes a solution before diagnosing the cause."
    ],
    "tip": "Use a private conversation to understand the cause before choosing support or corrective action.",
    "conceptTitle": "Coaching and skill development",
    "id": "q-554b3086",
    "specific": true
  },
  "q-da183c88": {
    "conceptId": "motivation",
    "clue": "The question distinguishes factors that create satisfaction from factors that prevent dissatisfaction.",
    "why": [
      "Motivators (achievement, recognition, growth) drive satisfaction. Hygiene factors (salary, conditions, policies) only prevent dissatisfaction when adequate.",
      "Salary is a hygiene factor in Herzberg’s model, even though inadequate pay can strongly dissatisfy people.",
      "Working conditions are hygiene factors; they support an acceptable environment rather than being the motivator tested here.",
      "Company policies are hygiene factors in this model, unlike recognition and achievement."
    ],
    "tip": "In Herzberg’s model, distinguish satisfaction from the absence of dissatisfaction.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-da183c88",
    "specific": true
  },
  "q-73dff857": {
    "conceptId": "motivation",
    "clue": "The concern is losing employment and financial security.",
    "why": [
      "Job security sits at the Safety level. Lower-order needs must be met before higher ones meaningfully motivate.",
      "Esteem concerns recognition and respect; the immediate threat is security.",
      "Self-actualization concerns realizing potential, not the threatened stability of employment.",
      "Belonging concerns connection and acceptance; the scenario’s direct cue is fear of job loss."
    ],
    "tip": "Identify the need described by the scenario rather than the visible productivity symptom.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-73dff857",
    "specific": true
  },
  "q-d3fa08a8": {
    "conceptId": "motivation",
    "clue": "The manager assumes people willingly seek responsibility.",
    "why": [
      "Theory Y managers assume people want to do good work; Theory X managers assume people must be controlled and coerced.",
      "Theory X assumes people avoid work and need close control, the opposite of this manager’s assumption.",
      "Theory Z emphasizes long-term employment and collective involvement; the stated assumption specifically identifies Theory Y.",
      "Expectancy theory links effort, performance, and a valued outcome rather than defining assumptions about workers."
    ],
    "tip": "Match the leader’s assumption to the theory, not just to positive-sounding words.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-d3fa08a8",
    "specific": true
  },
  "q-7a338b4d": {
    "conceptId": "leadership-power",
    "clue": "Formal authority is limited in this matrix situation.",
    "why": [
      "Influencing without authority relies on expert and referent power — demonstrated competence and trusted relationships built before you need them.",
      "Threats depend on control the PM may not have and can damage cooperation.",
      "Positional power is weak here because team members report through other managers.",
      "Rewards alone are limited and do not replace the trust and competence needed to influence without authority."
    ],
    "tip": "Build influence through expertise, credibility, and relationships.",
    "conceptTitle": "Leadership and influence",
    "id": "q-7a338b4d",
    "specific": true
  },
  "q-cd5de598": {
    "conceptId": "stakeholders",
    "clue": "The clue is a gap between current and desired engagement.",
    "why": [
      "The stakeholder engagement assessment matrix plots Current (C) vs Desired (D) across unaware → resistant → neutral → supportive → leading. The gap drives your engagement actions.",
      "A power/interest grid groups stakeholders for attention; it does not directly show current versus desired engagement.",
      "RACI maps roles and accountability rather than stakeholder support levels.",
      "A fishbone diagram explores causes of a problem; it does not plot engagement states."
    ],
    "tip": "Use the assessment matrix to plan how to close the engagement gap.",
    "conceptTitle": "Stakeholder engagement",
    "id": "q-cd5de598",
    "specific": true
  },
  "q-47a22ca4": {
    "conceptId": "stakeholders",
    "clue": "Salience combines authority, a valid claim, and time sensitivity.",
    "why": [
      "Salience uses power, legitimacy, and urgency, yielding seven classes of stakeholder.",
      "Interest and influence appear in other stakeholder models; legitimacy and urgency define salience with power.",
      "Proximity and attitude are useful considerations but are not the three salience attributes.",
      "This set omits power and legitimacy, which are needed for the salience model."
    ],
    "tip": "Keep the attributes of different stakeholder models separate.",
    "conceptTitle": "Stakeholder engagement",
    "id": "q-47a22ca4",
    "specific": true
  },
  "q-454ca66b": {
    "conceptId": "emotional-intelligence",
    "clue": "The emotions being noticed and regulated are your own.",
    "why": [
      "Goleman splits EI into inbound (self-awareness, self-management) and outbound (social awareness, relationship management) competencies.",
      "Social awareness concerns recognizing other people’s emotions, not monitoring your own response.",
      "Relationship management concerns interactions with others rather than the inward skills named here.",
      "Empathy senses another person’s feelings; it does not name regulation of your own emotions."
    ],
    "tip": "Ask whose emotions are involved and whether the task is awareness or regulation.",
    "conceptTitle": "Emotional intelligence",
    "id": "q-454ca66b",
    "specific": true
  },
  "q-e786ed03": {
    "conceptId": "communication",
    "clue": "The collaboration problem spans time zones and working practices.",
    "why": [
      "Shared ground rules and a window of overlap address the root cause. PMI favors enabling collaboration over heavy-handed restructuring.",
      "Relocation is a major intervention before trying agreements and practical overlap.",
      "Replacing remote members sacrifices capability without first addressing how the team collaborates.",
      "Removing all synchronous contact can make shared understanding harder; agree on purposeful overlap instead."
    ],
    "tip": "Create shared expectations and choose communication methods that fit the team’s locations.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-e786ed03",
    "specific": true
  },
  "q-1c3e88b0": {
    "conceptId": "conflict",
    "clue": "The desired outcome fully satisfies both parties and resolves the problem.",
    "why": [
      "Collaborating (confronting the problem) is the only mode that pursues a true win-win; compromising means both sides give something up.",
      "Compromise trades concessions; it may be useful but does not fully satisfy both parties.",
      "Avoidance postpones engagement and does not seek a lasting joint solution.",
      "Forcing imposes a solution, typically at the expense of another party’s interests."
    ],
    "tip": "Distinguish a shared solution from a settlement or an imposed decision.",
    "conceptTitle": "Conflict and collaboration",
    "id": "q-1c3e88b0",
    "specific": true
  },
  "q-28c2307d": {
    "conceptId": "stakeholders",
    "clue": "Stakeholder discovery continues during execution.",
    "why": [
      "Identify Stakeholders is iterative. Newly discovered stakeholders are analyzed and the register and engagement plan are updated immediately.",
      "Newly discovered stakeholders may affect outcomes; the project phase does not justify ignoring them.",
      "A new stakeholder is not evidence that the project must be cancelled.",
      "Waiting until closing forfeits the opportunity to understand and engage them during delivery."
    ],
    "tip": "Analyze newly identified stakeholders and update the relevant records and engagement actions.",
    "conceptTitle": "Stakeholder engagement",
    "id": "q-28c2307d",
    "specific": true
  },
  "q-4c38e097": {
    "conceptId": "coaching",
    "clue": "The help targets a specific skill needed in current work.",
    "why": [
      "Coaching targets specific current-performance skills; mentoring is broader, longer-term career development.",
      "Mentoring usually supports broader, longer-term development rather than one immediate performance skill.",
      "Directing tells someone what to do; the question emphasizes developing their capability.",
      "Delegation assigns responsibility; it does not itself teach the missing skill."
    ],
    "tip": "Use coaching for focused development and mentoring for broader growth.",
    "conceptTitle": "Coaching and skill development",
    "id": "q-4c38e097",
    "specific": true
  },
  "q-9a17f60c": {
    "conceptId": "quality-acceptance",
    "clue": "Cutting testing creates stated quality and safety exposure.",
    "why": [
      "PMI expects you to surface the impact and offer options. Silent compliance and unilateral escalation past the sponsor are both wrong first moves.",
      "The sponsor’s authority does not remove the need to assess and communicate quality and safety consequences.",
      "Going over the sponsor immediately bypasses a chance to explain the impact and present viable options.",
      "Recording an objection does not control the risk created by eliminating testing."
    ],
    "tip": "Make consequences visible and propose safe alternatives through the appropriate decision process.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-9a17f60c",
    "specific": true
  },
  "q-e7f66324": {
    "conceptId": "negotiation",
    "clue": "Principled negotiation looks for the needs behind the demands.",
    "why": [
      "Separate the people from the problem and focus on underlying interests — ask why they want what they ask for — to find mutual-gain options.",
      "Arguing only over stated positions can hide the underlying needs and limit possible solutions.",
      "Treating value as fixed promotes distributive bargaining rather than exploring mutual gain.",
      "BATNA is important preparation, but focusing only on your alternative does not uncover shared interests."
    ],
    "tip": "Ask why each party wants a position before evaluating solutions.",
    "conceptTitle": "Negotiation and shared interests",
    "id": "q-e7f66324",
    "specific": true
  },
  "q-8f885032": {
    "conceptId": "negotiation",
    "clue": "The parties are dividing a fixed amount through price concessions.",
    "why": [
      "Distributive bargaining splits a fixed pie. PMI prefers integrative (win-win) negotiation that expands value and preserves the relationship.",
      "Integrative bargaining searches for additional value or tradeoffs; the scenario specifies no value expansion.",
      "Principled negotiation explores underlying interests and fair criteria; simple fixed-price haggling is distributive.",
      "BATNA is an alternative to agreement, not a style of bargaining."
    ],
    "tip": "Look for whether the parties divide fixed value or create additional value.",
    "conceptTitle": "Negotiation and shared interests",
    "id": "q-8f885032",
    "specific": true
  },
  "q-99002fbd": {
    "conceptId": "team-development",
    "clue": "Working agreements define shared expectations for collaborating.",
    "why": [
      "Team agreements create the shared norms and psychological safety a team needs to self-organize and perform.",
      "Scope control manages authorized deliverables; team agreements primarily govern how people work together.",
      "Earned value tracks performance against a baseline and is not the purpose of working agreements.",
      "Change control governs proposed baseline changes rather than everyday team norms."
    ],
    "tip": "Let the team shape the norms it will use to collaborate and raise concerns.",
    "conceptTitle": "Team development and working agreements",
    "id": "q-99002fbd",
    "specific": true
  },
  "q-c359b14a": {
    "conceptId": "communication",
    "clue": "Recurring misunderstandings suggest different communication expectations.",
    "why": [
      "Cultural competence plus agreed norms addresses the cause. Suppressing interaction or imposing one culture is counter to PMI's collaborative stance.",
      "Imposing one culture’s style reduces inclusion and may preserve the misunderstanding.",
      "Reducing interaction avoids the problem rather than building shared understanding.",
      "Writing can help some needs, but one channel alone does not resolve cultural differences."
    ],
    "tip": "Build awareness and agree on communication practices that the whole team understands.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-c359b14a",
    "specific": true
  },
  "q-cb495200": {
    "conceptId": "agile-prioritization",
    "clue": "Repeated overcommitment provides evidence that plans exceed capacity.",
    "why": [
      "Empirical data (velocity) lets the team commit realistically. Inspect and adapt beats pressure and punishment.",
      "Overtime can hide unrealistic planning and is not a sustainable substitute for inspecting capacity.",
      "Punishment discourages transparency and does not improve the forecast.",
      "Adding scope increases the mismatch between commitments and demonstrated capacity."
    ],
    "tip": "Use observed completion and current capacity to make a realistic forecast.",
    "conceptTitle": "Agile planning and value",
    "id": "q-cb495200",
    "specific": true
  },
  "q-9c1c9e74": {
    "conceptId": "leadership-power",
    "clue": "Inspiring a shared vision is the clue.",
    "why": [
      "Management directs the known using positional power; leadership guides and influences toward a vision using personal power.",
      "Positional management authority helps coordinate work but does not define influence through inspiration.",
      "Coercion seeks compliance through threat, not voluntary commitment to a vision.",
      "Bureaucratic controls standardize procedures; they do not describe inspiring people."
    ],
    "tip": "Identify whether the situation calls for influencing direction or controlling planned work.",
    "conceptTitle": "Leadership and influence",
    "id": "q-9c1c9e74",
    "specific": true
  },
  "q-de8256dd": {
    "conceptId": "change-control",
    "clue": "A predictive scope baseline is already being executed.",
    "why": [
      "Perform Integrated Change Control is the spine of scope management. Every change is formally requested, assessed for impact, and approved or rejected — never implemented or rejected on the spot.",
      "Immediate implementation changes authorized scope before evaluating impacts and obtaining the required decision.",
      "A baseline supports controlled change; it does not justify rejecting every request without assessment.",
      "An unassessed iteration addition bypasses the predictive project’s agreed change process."
    ],
    "tip": "Capture the request, assess its impacts, and follow agreed change control before implementation.",
    "conceptTitle": "Scope and change control",
    "id": "q-de8256dd",
    "specific": true
  },
  "q-7a102710": {
    "conceptId": "quality-acceptance",
    "clue": "The customer’s formal acceptance is the deciding clue.",
    "why": [
      "Validate Scope = customer sign-off on deliverables. Control Quality (internal correctness checks) must happen first.",
      "Control Quality verifies correctness; customer acceptance belongs to Validate Scope.",
      "Define Scope establishes the scope statement before the deliverables are completed.",
      "Closing wraps up the project or phase; acceptance of individual completed deliverables can occur earlier."
    ],
    "tip": "Separate internal verification from customer acceptance.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-7a102710",
    "specific": true
  },
  "q-de84d35b": {
    "conceptId": "quality-acceptance",
    "clue": "Control Quality checks the deliverable against specifications.",
    "why": [
      "Control Quality checks correctness and conformance internally; Validate Scope is the customer's acceptance. Confusing the two is a top exam trap.",
      "Formal customer acceptance is Validate Scope, not internal quality verification.",
      "Benefits realization evaluates outcomes and value rather than the deliverable’s immediate correctness.",
      "Approving changes belongs to the agreed change-control process."
    ],
    "tip": "Ask whether the question concerns correctness, acceptance, value, or authorization.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-de84d35b",
    "specific": true
  },
  "q-0b9870d0": {
    "conceptId": "scope-baseline",
    "clue": "The scope baseline describes approved deliverables and their decomposition.",
    "why": [
      "Memorize it — it appears verbatim: scope baseline = scope statement + WBS + WBS dictionary.",
      "The charter authorizes the project and the schedule belongs to a different baseline.",
      "The budget and schedule are not components of the scope baseline.",
      "This combines different baselines and omits the scope statement and WBS dictionary."
    ],
    "tip": "Remember the three linked scope documents: statement, WBS, and WBS dictionary.",
    "conceptTitle": "Scope and requirements",
    "id": "q-0b9870d0",
    "specific": true
  },
  "q-0004653e": {
    "conceptId": "scope-baseline",
    "clue": "A WBS is deliverable-oriented decomposition.",
    "why": [
      "The WBS decomposes deliverables (nouns), not activities. Activities come later in schedule development.",
      "Activities describe actions used to produce work packages; activity definition follows scope decomposition.",
      "Risks are organized separately and are not the elements decomposed in a WBS.",
      "Resources are people and other inputs, not the deliverables represented by work packages."
    ],
    "tip": "Distinguish what will be delivered from the activities and resources needed to deliver it.",
    "conceptTitle": "Scope and requirements",
    "id": "q-0004653e",
    "specific": true
  },
  "q-e61793cf": {
    "conceptId": "scope-baseline",
    "clue": "The rule applies to the completeness of scope, not performance percentages.",
    "why": [
      "The 100% rule: child elements sum exactly to their parent, and the WBS captures all scope — internal, external, and project-management work — and no more.",
      "Resource allocation is a capacity issue; the WBS rule concerns capturing all and only approved work.",
      "Risk treatment does not require eliminating every risk and is unrelated to WBS completeness.",
      "Quality targets are specified separately; this rule ensures complete scope decomposition."
    ],
    "tip": "Check that child work packages cover their parent without omissions or added scope.",
    "conceptTitle": "Scope and requirements",
    "id": "q-e61793cf",
    "specific": true
  },
  "q-3108352a": {
    "conceptId": "schedule",
    "clue": "This standard unconstrained critical-path question asks about schedule flexibility.",
    "why": [
      "The critical path is the longest path and has zero total float — any slip there slips the project.",
      "Positive float would allow delay without moving the finish, so that path would not be the controlling path in this example.",
      "Project duration is the length of the path, not the amount it can slip.",
      "Float can be calculated from early and late dates; it is not undefined."
    ],
    "tip": "In a simple unconstrained network, the controlling path has zero float; constraints can change float values.",
    "conceptTitle": "Schedule logic and resources",
    "id": "q-3108352a",
    "specific": true
  },
  "q-df245f2e": {
    "conceptId": "schedule",
    "clue": "The sequence is changed so planned sequential work overlaps.",
    "why": [
      "Fast tracking overlaps activities and adds risk/rework. Crashing adds resources and adds cost. Both are schedule-compression techniques.",
      "Crashing adds resources; this scenario changes the timing relationship between activities.",
      "Resource leveling adjusts timing to resolve resource constraints and may lengthen the schedule.",
      "Removing scope changes what is delivered rather than overlapping the same planned work."
    ],
    "tip": "Fast tracking adds overlap risk; crashing typically adds resource cost.",
    "conceptTitle": "Schedule logic and resources",
    "id": "q-df245f2e",
    "specific": true
  },
  "q-7b2a1e78": {
    "conceptId": "schedule",
    "clue": "Additional resources are used to shorten critical-path work.",
    "why": [
      "Crashing shortens duration by adding resources, which raises cost. Fast tracking overlaps work and raises risk instead.",
      "Fast tracking overlaps activities instead of adding resources to shorten their duration.",
      "Resource leveling resolves resource over-allocation and can extend the schedule.",
      "Smoothing adjusts work within available float rather than deliberately shortening critical-path duration."
    ],
    "tip": "Identify what changes: resources, sequence, or resource loading.",
    "conceptTitle": "Schedule logic and resources",
    "id": "q-7b2a1e78",
    "specific": true
  },
  "q-04b675f8": {
    "conceptId": "schedule",
    "clue": "The roof physically depends on the supporting walls.",
    "why": [
      "Mandatory dependencies are physically or contractually required. Discretionary (soft) dependencies are preferences — those are what you break when fast tracking.",
      "A discretionary dependency is a chosen preference that could be changed; physical support is not optional.",
      "An external dependency involves work outside the project’s control; the clue here is physical construction logic.",
      "The dependency exists because of the deliverable’s physical sequence, not shared resource availability."
    ],
    "tip": "Separate required logic from preferred sequencing and external constraints.",
    "conceptTitle": "Schedule logic and resources",
    "id": "q-04b675f8",
    "specific": true
  },
  "q-c901fc50": {
    "conceptId": "schedule",
    "clue": "The successor must wait for a specified period.",
    "why": [
      "A lag delays the successor (finish-to-start plus 3 days). A lead accelerates it (finish-to-start minus X).",
      "A lead allows the successor to begin earlier, the opposite of a curing delay.",
      "Crashing adds resources to reduce duration; it cannot remove the stated waiting relationship.",
      "A buffer is protective time; this is an explicit lag between linked activities."
    ],
    "tip": "A positive lag delays a successor; a lead brings it forward.",
    "conceptTitle": "Schedule logic and resources",
    "id": "q-c901fc50",
    "specific": true
  },
  "q-a07e84df": {
    "conceptId": "risk-issue",
    "clue": "A defined trigger activates the planned response.",
    "why": [
      "A contingent response (contingency plan) fires on a trigger. A fallback plan is what you use if the primary response fails.",
      "A fallback plan is used if the initial response fails, not simply when the original trigger occurs.",
      "A secondary risk is new uncertainty introduced by a response, not the response itself.",
      "Residual risk is exposure remaining after responses, not the trigger-based action."
    ],
    "tip": "Distinguish the response, its trigger, the backup, and the risk left over.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-a07e84df",
    "specific": true
  },
  "q-215caf8b": {
    "conceptId": "risk-issue",
    "clue": "The new vendor exposure was created by the selected response.",
    "why": [
      "A secondary risk is created by implementing a risk response. A residual risk is what remains after the response and is accepted.",
      "Residual risk is what remains from the original risk after treatment, not newly created exposure.",
      "A trigger is a sign that a risk is occurring; the vendor dependency is itself a risk.",
      "A fallback is a backup response, not the uncertainty caused by outsourcing."
    ],
    "tip": "Reassess risks created by a response as well as risks it reduces.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-215caf8b",
    "specific": true
  },
  "q-fb9aec44": {
    "conceptId": "risk-issue",
    "clue": "The exposure is what remains after treatment.",
    "why": [
      "Residual risk remains after responses and is accepted. Secondary risk is newly introduced by a response.",
      "A secondary risk is newly introduced by a response rather than the remaining original exposure.",
      "A contingent response is a plan activated by a trigger, not a name for remaining exposure.",
      "Management reserve is a budget provision and does not name the remaining risk."
    ],
    "tip": "Record and monitor residual exposure after choosing responses.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-fb9aec44",
    "specific": true
  },
  "q-6b2cb756": {
    "conceptId": "risk-issue",
    "clue": "Insurance shifts financial exposure through an agreement with another party.",
    "why": [
      "Transfer shifts the impact (and ownership of the response) to a third party, e.g., insurance or a fixed-price contract. Mitigate reduces probability/impact.",
      "Mitigation reduces likelihood or impact directly; insurance primarily transfers financial consequences.",
      "Avoidance removes the threat or its source; insurance does not stop the event from happening.",
      "Acceptance retains the exposure without transferring it through insurance."
    ],
    "tip": "Transfer changes who bears consequences; it does not erase the underlying event.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-6b2cb756",
    "specific": true
  },
  "q-46c75a47": {
    "conceptId": "risk-issue",
    "clue": "The aim is to make the positive outcome certain.",
    "why": [
      "Exploit (opportunity) mirrors Avoid (threat): make the outcome certain. Enhance increases probability/impact; share brings in a partner.",
      "Enhancing increases probability or impact but does not guarantee the opportunity.",
      "Sharing brings in a partner suited to capturing the benefit; it does not itself describe removing all uncertainty.",
      "Acceptance leaves the opportunity available without proactive action to ensure it occurs."
    ],
    "tip": "For opportunities, distinguish making certain, increasing likelihood, partnering, and accepting.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-46c75a47",
    "specific": true
  },
  "q-f90f0a44": {
    "conceptId": "risk-issue",
    "clue": "Contingency is associated with identified uncertainty.",
    "why": [
      "Contingency reserves cover identified risks and are part of the cost baseline. Management reserves cover unknown-unknowns and sit outside the baseline.",
      "Unforeseen work is addressed through management reserve, rather than this provision for identified risks.",
      "Approved scope changes may require budget adjustment; contingency is not an unrestricted change fund.",
      "Profit margin is a commercial pricing element rather than money assigned to identified risks."
    ],
    "tip": "Link contingency reserves to analyzed identified risks and planned responses.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-f90f0a44",
    "specific": true
  },
  "q-591e0465": {
    "conceptId": "risk-issue",
    "clue": "The reserve is outside the baseline and controlled through management authorization.",
    "why": [
      "Management reserves cover unforeseeable work, sit outside the cost baseline, and need management approval to access.",
      "Identified risks are normally covered by contingency reserves included in the cost baseline.",
      "The PM cannot treat management reserve as discretionary spending without the required authorization.",
      "Management reserve sits outside the cost baseline; contingency reserve is included within it."
    ],
    "tip": "Separate the cost baseline from the overall project budget.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-591e0465",
    "specific": true
  },
  "q-465eecda": {
    "conceptId": "closing",
    "clue": "Early termination still requires an orderly project closure.",
    "why": [
      "Closing happens regardless of why a project ends — to document reasons, transfer any completed work, and capture lessons learned.",
      "Stopping work alone leaves records, contracts, handover, and resource release unresolved.",
      "Closing also documents termination and unfinished work; a completed final deliverable is not a prerequisite.",
      "Releasing the team is only one part of closing and omits records, contracts, and lessons."
    ],
    "tip": "Close deliberately even when a project is cancelled.",
    "conceptTitle": "Closing and transition",
    "id": "q-465eecda",
    "specific": true
  },
  "q-139b37fc": {
    "conceptId": "knowledge-transfer",
    "clue": "Useful lessons can improve the current project while it is running.",
    "why": [
      "Manage Project Knowledge runs throughout the project; the lessons-learned register is updated continuously, not just at the end.",
      "Waiting until closing prevents the team from applying learning during delivery.",
      "Successes also produce reusable learning; lessons are not limited to failures.",
      "The team and stakeholders contribute knowledge; ownership is not restricted to the PMO."
    ],
    "tip": "Capture and apply lessons continuously, then transfer them at closure.",
    "conceptTitle": "Knowledge transfer and learning",
    "id": "q-139b37fc",
    "specific": true
  },
  "q-1945d610": {
    "conceptId": "business-value",
    "clue": "The gate is a decision about whether the investment should continue.",
    "why": [
      "At a phase gate the project is compared to the business case, charter, and benefits plan to decide whether to continue, change, or stop.",
      "A milestone marks a point in time; a phase gate evaluates whether to proceed or change direction.",
      "A change request proposes a modification, whereas the gate reviews continuation and business justification.",
      "A risk trigger signals a specific risk event, not the project’s overall continuation review."
    ],
    "tip": "Use gates to revisit performance, viability, and the business case.",
    "conceptTitle": "Business value and benefits",
    "id": "q-1945d610",
    "specific": true
  },
  "q-99eb645a": {
    "conceptId": "planning",
    "clue": "Detail is increased for near-term work as information becomes available.",
    "why": [
      "Rolling wave planning elaborates detail progressively as more becomes known — useful in both predictive and hybrid work.",
      "Analogous estimating uses comparable past work; it does not describe the timing of planning detail.",
      "Re-baselining replaces an approved baseline; progressive detail does not automatically require replacing one.",
      "Gold plating adds unrequested features; rolling-wave planning elaborates intended work."
    ],
    "tip": "Plan what is knowable now and refine later work as uncertainty reduces.",
    "conceptTitle": "Progressive planning",
    "id": "q-99eb645a",
    "specific": true
  },
  "q-1ea2a3fd": {
    "conceptId": "quality-acceptance",
    "clue": "A defect is already known before presenting the work for acceptance.",
    "why": [
      "Control Quality (internal correctness) precedes Validate Scope (customer acceptance). You correct defects before presenting work for sign-off.",
      "Sending a known defect to the customer shifts verification work onto them and delays correction.",
      "This question tests verification before acceptance; follow any required repair authorization without confusing it with customer sign-off.",
      "A known nonconformance is a defect to address, not merely uncertain residual risk to accept."
    ],
    "tip": "Verify and correct deliverables before requesting formal acceptance.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-1ea2a3fd",
    "specific": true
  },
  "q-d2e4e232": {
    "conceptId": "procurement",
    "clue": "The work is exploratory and its scope cannot yet be fixed reliably.",
    "why": [
      "Poorly defined scope → cost-reimbursable, where the buyer carries more risk. The better the scope is defined, the more you can move toward fixed price.",
      "A firm fixed price depends on clear scope; uncertainty can create pricing premiums and disputes.",
      "An incentive fixed-price structure still needs a sufficiently defined scope and pricing basis.",
      "Economic adjustment addresses specified market price changes, not the basic uncertainty of exploratory scope."
    ],
    "tip": "Allocate contract risk to fit how well the work can be defined.",
    "conceptTitle": "Procurement and contracts",
    "id": "q-d2e4e232",
    "specific": true
  },
  "q-1a693e75": {
    "conceptId": "procurement",
    "clue": "A firm total price generally leaves the seller exposed to its cost overruns.",
    "why": [
      "On the seller-to-buyer risk spectrum (FFP → FPIF → FP-EPA → T&M → CPIF → CPAF → CPFF → CPPC), FFP puts the most risk on the seller.",
      "Cost reimbursement shifts much of the cost uncertainty to the buyer, even when the fee is fixed.",
      "T&M pays for agreed time and materials, so it does not give the seller the same fixed-total-price exposure.",
      "The buyer reimburses allowable costs; an award fee changes incentives but not that basic cost allocation."
    ],
    "tip": "Separate a fixed total price from a fixed fee on reimbursed costs.",
    "conceptTitle": "Procurement and contracts",
    "id": "q-1a693e75",
    "specific": true
  },
  "q-5a9880a4": {
    "conceptId": "procurement",
    "clue": "The quantity of time or work cannot be specified upfront.",
    "why": [
      "T&M is a hybrid used for small or undefined efforts and staff augmentation, where neither pure fixed-price nor full cost-reimbursement fits.",
      "A well-defined large build may support a fixed-price structure; uncertainty is the reason T&M fits here.",
      "T&M does not maximize seller cost risk because payment depends on time and materials used.",
      "A single fixed total price is a different commercial structure from paying agreed rates for actual usage."
    ],
    "tip": "T&M fits uncertain quantity but still needs agreed rates, oversight, and suitable limits.",
    "conceptTitle": "Procurement and contracts",
    "id": "q-5a9880a4",
    "specific": true
  },
  "q-46735828": {
    "conceptId": "quality-acceptance",
    "clue": "The pattern is a sustained run on one side of the center line.",
    "why": [
      "The rule of seven: seven points in a row on one side of the mean signals a non-random (assignable) cause, even if all points are within control limits.",
      "A sustained nonrandom run is a signal to investigate even when individual points are within limits.",
      "Common-cause variation does not explain away a pattern that breaches the run rule being tested.",
      "Re-baselining does not investigate or remove an assignable cause in the process."
    ],
    "tip": "Check patterns as well as individual points before declaring a process stable.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-46735828",
    "specific": true
  },
  "q-29df3b29": {
    "conceptId": "quality-acceptance",
    "clue": "Pareto analysis ranks contributors so effort targets the biggest sources.",
    "why": [
      "The Pareto principle directs effort to the vital few causes responsible for most defects.",
      "Treating all defects equally loses the prioritization benefit of ranking causes.",
      "The chart does not require inspecting every item; it helps decide which causes deserve attention.",
      "Prioritizing causes does not imply every source of variation can be eliminated."
    ],
    "tip": "Use the actual frequency or impact data rather than assuming an exact 80/20 split.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-29df3b29",
    "specific": true
  },
  "q-5ad4d2bd": {
    "conceptId": "quality-acceptance",
    "clue": "The fishbone organizes possible causes of a specific problem.",
    "why": [
      "The fishbone / cause-and-effect diagram organizes potential root causes of a problem for analysis.",
      "A Pareto chart ranks defect frequencies; a fishbone explores possible causes.",
      "A schedule network or Gantt chart represents project timing, not a fishbone.",
      "Earned value and cost reports track cost performance; fishbone branches explore causes."
    ],
    "tip": "Use fishbone to explore causes and evidence to validate them.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-5ad4d2bd",
    "specific": true
  },
  "q-24518322": {
    "conceptId": "earned-value",
    "clue": "CPI compares earned budgeted value with actual expenditure.",
    "why": [
      "CPI below 1.0 means you are over budget (getting less value than you spend). CPI measures cost efficiency; SPI measures schedule efficiency.",
      "Under-budget performance would require a CPI greater than one, not 0.85.",
      "CPI is a cost measure; schedule performance requires schedule information such as SPI.",
      "Exactly on budget corresponds to a CPI of one."
    ],
    "tip": "For CPI below one, earned value is less than actual cost.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-24518322",
    "specific": true
  },
  "q-cfe1b899": {
    "conceptId": "earned-value",
    "clue": "SPI compares earned value with the planned value of scheduled work.",
    "why": [
      "SPI above 1.0 means you are ahead of schedule (earning value faster than planned).",
      "Behind schedule would produce an SPI below one.",
      "SPI alone does not establish cost performance; that requires actual-cost information.",
      "An SPI above one signals schedule performance, not whether spending is under budget."
    ],
    "tip": "Keep SPI and CPI separate even though both use one as the reference point.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-cfe1b899",
    "specific": true
  },
  "q-4c67543e": {
    "conceptId": "risk-issue",
    "clue": "The question refers to risk’s placement in the updated exam outline.",
    "why": [
      "The 2026 outline moved risk into Business Environment, which more than tripled in weight (now 26%) and is the single most heavily tested subject.",
      "People includes leadership and engagement; the updated outline locates the named risk task in Business Environment.",
      "Traditional process-based study may suggest Process; this question tests the updated outline’s named risk task.",
      "Risk remains part of the outline and real project decision-making."
    ],
    "tip": "Use the current exam outline to map tasks instead of relying on older domain labels.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-4c67543e",
    "specific": true
  },
  "q-78271cb6": {
    "conceptId": "business-value",
    "clue": "Benefits are outcomes that can emerge and persist beyond producing a deliverable.",
    "why": [
      "Benefits often accrue after the project ends and are tracked by the business/sponsor against the benefits management plan.",
      "Initiation defines expected benefits, but it cannot confirm benefits that require adoption and use.",
      "Closing may happen before long-term benefits appear, and the PM is not necessarily their ongoing owner.",
      "Expected benefits need measurable indicators, an owner, and a measurement approach."
    ],
    "tip": "Distinguish delivery completion from the later realization of value.",
    "conceptTitle": "Business value and benefits",
    "id": "q-78271cb6",
    "specific": true
  },
  "q-811bf7ca": {
    "conceptId": "ethics-ai",
    "clue": "A new mandatory requirement affects the project’s deliverables.",
    "why": [
      "Compliance changes are assessed for impact and handled through governance and change control. Compliance is non-negotiable, not something to work around.",
      "Waiting for an audit allows known noncompliance to continue without an informed response.",
      "Cancellation is premature before assessing the requirement and feasible ways to comply.",
      "Quiet workarounds bypass governance and do not establish a compliant plan."
    ],
    "tip": "Assess the impact promptly and involve the appropriate compliance and governance decision-makers.",
    "conceptTitle": "Ethics, compliance and AI",
    "id": "q-811bf7ca",
    "specific": true
  },
  "q-fd2bcd22": {
    "conceptId": "business-value",
    "clue": "The business case justifies the investment and intended value.",
    "why": [
      "The business case documents justification and expected value — the 'why.' It anchors go/continue/stop decisions at phase gates.",
      "A detailed schedule explains when work happens, not why the investment is worthwhile.",
      "The WBS decomposes deliverables rather than establishing business justification.",
      "Role assignments allocate responsibilities; they do not establish the project’s expected value."
    ],
    "tip": "Use the business case to connect the project to its justification and outcomes.",
    "conceptTitle": "Business value and benefits",
    "id": "q-fd2bcd22",
    "specific": true
  },
  "q-112899ac": {
    "conceptId": "business-value",
    "clue": "OCM addresses the human transition to a new way of working.",
    "why": [
      "OCM is about adoption — the human side of change. It is distinct from Perform Integrated Change Control, which governs scope changes.",
      "Integrated change control handles authorized project-scope changes; organizational change management focuses on adoption.",
      "Version control manages revisions to artifacts or code rather than organizational adoption.",
      "A risk register can support change work but is not the primary focus of OCM."
    ],
    "tip": "Separate changing project baselines from helping people use the delivered change.",
    "conceptTitle": "Business value and benefits",
    "id": "q-112899ac",
    "specific": true
  },
  "q-e2bd1a52": {
    "conceptId": "business-value",
    "clue": "Technical completion has not translated into end-user use.",
    "why": [
      "Output without adoption delivers no value. The gap is in change management and benefits realization, not in building the deliverable.",
      "Control Quality concerns conformance; the stated issue is adoption of technically complete work.",
      "Acceptance can confirm scope without ensuring the users actually adopt the product.",
      "No supplier or contracting problem is described; the gap is transition to use and resulting value."
    ],
    "tip": "Investigate user needs, readiness, support, and adoption barriers.",
    "conceptTitle": "Business value and benefits",
    "id": "q-e2bd1a52",
    "specific": true
  },
  "q-080da067": {
    "conceptId": "business-value",
    "clue": "Sustainability can affect project outcomes, impacts, and long-term value.",
    "why": [
      "The 2026 outline adds sustainability, ESG, and value delivery as explicit factors in evidence-based project decisions.",
      "Ignoring these considerations omits factors that may materially affect value and decisions.",
      "Legal specialists may advise, but project decisions still need to consider sustainability impacts.",
      "These considerations shape choices throughout the project rather than only after delivery."
    ],
    "tip": "Evaluate relevant impacts alongside benefits, costs, risks, and obligations.",
    "conceptTitle": "Business value and benefits",
    "id": "q-080da067",
    "specific": true
  },
  "q-83a91c10": {
    "conceptId": "ethics-ai",
    "clue": "AI can assist with work, while people remain responsible for checking it.",
    "why": [
      "AI in project management is now exam subject matter. It can assist, but human judgment, verification, and accountability remain with the PM.",
      "A blanket ban ignores appropriate uses with suitable data controls and human verification.",
      "AI output does not replace the PM’s judgment, accountability, or stakeholder responsibilities.",
      "AI assistance is not limited to code; project artifacts can benefit when outputs are verified."
    ],
    "tip": "Verify accuracy, protect sensitive information, and retain human accountability.",
    "conceptTitle": "Ethics, compliance and AI",
    "id": "q-83a91c10",
    "specific": true
  },
  "q-ad23155c": {
    "conceptId": "ethics-ai",
    "clue": "The requirement is mandatory under law or regulation.",
    "why": [
      "Compliance requirements are obligations, not options. Adding unrequested extras beyond requirements is gold plating, which PMI discourages.",
      "Gold plating is unrequested extra work; meeting a legal requirement is not an optional enhancement.",
      "Mandatory compliance cannot be treated as discretionary scope.",
      "A stretch goal is aspirational; a binding requirement must be satisfied."
    ],
    "tip": "Identify obligations before evaluating discretionary features and tradeoffs.",
    "conceptTitle": "Ethics, compliance and AI",
    "id": "q-ad23155c",
    "specific": true
  },
  "q-db63813e": {
    "conceptId": "business-value",
    "clue": "Governance defines who may decide and how oversight works.",
    "why": [
      "Governance defines who decides what, escalation paths, and oversight — the structure within which the project operates.",
      "A daily task list schedules work; it does not establish decision authority or accountability.",
      "A repository stores artifacts and code; it does not by itself define project governance.",
      "A retrospective improves ways of working within the broader governance framework."
    ],
    "tip": "Ask who decides, what authority they hold, and how decisions are overseen.",
    "conceptTitle": "Business value and benefits",
    "id": "q-db63813e",
    "specific": true
  },
  "q-e69d5db3": {
    "conceptId": "business-value",
    "clue": "The committee is asking about strategic justification and intended benefits.",
    "why": [
      "Strategic alignment and value are shown through the business case and benefits plan, not through execution-level artifacts.",
      "The WBS dictionary details work packages but does not demonstrate strategic benefits on its own.",
      "RACI clarifies responsibilities, not whether the investment supports strategy.",
      "A burndown shows remaining work and cannot by itself justify business alignment."
    ],
    "tip": "Trace project outcomes to the business case and benefits measures.",
    "conceptTitle": "Business value and benefits",
    "id": "q-e69d5db3",
    "specific": true
  },
  "q-494b4c17": {
    "conceptId": "business-value",
    "clue": "Value delivery connects outputs to worthwhile outcomes and benefits.",
    "why": [
      "Value delivery shifts focus from producing outputs to realizing outcomes and benefits for the organization.",
      "Task completion can produce activity without the outcomes stakeholders need.",
      "More documentation is not automatically more value; it should support decisions and delivery needs.",
      "More scope can increase cost and complexity without improving benefits."
    ],
    "tip": "Ask what improves for stakeholders after the deliverable is used.",
    "conceptTitle": "Business value and benefits",
    "id": "q-494b4c17",
    "specific": true
  },
  "q-2d1021c2": {
    "conceptId": "business-value",
    "clue": "The expected value is threatened by a changed external condition.",
    "why": [
      "External-environment threats to benefits are escalated to the sponsor/governance so the business case can be re-evaluated.",
      "Continuing unchanged can consume resources after the investment’s justification has weakened.",
      "The team can assess impacts, but funding and strategic viability need the sponsor and relevant governance.",
      "Waiting until closing delays a decision that could prevent wasted investment now."
    ],
    "tip": "Revisit business justification when conditions change, using the authorized decision-makers.",
    "conceptTitle": "Business value and benefits",
    "id": "q-2d1021c2",
    "specific": true
  },
  "q-46f0afe4": {
    "conceptId": "ethics-ai",
    "clue": "A personal interest may influence, or appear to influence, a vendor decision.",
    "why": [
      "PMI's Code of Ethics requires proactively disclosing conflicts of interest to affected parties.",
      "Concealment prevents stakeholders from managing the conflict transparently.",
      "Immediate resignation may be unnecessary; disclosure allows suitable mitigation or reassignment of the decision.",
      "The amount involved does not eliminate an actual or perceived conflict of interest."
    ],
    "tip": "Disclose the conflict and follow the agreed ethics and procurement process.",
    "conceptTitle": "Ethics, compliance and AI",
    "id": "q-46f0afe4",
    "specific": true
  },
  "q-5f7959ff": {
    "conceptId": "ethics-ai",
    "clue": "The completed deliverable creates an identified safety hazard.",
    "why": [
      "Imminent safety, legal, or compliance threats are the exception to 'assess first' — you act at once to stop the harm, then analyze.",
      "A committed date does not justify knowingly exposing people to an identified safety hazard.",
      "Deferring a known hazard leaves people exposed while routine project timing takes priority.",
      "Customer acceptance does not remove the need to address the identified hazard."
    ],
    "tip": "Take appropriate protective action for immediate safety exposure, then investigate and resolve it.",
    "conceptTitle": "Ethics, compliance and AI",
    "id": "q-5f7959ff",
    "specific": true
  },
  "q-b347e74f": {
    "conceptId": "continuous-improvement",
    "clue": "Kaizen emphasizes ongoing small improvements.",
    "why": [
      "Kaizen is continuous, incremental improvement embedded in how the organization works.",
      "A single large closing initiative misses the ongoing, incremental nature of Kaizen.",
      "Retrospectives can support Kaizen, but continual improvement also applies outside agile events.",
      "Improving a process does not mean adding uncontrolled project scope."
    ],
    "tip": "Make small evidence-based improvements part of regular work.",
    "conceptTitle": "Continuous improvement",
    "id": "q-b347e74f",
    "specific": true
  },
  "q-82e987fd": {
    "conceptId": "business-value",
    "clue": "Benefits often depend on business use after the project team transitions out.",
    "why": [
      "The PM delivers the capability; the sponsor/business owns and measures the ongoing benefits after transition.",
      "The PM may support transition and measurement plans but does not own business operations indefinitely.",
      "A vendor may deliver capabilities without owning the organization’s resulting business benefits.",
      "A PMO can support governance and reporting; benefit ownership normally rests with the designated business owner."
    ],
    "tip": "Name an ongoing benefit owner and transfer the measurement plan at transition.",
    "conceptTitle": "Business value and benefits",
    "id": "q-82e987fd",
    "specific": true
  },
  "q-cded2df7": {
    "conceptId": "ethics-ai",
    "clue": "The scenario identifies a fixed external compliance date.",
    "why": [
      "Regulatory deadlines are external constraints. You adjust scope, resources, or approach around them — not safety or the law.",
      "Required quality must also be protected; the scheduling constraint asked for here is the fixed compliance deadline.",
      "The regulation is binding too, but the question specifically asks which date anchors the schedule tradeoff.",
      "Worker safety must also be protected; it is not a scheduling variable that can be traded away."
    ],
    "tip": "Adjust discretionary scope, resources, or approach while preserving legal and safety obligations.",
    "conceptTitle": "Ethics, compliance and AI",
    "id": "q-cded2df7",
    "specific": true
  },
  "q-a7b6c7d7": {
    "conceptId": "business-value",
    "clue": "NPV expresses expected net value in today’s money.",
    "why": [
      "Higher NPV means more value created in today's terms. NPV, IRR, BCR, and payback are financial selection metrics in the business environment.",
      "A lower NPV creates less estimated net present value when the compared projects are otherwise comparable.",
      "A longer payback is not a reason to prefer a project when the stated selection measure is NPV.",
      "IRR is a separate measure; a lower IRR does not answer which NPV to prefer."
    ],
    "tip": "Use the measure named in the question and compare projects on consistent assumptions.",
    "conceptTitle": "Business value and benefits",
    "id": "q-a7b6c7d7",
    "specific": true
  },
  "q-0fb54749": {
    "conceptId": "agile-prioritization",
    "clue": "The question explicitly asks for the 2020 Scrum Guide’s team guidance.",
    "why": [
      "A Scrum Team is typically 10 or fewer, cross-functional, with no sub-teams or hierarchies.",
      "The familiar seven-plus-or-minus-two guideline is not the 2020 Scrum Team wording.",
      "A team of fifteen to twenty exceeds the small-team guidance tested here.",
      "The guide gives practical small-team guidance; it does not say team size is unlimited."
    ],
    "tip": "Remember that the Scrum Team includes the Product Owner, Scrum Master, and Developers.",
    "conceptTitle": "Agile planning and value",
    "id": "q-0fb54749",
    "specific": true
  },
  "q-3ee0df7b": {
    "conceptId": "agile-prioritization",
    "clue": "The question asks which activity is not a formal Scrum event.",
    "why": [
      "Product Backlog refinement is an ongoing activity, not a named formal event. The Sprint contains Planning, Daily Scrum, Review, and Retrospective.",
      "Sprint Planning is one of the formal events and starts the Sprint’s planning work.",
      "The Daily Scrum is a formal event for Developers to inspect and adapt their plan.",
      "The Sprint Retrospective is a formal event focused on improving quality and effectiveness."
    ],
    "tip": "Refinement is ongoing work; the 2020 guide does not prescribe a fixed ten-percent allocation.",
    "conceptTitle": "Agile planning and value",
    "id": "q-3ee0df7b",
    "specific": true
  },
  "q-fc0e6827": {
    "conceptId": "agile-prioritization",
    "clue": "The question concerns Scrum accountabilities, not every job title an organization may use.",
    "why": [
      "Scrum defines exactly three accountabilities: Product Owner, Scrum Master, and Developers. There is no 'project manager' role in Scrum.",
      "Project Manager and Business Analyst are organizational job titles, not two of Scrum’s three named accountabilities.",
      "Scrum specifies Developers and Scrum Master; Project Manager and a generic Team do not replace them.",
      "Sponsor and Project Manager are not named Scrum Team accountabilities."
    ],
    "tip": "Distinguish organizational titles from the accountabilities defined by a framework.",
    "conceptTitle": "Agile planning and value",
    "id": "q-fc0e6827",
    "specific": true
  },
  "q-5c530eb1": {
    "conceptId": "agile-prioritization",
    "clue": "The requested work would endanger the current Sprint Goal.",
    "why": [
      "No changes are made that endanger the Sprint Goal. Scope can be clarified with the PO, and new work enters the backlog for future sprints.",
      "Adding work immediately ignores its effect on the Sprint Goal and bypasses discussion with the Product Owner.",
      "A request alone does not justify cancellation; the Product Owner considers cancellation if the Sprint Goal becomes obsolete.",
      "Bypassing the Product Owner skips the accountability for product value and backlog ordering."
    ],
    "tip": "Protect the Sprint Goal while clarifying and renegotiating scope with the Product Owner as appropriate.",
    "conceptTitle": "Agile planning and value",
    "id": "q-5c530eb1",
    "specific": true
  },
  "q-72013928": {
    "conceptId": "agile-prioritization",
    "clue": "Cycle time is the time needed to move work through the system.",
    "why": [
      "Little's Law: WIP = throughput × cycle time, so cycle time = WIP ÷ throughput. To cut cycle time you reduce WIP or raise throughput.",
      "Multiplication gives the wrong relationship; divide the amount of work in progress by completion rate.",
      "This reverses the relationship and produces rate per item rather than time per item.",
      "Adding a count and a rate combines incompatible units."
    ],
    "tip": "Check units: items divided by items per day gives days.",
    "conceptTitle": "Agile planning and value",
    "id": "q-72013928",
    "specific": true
  },
  "q-6939ed04": {
    "conceptId": "agile-prioritization",
    "clue": "The column is at its agreed capacity limit.",
    "why": [
      "A column at its WIP limit means no new work starts there; the team swarms to finish what is in flight. 'Stop starting, start finishing.'",
      "Raising the limit immediately hides the capacity constraint instead of improving flow.",
      "Starting more work elsewhere can increase unfinished work while the bottleneck remains.",
      "Ignoring the limit removes the control intended to reveal and manage flow problems."
    ],
    "tip": "Help finish constrained work before pulling more work into the system.",
    "conceptTitle": "Agile planning and value",
    "id": "q-6939ed04",
    "specific": true
  },
  "q-a09e627e": {
    "conceptId": "hybrid-tailoring",
    "clue": "The team needs continuous pull while retaining useful Scrum practices.",
    "why": [
      "Scrumban blends Scrum's ceremonies with Kanban's pull-based flow — the standard answer when work arrives continuously.",
      "A fixed Sprint rhythm may need adaptation for unpredictable arrivals; the question asks for a blended flow approach.",
      "A sequential waterfall approach does not preserve Scrum practices with continuous Kanban flow.",
      "A portfolio layer addresses investment coordination, not this team’s day-to-day flow pattern."
    ],
    "tip": "Choose practices that fit the arrival pattern and delivery needs.",
    "conceptTitle": "Tailoring the approach",
    "id": "q-a09e627e",
    "specific": true
  },
  "q-cf4f260a": {
    "conceptId": "estimation",
    "clue": "The question asks about common relative estimation rather than exact duration promises.",
    "why": [
      "Relative estimation with story points is the common agile approach; velocity then forecasts throughput.",
      "Hours can be used in some contexts, but restricting estimates to exact hours misses relative sizing.",
      "Cost figures do not capture the relative effort and uncertainty commonly discussed in story sizing.",
      "Function points are one measurement method, not the only way agile teams estimate."
    ],
    "tip": "Treat relative size as a forecast input rather than a guaranteed number of hours.",
    "conceptTitle": "Estimation and uncertainty",
    "id": "q-cf4f260a",
    "specific": true
  },
  "q-bb400847": {
    "conceptId": "agile-prioritization",
    "clue": "Velocity measures completed relative size over an iteration.",
    "why": [
      "Velocity is completed story points per iteration, used for forecasting — not a productivity target to maximize.",
      "Hours worked measure time input rather than completed story points.",
      "Defect counts measure quality outcomes and do not define velocity.",
      "Cycle time measures elapsed flow time, not points completed during an iteration."
    ],
    "tip": "Use a team’s own velocity for forecasting, not comparing productivity across teams.",
    "conceptTitle": "Agile planning and value",
    "id": "q-bb400847",
    "specific": true
  },
  "q-0b1dfc0a": {
    "conceptId": "hybrid-tailoring",
    "clue": "The question uses a fixed-capacity, fixed-time agile planning model.",
    "why": [
      "In predictive, scope is fixed and time/cost flex. In agile, time and cost are fixed and scope flexes to fit.",
      "Holding scope fixed while time and cost vary describes a different planning tradeoff from the model tested.",
      "Fixing all three without allowing tradeoffs leaves no room to respond to uncertainty.",
      "Agile planning can use real time and capacity constraints; adaptability does not mean everything is unconstrained."
    ],
    "tip": "Clarify which constraints are fixed and use scope priority to make tradeoffs.",
    "conceptTitle": "Tailoring the approach",
    "id": "q-0b1dfc0a",
    "specific": true
  },
  "q-fcae0e2e": {
    "conceptId": "hybrid-tailoring",
    "clue": "The requested commitment fixes all three constraints despite uncertainty.",
    "why": [
      "Fixing all three contradicts agile's variable-scope model. Educate the customer and tailor the contract (e.g., phased or incremental) rather than silently changing approach.",
      "Agreeing without discussing uncertainty creates an unsupported commitment and hides necessary tradeoffs.",
      "Immediate refusal skips a chance to find a feasible phased or tailored agreement.",
      "Silently changing method breaks transparency and does not resolve the contractual constraints."
    ],
    "tip": "Discuss constraints and uncertainty before agreeing to a delivery and contracting model.",
    "conceptTitle": "Tailoring the approach",
    "id": "q-fcae0e2e",
    "specific": true
  },
  "q-4be06e51": {
    "conceptId": "hybrid-tailoring",
    "clue": "The coordination need spans several teams.",
    "why": [
      "Scrum of Scrums is the simplest scaling pattern: representatives from each team meet to coordinate cross-team dependencies.",
      "The Daily Scrum still helps each team inspect its own progress; cross-team coordination does not replace it.",
      "A coordination meeting does not itself increase one team’s capacity.",
      "Portfolio planning selects and coordinates investments; Scrum of Scrums focuses on delivery dependencies among teams."
    ],
    "tip": "Use cross-team coordination to expose dependencies and impediments.",
    "conceptTitle": "Tailoring the approach",
    "id": "q-4be06e51",
    "specific": true
  },
  "q-0b2ac0d1": {
    "conceptId": "agile-prioritization",
    "clue": "The Product Owner is accountable for maximizing product value.",
    "why": [
      "The PO maximizes value and owns backlog ordering. Removing impediments and facilitating belong to the Scrum Master.",
      "Impediment removal is associated with the Scrum Master’s service and team enablement.",
      "Developers create the product; writing code is not the defining Product Owner accountability.",
      "Facilitating an event can be shared, but the Product Owner’s defining responsibility is product value and backlog management."
    ],
    "tip": "Connect product value, Product Goal, and backlog ordering to Product Owner accountability.",
    "conceptTitle": "Agile planning and value",
    "id": "q-0b2ac0d1",
    "specific": true
  },
  "q-59f6a67a": {
    "conceptId": "servant-leadership",
    "clue": "The Scrum Master enables effective Scrum rather than managing individual task assignments.",
    "why": [
      "The Scrum Master is accountable for establishing Scrum and supporting the Scrum Team’s effectiveness through coaching, facilitation, and helping remove impediments.",
      "Developers self-manage their plan; assigning tasks and policing individual hours undermines that accountability.",
      "The Product Owner is accountable for effective Product Backlog management, including ordering.",
      "Budget approval belongs to the organization’s governance and is not the Scrum Master’s defining accountability."
    ],
    "tip": "Distinguish enabling the team from controlling how individuals perform their tasks.",
    "conceptTitle": "Servant leadership",
    "id": "q-59f6a67a",
    "specific": true
  },
  "q-155b5fbb": {
    "conceptId": "agile-prioritization",
    "clue": "On a burndown chart, higher means more work remains.",
    "why": [
      "On a burndown, the line above ideal means remaining work is higher than planned, so the team is behind.",
      "Being ahead would normally put remaining work below the ideal line, not above it.",
      "A position above the ideal line shows remaining work relative to plan; it does not by itself prove scope was reduced.",
      "Exactly on track would place the measured work near the planned line."
    ],
    "tip": "Read the vertical axis before interpreting whether a chart indicates favorable performance.",
    "conceptTitle": "Agile planning and value",
    "id": "q-155b5fbb",
    "specific": true
  },
  "q-f2487b64": {
    "conceptId": "agile-prioritization",
    "clue": "A burnup separates completed work from the total-scope line.",
    "why": [
      "A burnup plots completed work against a scope line, making scope growth visible — something a burndown hides.",
      "Remaining work is the usual burndown focus; burnup displays completed work and can show total scope.",
      "Defect trends need quality data and are not the defining benefit of a burnup.",
      "A basic burnup does not include the actual-cost information needed for cost performance."
    ],
    "tip": "Compare the completion line with the scope line to see growth and progress separately.",
    "conceptTitle": "Agile planning and value",
    "id": "q-f2487b64",
    "specific": true
  },
  "q-d888aca0": {
    "conceptId": "hybrid-tailoring",
    "clue": "Tailoring responds to the project’s actual context.",
    "why": [
      "Tailoring is a named principle and a recurring right answer: choose and adapt the approach based on the project's context.",
      "Agile is appropriate for some conditions, but choosing it universally skips context assessment.",
      "Predictive methods suit some work, but a universal prescription is not tailoring.",
      "New information may justify adapting the approach through the agreed process."
    ],
    "tip": "Evaluate uncertainty, delivery needs, constraints, and governance when choosing practices.",
    "conceptTitle": "Tailoring the approach",
    "id": "q-d888aca0",
    "specific": true
  },
  "q-9bf62945": {
    "conceptId": "quality-acceptance",
    "clue": "The Definition of Done states the quality measures an Increment must meet.",
    "why": [
      "The DoD is the team's shared standard for when work is truly complete, ensuring consistent increment quality.",
      "Sprint duration is a timebox decision and does not define completion quality.",
      "Backlog ordering reflects product value priorities rather than the shared completion standard.",
      "Team size does not determine whether an Increment meets its quality standard."
    ],
    "tip": "Use Done to make completeness and quality transparent for every Increment.",
    "conceptTitle": "Quality and acceptance",
    "id": "q-9bf62945",
    "specific": true
  },
  "q-3befa617": {
    "conceptId": "hybrid-tailoring",
    "clue": "Discovery and rollout have different uncertainty and control needs.",
    "why": [
      "Hybrid fits when conditions differ across parts of the same project — the most common situation on the 2026 exam.",
      "Hybrid is a contextual choice, not universally superior to every other approach.",
      "Regulation does not automatically prohibit agile; practices must meet the relevant obligations.",
      "Predictive delivery is not inherently faster; fit to the work explains this tailored combination."
    ],
    "tip": "Tailor each part of delivery while preserving coherent governance and handoffs.",
    "conceptTitle": "Tailoring the approach",
    "id": "q-3befa617",
    "specific": true
  },
  "q-16307e83": {
    "conceptId": "agile-prioritization",
    "clue": "The question asks for the Daily Scrum timebox.",
    "why": [
      "The Daily Scrum is a 15-minute event for the Developers to inspect progress toward the Sprint Goal and adapt the plan.",
      "Thirty minutes doubles the defined fifteen-minute timebox.",
      "One hour is not the Daily Scrum’s defined timebox.",
      "The Daily Scrum has a defined fifteen-minute timebox in Scrum."
    ],
    "tip": "Use the Daily Scrum to inspect progress toward the Sprint Goal and adapt the plan.",
    "conceptTitle": "Agile planning and value",
    "id": "q-16307e83",
    "specific": true
  },
  "q-420d9c60": {
    "conceptId": "agile-prioritization",
    "clue": "The focus is improving how the team works.",
    "why": [
      "The Retrospective is about the team improving how it works. The Review (different event) demonstrates the increment to stakeholders.",
      "Inspection of the product with stakeholders belongs to the Sprint Review.",
      "Selecting and planning work for the coming Sprint belongs to Sprint Planning.",
      "Backlog refinement prepares future work; the Retrospective examines ways to improve quality and effectiveness."
    ],
    "tip": "Separate inspecting the product from improving the team’s process.",
    "conceptTitle": "Agile planning and value",
    "id": "q-420d9c60",
    "specific": true
  },
  "q-e8852aed": {
    "conceptId": "agile-prioritization",
    "clue": "The Review inspects the Sprint outcome and considers future adaptations with stakeholders.",
    "why": [
      "The Scrum Team and stakeholders inspect the Sprint’s outcome, discuss changed conditions, and adapt what to do next, including the Product Backlog.",
      "Improving internal ways of working is the Sprint Retrospective’s primary focus.",
      "The Daily Scrum is the Developers’ frequent inspection and adaptation event.",
      "Estimation may support refinement and planning; it is not the Review’s primary purpose."
    ],
    "tip": "Treat the Review as a working discussion about outcomes and adaptation, not just a presentation.",
    "conceptTitle": "Agile planning and value",
    "id": "q-e8852aed",
    "specific": true
  },
  "q-a5cded6f": {
    "conceptId": "agile-prioritization",
    "clue": "The named practices concern software engineering discipline within XP.",
    "why": [
      "XP's engineering practices include pair programming, TDD, CI, refactoring, collective ownership, and sustainable pace.",
      "SAFe coordinates work at scale; the specific engineering practices listed are associated with XP.",
      "Portfolio Kanban visualizes and manages investment flow rather than defining pair programming or TDD.",
      "Scrum of Scrums coordinates teams and dependencies; it is not an engineering practice set."
    ],
    "tip": "Distinguish team engineering practices from frameworks for coordinating larger systems.",
    "conceptTitle": "Agile planning and value",
    "id": "q-a5cded6f",
    "specific": true
  },
  "q-6ab3b3fc": {
    "conceptId": "earned-value",
    "clue": "Cost variance subtracts actual cost from earned value.",
    "why": [
      "CV = EV − AC = 40,000 − 50,000 = −$10,000. Negative CV means over budget.",
      "Positive ten thousand reverses the subtraction and would falsely imply favorable cost performance.",
      "Adding EV and AC gives ninety thousand but does not measure variance.",
      "Negative fifty thousand ignores the forty thousand of earned value."
    ],
    "tip": "Write CV = EV − AC before substituting the amounts.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-6ab3b3fc",
    "specific": true
  },
  "q-b5b04e62": {
    "conceptId": "earned-value",
    "clue": "Schedule variance is earned value minus planned value, expressed in budget units.",
    "why": [
      "SV = EV − PV = 40,000 − 50,000 = −$10,000. Negative SV means behind schedule. (0.8 is the SPI, a common trap — SV is a dollar amount, not a ratio.)",
      "Positive ten thousand reverses the subtraction and would indicate a favorable variance.",
      "0.8 is SPI, a ratio; the question asks for the dollar-denominated schedule variance.",
      "Negative fifty thousand leaves out earned value and is not the variance."
    ],
    "tip": "Check whether the requested metric is a difference or an index.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-b5b04e62",
    "specific": true
  },
  "q-39b49ca4": {
    "conceptId": "earned-value",
    "clue": "CPI divides earned value by actual cost.",
    "why": [
      "CPI = EV ÷ AC = 40,000 ÷ 50,000 = 0.8. Below 1.0 means over budget. (EV is always the numerator of both indices.)",
      "1.25 inverts the ratio: AC ÷ EV, rather than EV ÷ AC.",
      "1.0 would mean earned value equals actual cost; the amounts are different.",
      "0.9 is not the result of dividing forty thousand by fifty thousand."
    ],
    "tip": "CPI = EV ÷ AC; below one means the value earned is less than the cost spent.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-39b49ca4",
    "specific": true
  },
  "q-6fd788f2": {
    "conceptId": "earned-value",
    "clue": "SPI divides earned value by planned value.",
    "why": [
      "SPI = EV ÷ PV = 40,000 ÷ 50,000 = 0.8. Below 1.0 means behind schedule.",
      "1.25 reverses the numerator and denominator, giving PV ÷ EV.",
      "1.0 would mean actual earned progress matches planned value.",
      "0.9 does not follow from forty thousand divided by fifty thousand."
    ],
    "tip": "SPI = EV ÷ PV; read it as earned progress relative to planned progress.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-6fd788f2",
    "specific": true
  },
  "q-f96deb15": {
    "conceptId": "earned-value",
    "clue": "The current cost efficiency is assumed to continue for the remaining work.",
    "why": [
      "Typical EAC = BAC ÷ CPI = 100,000 ÷ 0.8 = $125,000.",
      "Eighty thousand multiplies BAC by CPI; lower efficiency should increase the forecast cost, not reduce it.",
      "Keeping EAC at BAC ignores the stated continuing inefficiency.",
      "One hundred twenty thousand does not equal BAC divided by the given CPI."
    ],
    "tip": "For continuing cost efficiency, divide BAC by CPI: 100,000 ÷ 0.8.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-f96deb15",
    "specific": true
  },
  "q-bcec4763": {
    "conceptId": "earned-value",
    "clue": "ETC is the forecast cost still needed after money already spent.",
    "why": [
      "ETC = EAC − AC = 125,000 − 50,000 = $75,000.",
      "Adding AC to EAC double-counts expenditure already included in the total forecast.",
      "Twenty-five thousand is not the difference between the forecast total and actual expenditure.",
      "Fifty thousand is the amount already spent, not the amount still forecast."
    ],
    "tip": "Subtract actual cost from the forecast total: ETC = EAC − AC.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-bcec4763",
    "specific": true
  },
  "q-5683ab49": {
    "conceptId": "earned-value",
    "clue": "VAC compares the approved budget with the forecast total cost.",
    "why": [
      "VAC = BAC − EAC = 100,000 − 125,000 = −$25,000. Negative VAC forecasts an overrun.",
      "Positive twenty-five thousand reverses the subtraction and implies an underrun rather than an overrun.",
      "Adding budget and forecast does not measure the expected variance.",
      "Zero would mean EAC equals BAC, which it does not here."
    ],
    "tip": "VAC = BAC − EAC; a negative value forecasts an overrun.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-5683ab49",
    "specific": true
  },
  "q-9c64ad5c": {
    "conceptId": "earned-value",
    "clue": "The target is still the original BAC, so compare remaining work with remaining budget.",
    "why": [
      "TCPI = (BAC − EV) ÷ (BAC − AC) = (100,000 − 40,000) ÷ (100,000 − 50,000) = 60,000 ÷ 50,000 = 1.2. You must become more efficient to hit the budget.",
      "0.8 is the current CPI, not the required efficiency for the remaining work.",
      "1.0 would not recover the existing cost overrun within the remaining budget.",
      "0.6 underestimates the efficiency required to earn sixty thousand of value with fifty thousand left."
    ],
    "tip": "Compute remaining work ÷ remaining funds: 60,000 ÷ 50,000 = 1.2.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-9c64ad5c",
    "specific": true
  },
  "q-5c88ae03": {
    "conceptId": "communication",
    "clue": "The question asks for additional channels, not the new total.",
    "why": [
      "Channels = n(n−1)÷2. For 8: 28; for 5: 10. Additional = 28 − 10 = 18. The trap is forgetting to subtract the original channels.",
      "Twenty-eight is the total channels for eight people; subtract the ten original channels.",
      "Ten is the original total for five people rather than the increase.",
      "Thirteen does not result from subtracting the two complete channel counts."
    ],
    "tip": "Calculate each team’s n(n−1)/2 separately, then subtract.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-5c88ae03",
    "specific": true
  },
  "q-2cc340ac": {
    "conceptId": "estimation",
    "clue": "Beta PERT gives the most-likely estimate four times the weight.",
    "why": [
      "PERT = (O + 4M + P) ÷ 6 = (4 + 40 + 22) ÷ 6 = 66 ÷ 6 = 11.",
      "Twelve is the unweighted triangular average; beta PERT weights the most-likely value.",
      "Ten is the most-likely estimate alone and ignores the optimistic and pessimistic values.",
      "Thirteen does not match the weighted sum of sixty-six divided by six."
    ],
    "tip": "Use (O + 4M + P) ÷ 6 and distinguish beta PERT from a triangular estimate.",
    "conceptTitle": "Estimation and uncertainty",
    "id": "q-2cc340ac",
    "specific": true
  },
  "q-d0ea1d2b": {
    "conceptId": "estimation",
    "clue": "PERT standard deviation divides the pessimistic–optimistic range by six.",
    "why": [
      "SD = (P − O) ÷ 6 = (22 − 4) ÷ 6 = 18 ÷ 6 = 3.",
      "Eighteen is the entire range, before dividing by six.",
      "Six is the divisor in the formula, not the calculated standard deviation.",
      "Nine divides the range by two instead of the required six."
    ],
    "tip": "For this PERT approximation, SD = (P − O) ÷ 6.",
    "conceptTitle": "Estimation and uncertainty",
    "id": "q-d0ea1d2b",
    "specific": true
  },
  "q-c410bc28": {
    "conceptId": "risk-issue",
    "clue": "The impact is negative and is weighted by a thirty-percent probability.",
    "why": [
      "EMV = probability × impact = 0.30 × (−10,000) = −$3,000. EMV is used in decision-tree analysis.",
      "Negative ten thousand is the full impact; it has not been probability-weighted.",
      "Negative thirty thousand treats the probability as three instead of 0.30.",
      "Positive three thousand has the correct magnitude but reverses the sign of the threat’s impact."
    ],
    "tip": "Convert percentages to decimals and retain the sign of the impact.",
    "conceptTitle": "Risk and issue decisions",
    "id": "q-c410bc28",
    "specific": true
  },
  "q-1cc78316": {
    "conceptId": "agile-prioritization",
    "clue": "Divide twenty items in progress by five items completed per day.",
    "why": [
      "By Little's Law, cycle time = WIP ÷ throughput = 20 ÷ 5 = 4 days.",
      "One hundred multiplies WIP by throughput rather than dividing it.",
      "0.25 reverses the ratio; items per day divided by items is not elapsed days.",
      "Twenty-five adds a count and a rate, which have different units."
    ],
    "tip": "Use units to check the calculation: items ÷ items/day = days.",
    "conceptTitle": "Agile planning and value",
    "id": "q-1cc78316",
    "specific": true
  },
  "q-ef4b4936": {
    "conceptId": "estimation",
    "clue": "A ROM estimate is the broad early estimate in the range convention being tested.",
    "why": [
      "ROM is −25% to +75%. A budget estimate is −10% to +25%; a definitive estimate is −5% to +10%.",
      "Minus five to plus ten percent is the narrower definitive-estimate range in this convention.",
      "Minus ten to plus twenty-five percent is the budget-estimate range in this convention.",
      "A symmetric fifty-percent range is not the ROM convention given in this question."
    ],
    "tip": "Estimate ranges depend on context; identify the estimating stage and convention specified.",
    "conceptTitle": "Estimation and uncertainty",
    "id": "q-ef4b4936",
    "specific": true
  },
  "q-786c36c1": {
    "conceptId": "earned-value",
    "clue": "The existing variance is a one-off, and remaining work is expected at the planned rate.",
    "why": [
      "EAC = AC + (BAC − EV) assumes remaining work runs at the planned rate (variance was a one-off). BAC ÷ CPI assumes the variance continues (typical).",
      "BAC ÷ CPI assumes current cost efficiency continues, contrary to the stated atypical variance.",
      "Dividing by CPI × SPI forecasts continuing combined cost and schedule effects, which the question does not assume.",
      "Multiplying BAC by CPI is not the EAC model for remaining work at the planned rate."
    ],
    "tip": "Start with actual cost, then add the remaining budgeted work when the variance will not recur.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-786c36c1",
    "specific": true
  },
  "q-4e104c63": {
    "conceptId": "estimation",
    "clue": "A unit rate is multiplied by the number of units.",
    "why": [
      "Parametric = unit rate × quantity = $50 × 2,000 = $100,000. It scales a statistical relationship between a unit and a cost/duration.",
      "Fifty-two thousand does not equal fifty dollars per unit times two thousand units.",
      "Twenty-five thousand does not apply the given unit rate to the full quantity.",
      "Two thousand is the quantity, without its cost per square foot."
    ],
    "tip": "Keep units visible: dollars/square foot × square feet = dollars.",
    "conceptTitle": "Estimation and uncertainty",
    "id": "q-4e104c63",
    "specific": true
  },
  "q-01f32197": {
    "conceptId": "business-value",
    "clue": "The ratio compares expected benefits with costs.",
    "why": [
      "A BCR above 1.0 means benefits outweigh costs; higher is better. BCR sits with NPV, IRR, and payback among financial selection metrics.",
      "A lower BCR represents fewer benefits per unit of cost, all else being equal.",
      "Below one means estimated costs exceed estimated benefits.",
      "BCR is a relevant financial input, although decisions may also consider risk and strategic fit."
    ],
    "tip": "For comparable assumptions, higher BCR is favorable; above one indicates benefits exceed costs.",
    "conceptTitle": "Business value and benefits",
    "id": "q-01f32197",
    "specific": true
  },
  "q-a15ffe99": {
    "conceptId": "procurement",
    "clue": "PTA uses the cost-sharing structure and ceiling of an incentive fixed-price contract.",
    "why": [
      "PTA applies to FPIF contracts — above the PTA, the seller bears all additional cost.",
      "A CPFF structure reimburses allowable costs with a fixed fee and does not use the same FPIF ceiling calculation.",
      "T&M pays agreed rates for usage and has no FPIF target-profit sharing relationship.",
      "A firm fixed price has seller cost exposure but not the same negotiated incentive-sharing PTA calculation."
    ],
    "tip": "Distinguish fixed-price incentive mechanics from fixed fees or fixed rates.",
    "conceptTitle": "Procurement and contracts",
    "id": "q-a15ffe99",
    "specific": true
  },
  "q-27b6451a": {
    "conceptId": "earned-value",
    "clue": "Earned value is the budgeted value of work actually completed.",
    "why": [
      "EV is the budgeted value of the work actually completed: percent complete × BAC.",
      "AC × CPI is also algebraically equal to EV when CPI is defined as EV/AC; this original option makes the item ambiguous.",
      "PV − AC compares planned value with actual cost; it does not measure the budgeted value of completed work.",
      "BAC ÷ SPI is not earned value; SPI relates earned value to planned value."
    ],
    "tip": "Identify the budgeted value of completed work rather than confusing it with actual spending.",
    "conceptTitle": "Earned value and cost control",
    "id": "q-27b6451a",
    "specific": true
  },
  "q-e1fed37d": {
    "conceptId": "conflict",
    "clue": "The issue is trivial and the immediate deadline matters more than resolving it now.",
    "why": [
      "Avoiding can be appropriate for trivial issues or when emotions need to cool, as a temporary measure. It is a poor choice for important, lasting conflicts.",
      "Forcing uses authority for a minor issue and may create unnecessary friction.",
      "A full collaborative process can cost more attention than this trivial disagreement warrants right now.",
      "Escalating a minor disagreement transfers a manageable team issue to the sponsor unnecessarily."
    ],
    "tip": "Use temporary withdrawal selectively, and revisit important unresolved issues.",
    "conceptTitle": "Conflict and collaboration",
    "id": "q-e1fed37d",
    "specific": true
  },
  "q-bc7b4b96": {
    "conceptId": "conflict",
    "clue": "Both parties make concessions and neither is fully satisfied.",
    "why": [
      "Compromising means both sides concede, so neither is fully satisfied. PMI prefers collaborating when time allows.",
      "Collaboration seeks to meet both parties’ underlying interests rather than merely trading concessions.",
      "Forcing imposes one party’s preferred solution instead of requiring reciprocal concessions.",
      "Smoothing emphasizes agreement or yields to maintain harmony; it is not the described mutual tradeoff."
    ],
    "tip": "Look at the result for both parties to distinguish compromise from collaboration.",
    "conceptTitle": "Conflict and collaboration",
    "id": "q-bc7b4b96",
    "specific": true
  },
  "q-7cfeab88": {
    "conceptId": "conflict",
    "clue": "This item asks about common competing work priorities rather than personal dislike.",
    "why": [
      "Schedules and resource/priority conflicts top the list; personality clashes are among the least common root causes.",
      "Personality can influence conflict, but the item emphasizes work scheduling and competing priorities as the typical root.",
      "Cost can trigger conflict, but the answer tested here groups scheduling and resource-priority tensions.",
      "Technical disagreement can occur, but this question asks for the broader recurring source it identifies."
    ],
    "tip": "Investigate the actual cause in a real scenario rather than assuming every conflict is a personality problem.",
    "conceptTitle": "Conflict and collaboration",
    "id": "q-7cfeab88",
    "specific": true
  },
  "q-ca4c0c5e": {
    "conceptId": "team-development",
    "clue": "Trust, smooth collaboration, and limited intervention point to mature team performance.",
    "why": [
      "Performing is the high-output stage where the team is interdependent and largely self-managing. The leader can be most hands-off here.",
      "Norming establishes shared ways of working; sustained high-output self-management points to performing.",
      "Storming involves conflict over roles, methods, or priorities rather than smooth coordination.",
      "Forming involves initial orientation and dependence on guidance."
    ],
    "tip": "Use the described behavior to identify the stage rather than the project’s calendar age.",
    "conceptTitle": "Team development and working agreements",
    "id": "q-ca4c0c5e",
    "specific": true
  },
  "q-b48031d1": {
    "conceptId": "team-development",
    "clue": "The team is disbanding after completing its work.",
    "why": [
      "Adjourning (mourning) is the release of the team once the work is complete.",
      "Performing describes effective work while the team is still delivering.",
      "Norming is the development of shared ways of working, not team release.",
      "Storming involves friction during team development rather than disbanding."
    ],
    "tip": "Team closure includes recognition, knowledge transfer, and release.",
    "conceptTitle": "Team development and working agreements",
    "id": "q-b48031d1",
    "specific": true
  },
  "q-8d879226": {
    "conceptId": "motivation",
    "clue": "The person’s dominant need is achievement.",
    "why": [
      "High need-for-achievement people want moderately challenging goals and concrete feedback; nPow seeks influence, nAff seeks belonging.",
      "Leading a large group may appeal to a need for power, rather than the achievement need stated.",
      "Belonging and social approval fit affiliation needs more closely.",
      "Authority over others reflects a power need rather than achievement through challenging work."
    ],
    "tip": "Match recognition and work design to the individual’s stated motivation.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-8d879226",
    "specific": true
  },
  "q-e4101237": {
    "conceptId": "motivation",
    "clue": "The person must believe effort can lead to performance and a reward they value.",
    "why": [
      "Expectancy theory links effort → performance → reward, and the reward must be valued (valence) for motivation to hold.",
      "Equal rewards address fairness but do not establish the expectancy chain.",
      "The view that work is inherently unpleasant resembles a controlling assumption, not expectancy theory.",
      "Close control does not demonstrate that effort leads to valued outcomes."
    ],
    "tip": "Check all links: effort, performance, outcome, and the value of that outcome.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-e4101237",
    "specific": true
  },
  "q-6bb90ada": {
    "conceptId": "motivation",
    "clue": "Long-term relationships and collective involvement identify Theory Z.",
    "why": [
      "Theory Z stresses job stability, collective decision-making, and whole-person concern to build loyalty and productivity.",
      "Strict supervision more closely matches a control-based Theory X assumption.",
      "Financial incentives alone do not capture Theory Z’s long-term organizational commitment.",
      "Self-directed work with little intervention does not capture Theory Z’s collective involvement and loyalty."
    ],
    "tip": "Distinguish long-term organizational commitment from simple control or hands-off leadership.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-6bb90ada",
    "specific": true
  },
  "q-e05d35c9": {
    "conceptId": "motivation",
    "clue": "The raise removes dissatisfaction without creating lasting satisfaction in the model.",
    "why": [
      "Salary is a hygiene factor: its absence causes dissatisfaction, but its presence does not create lasting motivation.",
      "Herzberg’s motivators include achievement and recognition; salary is classified as hygiene.",
      "Self-actualization belongs to Maslow’s model and describes realizing potential rather than pay.",
      "Referent power comes from personal respect, not the classification of salary in Herzberg’s theory."
    ],
    "tip": "Identify the theory named before matching its terms.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-e05d35c9",
    "specific": true
  },
  "q-7dae44ed": {
    "conceptId": "motivation",
    "clue": "The question asks for Pink’s three intrinsic drivers.",
    "why": [
      "Pink's intrinsic-motivation model (autonomy, mastery, purpose) aligns well with agile, self-organizing teams.",
      "Money can matter, but it is not the three-part intrinsic-motivation model named here.",
      "Fear is an external control and does not describe autonomy, mastery, or purpose.",
      "Close supervision reduces autonomy and is not Pink’s stated intrinsic-motivation trio."
    ],
    "tip": "Connect choice, developing competence, and meaningful work to intrinsic motivation.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-7dae44ed",
    "specific": true
  },
  "q-057fec10": {
    "conceptId": "leadership-power",
    "clue": "Rewards and corrective action are exchanged for specified performance.",
    "why": [
      "Transactional leadership runs on exchanges — rewards and corrective actions tied to performance against defined goals.",
      "Transformational leadership inspires change through vision and development rather than a performance exchange.",
      "Servant leadership prioritizes enabling and serving people; contingent rewards are the specific clue here.",
      "Laissez-faire leadership is hands-off, unlike active rewards and corrections."
    ],
    "tip": "Identify whether the leader relies on exchanges, inspiration, service, or minimal intervention.",
    "conceptTitle": "Leadership and influence",
    "id": "q-057fec10",
    "specific": true
  },
  "q-161ec75e": {
    "conceptId": "leadership-power",
    "clue": "Vision, intellectual stimulation, and individual attention are the defining clues.",
    "why": [
      "Transformational leaders use the four I's: idealized influence, inspirational motivation, intellectual stimulation, and individualized consideration.",
      "Transactional leadership focuses on rewards and corrections tied to targets.",
      "Autocratic leadership relies on centralized decisions rather than these developmental behaviors.",
      "Bureaucratic leadership emphasizes formal procedures and rules rather than transformational inspiration."
    ],
    "tip": "Match the leader’s observable behaviors to the model.",
    "conceptTitle": "Leadership and influence",
    "id": "q-161ec75e",
    "specific": true
  },
  "q-87a0310b": {
    "conceptId": "leadership-power",
    "clue": "The leader gives an experienced team full freedom and steps back.",
    "why": [
      "Laissez-faire delegates decisions to the team. It suits mature, expert teams but can fail with teams needing direction.",
      "Directive leadership provides specific instructions and close guidance, opposite to the scenario.",
      "Coercive leadership relies on threats or pressure, not freedom to manage the work.",
      "Transactional leadership uses explicit rewards and corrections rather than stepping back entirely."
    ],
    "tip": "Consider capability and risk before choosing how much guidance a team needs.",
    "conceptTitle": "Leadership and influence",
    "id": "q-87a0310b",
    "specific": true
  },
  "q-31a04846": {
    "conceptId": "leadership-power",
    "clue": "Competence and commitment can differ by task and change over time.",
    "why": [
      "Situational leadership flexes between directing, coaching, supporting, and delegating based on follower readiness.",
      "A fixed style ignores differences in people’s current ability and support needs.",
      "Democratic participation is one approach; situational leadership does not prescribe it in every case.",
      "Immediate full delegation can leave inexperienced or uncertain people without needed support."
    ],
    "tip": "Tailor direction and support to the person and task.",
    "conceptTitle": "Leadership and influence",
    "id": "q-31a04846",
    "specific": true
  },
  "q-0b6347f2": {
    "conceptId": "leadership-power",
    "clue": "The influence comes from granting valued benefits.",
    "why": [
      "Reward power comes from the ability to grant benefits. It is positional and can lose force once rewards run out.",
      "Coercive power depends on penalties rather than bonuses or time off.",
      "Expert power arises from competence and knowledge, not control over benefits.",
      "Referent power comes from trust or admiration rather than authority to award benefits."
    ],
    "tip": "Identify what gives the person influence in the scenario.",
    "conceptTitle": "Leadership and influence",
    "id": "q-0b6347f2",
    "specific": true
  },
  "q-16ed094e": {
    "conceptId": "leadership-power",
    "clue": "The main influence method is threat and punishment.",
    "why": [
      "Coercive (penalty) power can force short-term compliance but erodes trust and engagement; PMI favors expert and referent power.",
      "Threat-based compliance does not reliably create trust or lasting loyalty.",
      "Intrinsic motivation comes from within; coercion relies on external pressure.",
      "A punitive default does not support the collaborative leadership expected in this question."
    ],
    "tip": "Use authority responsibly and build commitment through trust and capability.",
    "conceptTitle": "Leadership and influence",
    "id": "q-16ed094e",
    "specific": true
  },
  "q-41e3ac48": {
    "conceptId": "leadership-power",
    "clue": "People follow because of personal respect and admiration.",
    "why": [
      "Referent power flows from respect, trust, and charisma. With expert power, it is the most effective in low-authority settings.",
      "Legitimate power comes from a formal position rather than personal identification.",
      "Reward power comes from the ability to grant benefits, not admiration.",
      "Coercive power depends on threat of punishment, which is not described."
    ],
    "tip": "Separate the source of influence from the leader’s job title.",
    "conceptTitle": "Leadership and influence",
    "id": "q-41e3ac48",
    "specific": true
  },
  "q-678aa540": {
    "conceptId": "emotional-intelligence",
    "clue": "The emotions being understood belong to other people.",
    "why": [
      "Empathy and social skills are outbound competencies (managing relationships); self-awareness and self-management are inbound.",
      "Self-awareness identifies your own emotions rather than accurately sensing another person’s feelings.",
      "Self-regulation manages your response rather than naming understanding of others.",
      "Motivation concerns direction and persistence, not recognizing another person’s emotional experience."
    ],
    "tip": "Ask whose emotions are involved and whether the task is recognizing or regulating them.",
    "conceptTitle": "Emotional intelligence",
    "id": "q-678aa540",
    "specific": true
  },
  "q-1a2587f7": {
    "conceptId": "emotional-intelligence",
    "clue": "The manager notices anger and controls how it is expressed.",
    "why": [
      "Self-regulation (self-management) is controlling one's own disruptive emotions and impulses.",
      "Empathy concerns understanding others; the behavior here regulates the manager’s own reaction.",
      "Social skills cover managing relationships, but the specific pause before reacting demonstrates self-regulation.",
      "Motivation concerns pursuing goals rather than controlling an immediate emotional response."
    ],
    "tip": "Name the specific emotional skill rather than a broad positive trait.",
    "conceptTitle": "Emotional intelligence",
    "id": "q-1a2587f7",
    "specific": true
  },
  "q-0a25c159": {
    "conceptId": "negotiation",
    "clue": "The acceptable ranges of buyer and seller overlap.",
    "why": [
      "The ZOPA is the range where a deal is possible. If the parties' acceptable ranges do not overlap, there is no ZOPA.",
      "BATNA is an alternative if no agreement is reached, not the shared acceptable range.",
      "A reservation point is one party’s limit; ZOPA is the overlap between both parties’ limits.",
      "An anchor is an opening reference point used in negotiation rather than the overlap of acceptable terms."
    ],
    "tip": "Separate the bargaining zone from each party’s limit and alternative.",
    "conceptTitle": "Negotiation and shared interests",
    "id": "q-0a25c159",
    "specific": true
  },
  "q-8d421410": {
    "conceptId": "communication",
    "clue": "The item concerns emotional meaning conveyed through nonverbal and vocal cues.",
    "why": [
      "The oft-cited 55/38/7 split (body language/tone/words) underscores why face-to-face communication is richest for sensitive topics.",
      "Words matter, but the research discussed in this item concerns feelings and attitudes communicated through combined cues.",
      "Written documentation does not supply the facial and vocal cues involved in the cited emotional-message research.",
      "A channel carries a message; the item asks about the cues carrying emotional meaning within communication."
    ],
    "tip": "Do not generalize Mehrabian’s findings into a rule that words are unimportant in all communication.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-8d421410",
    "specific": true
  },
  "q-a506d243": {
    "conceptId": "communication",
    "clue": "The listener paraphrases to check the speaker’s intended meaning.",
    "why": [
      "Active listening — paraphrasing, clarifying, and acknowledging — confirms understanding and builds trust.",
      "Broadcasting sends information outward rather than checking understanding through listening.",
      "Push communication distributes information; it does not inherently confirm what a speaker meant.",
      "A formal report documents information rather than describing this real-time listening technique."
    ],
    "tip": "Paraphrase and ask for confirmation before assuming shared understanding.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-a506d243",
    "specific": true
  },
  "q-f0e9b2a2": {
    "conceptId": "communication",
    "clue": "Recipients retrieve the information when they choose to access it.",
    "why": [
      "Pull communication lets recipients access information at will (portals, wikis, dashboards). Push sends to specific recipients; interactive is real-time exchange.",
      "Push communication sends information to recipients directly rather than requiring them to retrieve it.",
      "Interactive communication involves an exchange, while this dashboard example is self-service retrieval.",
      "A broad audience alone does not define the method; the pull mechanism is the deciding clue."
    ],
    "tip": "Classify communication by how information is exchanged or retrieved.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-f0e9b2a2",
    "specific": true
  },
  "q-d07940a6": {
    "conceptId": "communication",
    "clue": "The participants can exchange information and respond in real time.",
    "why": [
      "Interactive communication is a real-time, multidirectional exchange — the most effective for reaching shared understanding.",
      "Pull communication retrieves stored information on demand rather than exchanging it live.",
      "Push communication sends information but does not inherently provide a two-way real-time exchange.",
      "An asynchronous exchange occurs at different times, unlike the live conversation described."
    ],
    "tip": "Use interactive methods when immediate feedback and shared understanding matter.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-d07940a6",
    "specific": true
  },
  "q-fd82ddcf": {
    "conceptId": "communication",
    "clue": "These factors interfere with accurate understanding.",
    "why": [
      "Noise is anything that interferes with transmitting or understanding the message; the sender should confirm the message was understood.",
      "Feedback returns a response and can check understanding; these examples distort the message.",
      "Encoding is the sender’s representation of meaning; the question groups obstacles to successful communication.",
      "A channel is the medium carrying information, while noise can interfere within or across channels."
    ],
    "tip": "Confirm understanding and reduce the specific barriers affecting the exchange.",
    "conceptTitle": "Communication and collaboration",
    "id": "q-fd82ddcf",
    "specific": true
  },
  "q-64c8d579": {
    "conceptId": "stakeholders",
    "clue": "The stakeholder knows about the project without supporting or opposing it.",
    "why": [
      "The engagement levels run unaware → resistant → neutral → supportive → leading. Neutral means aware but not yet engaged.",
      "Resistance means opposition; the scenario explicitly says the stakeholder does not oppose it.",
      "Support means a favorable stance; awareness alone does not establish support.",
      "Leading means active engagement in driving success, beyond simple awareness without a position."
    ],
    "tip": "Distinguish awareness from attitude and active engagement.",
    "conceptTitle": "Stakeholder engagement",
    "id": "q-64c8d579",
    "specific": true
  },
  "q-08142e91": {
    "conceptId": "stakeholders",
    "clue": "The stakeholder has both influence and active concerns.",
    "why": [
      "Engage resistant high-power stakeholders directly to understand and address concerns; ignoring or bypassing them raises risk.",
      "Avoidance leaves a powerful source of resistance unexplored and may increase delivery risk.",
      "Seeking removal assumes the stakeholder is the problem before understanding the reasons for resistance.",
      "Hoping resistance disappears does not provide an engagement strategy."
    ],
    "tip": "Understand concerns and interests before choosing a targeted engagement response.",
    "conceptTitle": "Stakeholder engagement",
    "id": "q-08142e91",
    "specific": true
  },
  "q-0f3c5084": {
    "conceptId": "stakeholders",
    "clue": "Accountable means the single owner answerable for the activity’s outcome.",
    "why": [
      "There is exactly one Accountable per activity (the single owner), though there may be several Responsible, Consulted, and Informed.",
      "Multiple accountable owners can make the final decision and ownership unclear.",
      "Many people may be Responsible, Consulted, or Informed; that does not make them all Accountable.",
      "Without an accountable owner, responsibility for the outcome is unclear."
    ],
    "tip": "Distinguish the one accountable owner from the people doing or advising the work.",
    "conceptTitle": "Stakeholder engagement",
    "id": "q-0f3c5084",
    "specific": true
  },
  "q-75ad3bc0": {
    "conceptId": "team-development",
    "clue": "The team lacks shared norms for meetings and decisions.",
    "why": [
      "A team-built charter with shared ground rules establishes norms and reduces process conflict. Teams own and enforce their own agreements.",
      "Imposing all rules misses the opportunity to create shared ownership and surface practical team needs.",
      "Waiting allows preventable friction to continue without a common agreement.",
      "Escalation is premature when the team can work together to establish its own ground rules."
    ],
    "tip": "Facilitate a shared agreement about how the team will work and resolve disagreements.",
    "conceptTitle": "Team development and working agreements",
    "id": "q-75ad3bc0",
    "specific": true
  },
  "q-51c6cce1": {
    "conceptId": "motivation",
    "clue": "Recognition should encourage useful, attainable behaviors in the team’s context.",
    "why": [
      "Rewards should be achievable, valued by recipients, and tied to desired behaviors; win-lose schemes can harm team cohesion.",
      "Only rewarding one winner can undermine collaboration and ignore valuable team contributions.",
      "Financial rewards are only one form of recognition and may not match what people value.",
      "Secret awards reduce transparency and do not clearly reinforce the intended behaviors."
    ],
    "tip": "Recognize valued contributions fairly, transparently, and in ways recipients appreciate.",
    "conceptTitle": "Motivation and recognition",
    "id": "q-51c6cce1",
    "specific": true
  },
  "q-a1e7e693": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "Close guidance decreases as the novice team gains skill.",
    "why": [
      "Shu-Ha-Ri describes mastery stages: follow the rules (Shu), adapt them (Ha), transcend them (Ri) — matching how coaching lightens over time.",
      "Pareto prioritizes the few causes with the greatest effect; it does not describe stages of learning.",
      "Little's Law relates work in progress, throughput, and cycle time, rather than coaching maturity.",
      "Theory X assumes workers need control; this coach deliberately grows autonomy as competence develops."
    ],
    "tip": "Close guidance decreases as the novice team gains skill.",
    "id": "q-a1e7e693",
    "specific": true
  },
  "q-abef7bce": {
    "conceptId": "conflict",
    "conceptTitle": "Conflict and collaboration",
    "clue": "The distinction is career development versus a current performance skill.",
    "why": [
      "Coaching builds a specific current-performance skill; mentoring is a broader, relationship-based, longer-term development partnership.",
      "A specific current skill is the focus of coaching, whereas mentoring develops the person over a broader period.",
      "Mentoring can be supportive and exploratory; it is not defined by being more directive than coaching.",
      "Mentoring is used across predictive, agile, and other settings; the development relationship defines it."
    ],
    "tip": "The distinction is career development versus a current performance skill.",
    "id": "q-abef7bce",
    "specific": true
  },
  "q-17bcc9fe": {
    "conceptId": "communication",
    "conceptTitle": "Communication and collaboration",
    "clue": "Global participants need access and a channel suited to the message.",
    "why": [
      "Technology choice weighs urgency, sensitivity, availability, ease of use, and the environment — not novelty.",
      "A new tool adds little value if stakeholders cannot access it or it does not suit the communication.",
      "Email provides a record but is poorly suited to every urgent, ambiguous, or interactive discussion.",
      "One synchronous tool can exclude time zones or access needs; communication should fit the situation."
    ],
    "tip": "Global participants need access and a channel suited to the message.",
    "id": "q-17bcc9fe",
    "specific": true
  },
  "q-50a1e79a": {
    "conceptId": "communication",
    "conceptTitle": "Communication and collaboration",
    "clue": "The question asks what sharing a physical workspace directly improves.",
    "why": [
      "Co-location (tight matrix) boosts spontaneous communication and team cohesion; agile teams favor it or a virtual equivalent.",
      "Being in the same room does not transfer contractual risk; contract terms allocate that risk.",
      "A shared workspace can help people exchange data, but it does not itself make earned value measurements accurate.",
      "Co-location changes how the team collaborates; it does not create additional procurement alternatives."
    ],
    "tip": "The question asks what sharing a physical workspace directly improves.",
    "id": "q-50a1e79a",
    "specific": true
  },
  "q-46d2f8cd": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "Self-organization concerns ownership of how work is performed.",
    "why": [
      "Self-organizing teams choose how to turn backlog items into increments; leaders provide goals and remove impediments, not task assignments.",
      "Detailed instructions for every task remove the team's discretion over how to accomplish the work.",
      "Autonomy includes accountability for results; self-organization does not mean an absence of responsibility.",
      "Manager-assigned work describes centralized direction rather than the team's internal organization of its work."
    ],
    "tip": "Self-organization concerns ownership of how work is performed.",
    "id": "q-46d2f8cd",
    "specific": true
  },
  "q-1a136da7": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "Team needs change throughout delivery and after membership or context changes.",
    "why": [
      "Team development is ongoing; it is especially useful when the team re-forms after membership or goal changes.",
      "Kickoff helps establish relationships, but later changes can create new needs for trust and collaboration.",
      "Waiting for conflict turns team development into a reaction; ongoing activities can prevent friction.",
      "Experienced people still need to build shared norms, especially when team membership or goals change."
    ],
    "tip": "Team needs change throughout delivery and after membership or context changes.",
    "id": "q-1a136da7",
    "specific": true
  },
  "q-11e30b74": {
    "conceptId": "conflict",
    "conceptTitle": "Conflict and collaboration",
    "clue": "The team member can develop the ability to resolve the conflict.",
    "why": [
      "Servant leaders facilitate the team to resolve their own issues rather than imposing solutions, building lasting capability.",
      "Deciding for them may resolve this instance but bypasses coaching and their ownership of the resolution.",
      "Permanent separation avoids the underlying disagreement and prevents the people from learning to work together.",
      "Ignoring the request leaves the conflict unresolved; a servant leader enables the team member to act."
    ],
    "tip": "The team member can develop the ability to resolve the conflict.",
    "id": "q-11e30b74",
    "specific": true
  },
  "q-a9562be3": {
    "conceptId": "stakeholders",
    "conceptTitle": "Stakeholder engagement",
    "clue": "Peers and other project managers are a distinct direction of influence.",
    "why": [
      "Sideward influence targets peers — fellow project managers and colleagues whose cooperation you need without authority over them.",
      "Backward is not the peer-influence direction in this stakeholder model.",
      "Inward alone does not describe influence involving peers and other project managers outside the immediate team.",
      "Vertical describes upward and downward relationships but misses influence across peer relationships."
    ],
    "tip": "Peers and other project managers are a distinct direction of influence.",
    "id": "q-a9562be3",
    "specific": true
  },
  "q-7802e412": {
    "conceptId": "conflict",
    "conceptTitle": "Conflict and collaboration",
    "clue": "An inherited team with low morale requires understanding before intervention.",
    "why": [
      "Understanding comes before action: gather the team's perspective, then address root causes collaboratively.",
      "Replacing people before understanding the morale problem risks treating symptoms and further damaging trust.",
      "New processes may miss the actual source of low morale; first listen to the team's experience.",
      "Reporting the team escalates blame before the incoming manager has assessed the problem with them."
    ],
    "tip": "An inherited team with low morale requires understanding before intervention.",
    "id": "q-7802e412",
    "specific": true
  },
  "q-5ca7c4ab": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "Groupthink suppresses disagreement and alternative viewpoints.",
    "why": [
      "Groupthink suppresses dissent; actively seeking opposing views and alternatives protects decision quality.",
      "Rewarding quick consensus can strengthen the pressure to agree instead of examining competing ideas.",
      "Deferring to the senior person can silence the very alternative perspectives needed to challenge groupthink.",
      "Reducing discussion time makes it harder for doubts and different assumptions to surface."
    ],
    "tip": "Groupthink suppresses disagreement and alternative viewpoints.",
    "id": "q-5ca7c4ab",
    "specific": true
  },
  "q-719bd70f": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "The defining assumption is that employees dislike work and need close control.",
    "why": [
      "Theory X managers assume people avoid work and need control and coercion; Theory Y assumes people are self-motivated.",
      "Theory Y assumes people can be self-motivated and seek responsibility, which is the opposite assumption.",
      "Theory Z emphasizes longer-term employment and involvement rather than assuming people dislike work.",
      "Expectancy theory explains motivation through effort, performance, and valued rewards rather than distrust of workers."
    ],
    "tip": "The defining assumption is that employees dislike work and need close control.",
    "id": "q-719bd70f",
    "specific": true
  },
  "q-e21a2c98": {
    "conceptId": "conflict",
    "conceptTitle": "Conflict and collaboration",
    "clue": "The retrospective should reveal system improvements without personal blame.",
    "why": [
      "Retrospectives are blameless and focus on improving the process and system, creating the safety needed for honest improvement.",
      "Allowing blame can make people defensive and less willing to discuss the real causes of problems.",
      "Ending early loses the opportunity to redirect the conversation toward useful process improvements.",
      "Reporting individuals turns a learning discussion into punishment before the team has examined the system."
    ],
    "tip": "The retrospective should reveal system improvements without personal blame.",
    "id": "q-e21a2c98",
    "specific": true
  },
  "q-fdc74358": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "Influence in a matrix depends on trust and demonstrated capability.",
    "why": [
      "Influence without authority depends on relationships and credibility established in advance, not on positional power or escalation.",
      "First contacting people only when you need something leaves little time to establish trust.",
      "A project title may provide limited authority in a matrix; it does not replace credible relationships.",
      "Routine escalation relies on hierarchy and can damage relationships rather than build durable influence."
    ],
    "tip": "Influence in a matrix depends on trust and demonstrated capability.",
    "id": "q-fdc74358",
    "specific": true
  },
  "q-031e7d46": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "The person performs well when the work environment supports focused effort.",
    "why": [
      "No personality type is better; the skill is matching tasks and environment to each person's preferences and strengths.",
      "Imposing an extroverted style ignores the conditions in which this team member performs best.",
      "Removing a capable person wastes their strengths without addressing how the team organizes work.",
      "Only assigning group work removes the focused conditions that the scenario identifies as effective."
    ],
    "tip": "The person performs well when the work environment supports focused effort.",
    "id": "q-031e7d46",
    "specific": true
  },
  "q-eb1d8efc": {
    "conceptId": "governance",
    "conceptTitle": "Governance and authority",
    "clue": "Formal authorization comes from the sponsor, not the person managing delivery.",
    "why": [
      "The sponsor signs the charter, which authorizes the project and empowers the PM. The PM does not sign their own authorization.",
      "The project manager helps develop the charter but is not the source of its sponsoring authorization.",
      "The team performs the project work; it does not normally supply the sponsor's formal authorization.",
      "End users inform requirements and value, but that does not make them the charter's authorizing sponsor."
    ],
    "tip": "Formal authorization comes from the sponsor, not the person managing delivery.",
    "id": "q-eb1d8efc",
    "specific": true
  },
  "q-a0143e50": {
    "conceptId": "change-control",
    "conceptTitle": "Scope and change control",
    "clue": "Configuration management keeps the product's specification and version identity controlled.",
    "why": [
      "Configuration management governs the product's features/versions and consistency; change control governs whether changes to baselines are approved.",
      "Approving or rejecting requested changes is the change-control decision, not the product-version control focus.",
      "Scheduling manages activity timing; it does not identify and control the product's configuration.",
      "Assigning resources manages who performs work, rather than controlling product specifications and versions."
    ],
    "tip": "Configuration management keeps the product's specification and version identity controlled.",
    "id": "q-a0143e50",
    "specific": true
  },
  "q-7af85c9d": {
    "conceptId": "change-control",
    "conceptTitle": "Scope and change control",
    "clue": "The CCB makes decisions on proposed changes under agreed governance.",
    "why": [
      "The CCB is the formal body that dispositions change requests. Its authority and membership are defined in the change management plan.",
      "Implementing an approved change is delivery work; the board's responsibility is deciding whether to authorize it.",
      "Team compensation is outside the board's purpose of reviewing proposed project changes.",
      "The sponsor's charter authorization starts the project; the CCB considers subsequent change requests."
    ],
    "tip": "The CCB makes decisions on proposed changes under agreed governance.",
    "id": "q-7af85c9d",
    "specific": true
  },
  "q-55cd2bc5": {
    "conceptId": "performance-data",
    "conceptTitle": "Performance data and reporting",
    "clue": "The percentage is a raw observation before analysis or reporting.",
    "why": [
      "Data are raw measurements. Analyzed into context they become information; packaged for stakeholders they become reports.",
      "Information is created when the observation is analyzed against the plan or other relevant context.",
      "A report packages analyzed performance for communication; a single raw observation is not that report.",
      "A measurement does not itself request a change to an approved plan or deliverable."
    ],
    "tip": "The percentage is a raw observation before analysis or reporting.",
    "id": "q-55cd2bc5",
    "specific": true
  },
  "q-e7469cbd": {
    "conceptId": "performance-data",
    "conceptTitle": "Performance data and reporting",
    "clue": "The dashboard packages analyzed performance for stakeholder communication.",
    "why": [
      "Work performance reports are the physical or electronic representations of work performance information compiled for decisions or awareness.",
      "Raw measurements are the input; the dashboard presents analyzed and organized information to its audience.",
      "A change log records change requests and their status rather than the combined performance dashboard.",
      "Requirements describe what must be delivered; they do not report current delivery performance."
    ],
    "tip": "The dashboard packages analyzed performance for stakeholder communication.",
    "id": "q-e7469cbd",
    "specific": true
  },
  "q-9ca052be": {
    "conceptId": "scope",
    "conceptTitle": "Scope and requirements",
    "clue": "Traceability connects a requirement to its source and implementation.",
    "why": [
      "The RTM traces requirements from source to deliverable, ensuring each is delivered and tested and helping manage scope changes.",
      "Activity sequencing determines the order of work; it does not establish each requirement's origin and coverage.",
      "Risk ownership belongs in risk planning and records, not the purpose of requirements traceability.",
      "Earned value measures performance; traceability checks whether requirements are accounted for through delivery."
    ],
    "tip": "Traceability connects a requirement to its source and implementation.",
    "id": "q-9ca052be",
    "specific": true
  },
  "q-0f2073cf": {
    "conceptId": "scope",
    "conceptTitle": "Scope and requirements",
    "clue": "The team adds unrequested features on its own initiative.",
    "why": [
      "Gold plating is the team adding unrequested extras. Scope creep is uncontrolled change driven from outside; both are undesirable.",
      "Scope creep is uncontrolled scope expansion; this example specifically describes team-initiated extras known as gold plating.",
      "Progressive elaboration adds detail to understood work; it does not authorize extra features beyond requirements.",
      "Fast tracking overlaps planned activities to compress a schedule; it does not add product features."
    ],
    "tip": "The team adds unrequested features on its own initiative.",
    "id": "q-0f2073cf",
    "specific": true
  },
  "q-ca29122e": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "MoSCoW distinguishes essential needs from lower-priority work.",
    "why": [
      "MoSCoW = Must have, Should have, Could have, Won't have (this time) — a common agile prioritization technique.",
      "May have is not the M category; Must have identifies requirements essential to the agreed outcome.",
      "Medium is a general priority label, not one of the named MoSCoW categories.",
      "A Must have is essential, rather than an optional stretch requirement."
    ],
    "tip": "MoSCoW distinguishes essential needs from lower-priority work.",
    "id": "q-ca29122e",
    "specific": true
  },
  "q-4e2c035f": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "Free float protects the successor's early start, not just the project finish.",
    "why": [
      "Free float delays no successor's early start; total float delays no project finish. On the critical path both are typically zero.",
      "Delay without moving the project finish describes total float rather than free float.",
      "Free float and total float protect different dates and need not be equal.",
      "Free float can exist on noncritical work; it is not limited to the critical path."
    ],
    "tip": "Free float protects the successor's early start, not just the project finish.",
    "id": "q-4e2c035f",
    "specific": true
  },
  "q-5b6923c6": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "Moving forward from the network start establishes earliest possible dates.",
    "why": [
      "The forward pass derives early start/finish (left to right); the backward pass derives late start/finish (right to left).",
      "Late start and finish are found with the backward pass from the required finish.",
      "Float is derived using early and late dates; the forward pass alone supplies only early dates.",
      "Critical-chain buffers are a different scheduling technique, not the output of a network forward pass."
    ],
    "tip": "Moving forward from the network start establishes earliest possible dates.",
    "id": "q-5b6923c6",
    "specific": true
  },
  "q-4cc63560": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "Leveling resolves resource conflicts even when the finish date must move.",
    "why": [
      "Leveling adjusts start/finish to resource constraints and can lengthen the schedule and shift the critical path. Smoothing does not change the critical path.",
      "Leveling may delay work to respect resource availability, so the project end date is not protected automatically.",
      "Resource leveling adjusts timing for resource constraints; cost reduction is not its sole purpose or guaranteed result.",
      "Fast tracking overlaps activities; leveling adjusts timing to deal with limited resources."
    ],
    "tip": "Leveling resolves resource conflicts even when the finish date must move.",
    "id": "q-4cc63560",
    "specific": true
  },
  "q-4e66ee4c": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "Smoothing uses available float to improve resource usage while preserving the finish.",
    "why": [
      "Smoothing adjusts work within available float so the completion date is unchanged; leveling can move the end date.",
      "Extending the schedule can occur with leveling; smoothing stays within the existing scheduling flexibility.",
      "Smoothing seeks a better resource pattern within float; it does not simply disregard resource constraints.",
      "Smoothing preserves the controlling schedule dates instead of deliberately changing the critical path."
    ],
    "tip": "Smoothing uses available float to improve resource usage while preserving the finish.",
    "id": "q-4e66ee4c",
    "specific": true
  },
  "q-7247c518": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "The buffer protects the finish of the entire critical chain.",
    "why": [
      "The project buffer protects the end date; feeding buffers protect the critical chain where non-critical paths merge in.",
      "A feeding buffer protects the chain where another path joins it, rather than protecting the final finish.",
      "A resource buffer signals resource readiness; it is not the time buffer at the chain's end.",
      "Management reserve is a budget or management allowance, not this critical-chain schedule buffer."
    ],
    "tip": "The buffer protects the finish of the entire critical chain.",
    "id": "q-7247c518",
    "specific": true
  },
  "q-9d593290": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "A feeder path can delay the critical chain where the two paths meet.",
    "why": [
      "Feeding buffers absorb delays on feeding (non-critical) paths so they do not disturb the critical chain.",
      "The end-of-project buffer is the project buffer; a feeding buffer protects a merge into the critical chain.",
      "Critical-chain buffering aggregates protection at useful locations rather than padding every individual activity.",
      "A feeding buffer belongs at the join from a noncritical path, not only along the critical chain itself."
    ],
    "tip": "A feeder path can delay the critical chain where the two paths meet.",
    "id": "q-9d593290",
    "specific": true
  },
  "q-b87c6bf5": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "Many simulated outcomes are used to estimate a distribution of possible results.",
    "why": [
      "Monte Carlo simulation models uncertainty across many iterations, yielding confidence levels (e.g., an 80% chance of finishing by a date).",
      "Earned value compares planned, earned, and actual performance; it does not generate thousands of possible outcomes.",
      "Pareto analysis ranks the most influential causes or categories rather than simulating uncertainty.",
      "Delphi gathers expert judgments through structured rounds, rather than running numerical outcome simulations."
    ],
    "tip": "Many simulated outcomes are used to estimate a distribution of possible results.",
    "id": "q-b87c6bf5",
    "specific": true
  },
  "q-f0d9ecf2": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "Three points represent optimistic, likely, and pessimistic possibilities.",
    "why": [
      "Three-point estimating (triangular or beta/PERT) reflects uncertainty and risk in a single estimate.",
      "A three-point estimate explicitly represents uncertainty; a single fixed duration omits the range of possible outcomes.",
      "Estimating uncertainty helps decide reserves; it does not eliminate the need to manage uncertainty.",
      "The WBS defines the work to estimate; a three-point estimate does not replace that scope structure."
    ],
    "tip": "Three points represent optimistic, likely, and pessimistic possibilities.",
    "id": "q-f0d9ecf2",
    "specific": true
  },
  "q-52059295": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "A near-critical path has little spare time before it could control the finish.",
    "why": [
      "Paths with little float are near-critical; monitor them because minor delays can turn them critical.",
      "A path with the most float has more flexibility; near-critical paths have little available float.",
      "Ignoring a near-critical path misses the risk that a small delay makes it control the finish.",
      "A near-critical path can affect the project finish if it becomes the longest or controlling path."
    ],
    "tip": "A near-critical path has little spare time before it could control the finish.",
    "id": "q-52059295",
    "specific": true
  },
  "q-953da7d2": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "The cost baseline excludes management reserve but includes planned contingency.",
    "why": [
      "Cost baseline = sum of work package estimates plus contingency reserves, spread over time. Adding management reserves gives the total budget.",
      "Adding management reserve gives a broader project budget; it is outside the cost baseline in this model.",
      "Funding limits govern available funds and timing; they are not the approved time-phased performance baseline.",
      "Contingency is included within the baseline, but the baseline also covers the planned work costs."
    ],
    "tip": "The cost baseline excludes management reserve but includes planned contingency.",
    "id": "q-953da7d2",
    "specific": true
  },
  "q-b503a748": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "The expenditure cannot be recovered and is already in the past.",
    "why": [
      "Sunk costs are unrecoverable and irrelevant to go-forward decisions; basing decisions on them is a common trap.",
      "Opportunity cost is the value of the best alternative forgone, not money already spent.",
      "Variable cost changes with output; the question instead emphasizes that the spending is already irreversible.",
      "Direct cost describes attribution to work; being already spent and unrecoverable is the sunk-cost distinction."
    ],
    "tip": "The expenditure cannot be recovered and is already in the past.",
    "id": "q-b503a748",
    "specific": true
  },
  "q-c1dfb9a7": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "The office supports several projects rather than one identifiable project.",
    "why": [
      "Indirect costs are shared across multiple projects (overhead). Direct costs are attributable to one specific project.",
      "A direct cost is traceable to a particular project or work item; this rent is shared across projects.",
      "Variable cost changes with production volume; the clue here is shared allocation, not volume sensitivity.",
      "Sunk cost concerns unrecoverable past spending; allocation across several projects defines the cost as indirect."
    ],
    "tip": "The office supports several projects rather than one identifiable project.",
    "id": "q-c1dfb9a7",
    "specific": true
  },
  "q-679f5b4e": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "The total material cost changes as the number of produced units changes.",
    "why": [
      "Variable costs change with the volume of work/output; fixed costs stay constant regardless of volume.",
      "A fixed cost remains stable over the relevant volume range; these material costs increase with units.",
      "Indirect cost describes shared attribution, whereas this question asks how cost behaves as output changes.",
      "Sunk costs have already occurred; the question describes future cost increasing with production volume."
    ],
    "tip": "The total material cost changes as the number of produced units changes.",
    "id": "q-679f5b4e",
    "specific": true
  },
  "q-ae7058a3": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "Grade categorizes technical features; quality checks whether requirements are satisfied.",
    "why": [
      "Low grade may be acceptable; low quality (failing requirements) is never acceptable. They are distinct concepts.",
      "Grade and quality answer different questions: feature category versus conformance to agreed requirements.",
      "Price may differ across grades, but price itself does not define the grade of an item.",
      "Defect rate measures quality performance, not the category of technical features."
    ],
    "tip": "Grade categorizes technical features; quality checks whether requirements are satisfied.",
    "id": "q-ae7058a3",
    "specific": true
  },
  "q-6b97aae7": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "Managing quality improves the system that creates the product.",
    "why": [
      "QA/Manage Quality is process-focused and proactive (prevention); QC/Control Quality is product-focused inspection.",
      "Checking finished items for defects is control quality; managing quality addresses the producing processes.",
      "Customer acceptance is scope validation, which is separate from improving the quality-management process.",
      "Change authorization decides proposed modifications; it is not the primary purpose of quality assurance."
    ],
    "tip": "Managing quality improves the system that creates the product.",
    "id": "q-6b97aae7",
    "specific": true
  },
  "q-3c686f57": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "Training and documented processes help prevent defects before they occur.",
    "why": [
      "Prevention (training, documenting processes) and appraisal (testing, inspection) are costs of conformance; failure costs are nonconformance.",
      "Appraisal costs pay for checking or testing quality, rather than preventing defects through training.",
      "Internal failure costs arise from defects found before release, such as scrap or rework.",
      "External failure costs arise after the product reaches the customer; training aims to avoid those failures."
    ],
    "tip": "Training and documented processes help prevent defects before they occur.",
    "id": "q-3c686f57",
    "specific": true
  },
  "q-086bf124": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "The strongest quality approach avoids creating defects in the first place.",
    "why": [
      "It is cheaper to design quality in (prevention) than to inspect it in or fix defects later. This is a recurring exam theme.",
      "Inspection detects defects after they are created; prevention improves the process so fewer defects occur.",
      "Customer-discovered defects create external failure costs and erode trust; they are a late detection point.",
      "Accepting defects as inevitable skips the opportunity to improve the process and meet requirements more reliably."
    ],
    "tip": "The strongest quality approach avoids creating defects in the first place.",
    "id": "q-086bf124",
    "specific": true
  },
  "q-fd1d77e7": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "The tool pairs values of two variables to explore a relationship.",
    "why": [
      "Scatter diagrams reveal correlation between two variables; Pareto ranks causes; control charts show time; histograms show distribution.",
      "Ranking defect categories by frequency is a Pareto use, rather than a scatter diagram's paired observations.",
      "A run or control chart displays performance over time; a scatter diagram compares two variables.",
      "A histogram displays a distribution's shape; a scatter diagram plots one variable against another."
    ],
    "tip": "The tool pairs values of two variables to explore a relationship.",
    "id": "q-fd1d77e7",
    "specific": true
  },
  "q-3a0b64c8": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "The chart groups observations into frequency intervals.",
    "why": [
      "Histograms display how data is distributed across ranges, revealing shape, center, and spread.",
      "A scatter diagram explores correlation by pairing two variables; a histogram groups the values of one measure.",
      "Pareto-style prioritization orders categories; a histogram shows the frequency distribution of measured values.",
      "A control chart tracks results over time against limits; a histogram does not show that sequence."
    ],
    "tip": "The chart groups observations into frequency intervals.",
    "id": "q-3a0b64c8",
    "specific": true
  },
  "q-faaa5c1a": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "Control limits describe observed process variation, while specifications express requirements.",
    "why": [
      "Control limits reflect the process's natural variation; specification limits come from customer requirements. They are not the same.",
      "Customer requirements set specification expectations; statistical control limits come from the process's observed behavior.",
      "Specification limits express acceptance requirements and can differ from the statistical control limits.",
      "Choosing convenient limits by preference would obscure the actual variation the control chart is meant to reveal."
    ],
    "tip": "Control limits describe observed process variation, while specifications express requirements.",
    "id": "q-faaa5c1a",
    "specific": true
  },
  "q-e0cd3357": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "The team learns by comparing practices with other organizations.",
    "why": [
      "Benchmarking compares practices/performance against comparable organizations to identify best practices and improvement targets.",
      "DOE varies factors to test their effects; it does not primarily compare your practices with other organizations.",
      "Statistical sampling examines a subset of items; the clue here is learning from external practices.",
      "Root-cause analysis investigates why a particular problem occurs, rather than comparing practices across organizations."
    ],
    "tip": "The team learns by comparing practices with other organizations.",
    "id": "q-e0cd3357",
    "specific": true
  },
  "q-a1ff9d57": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "DOE deliberately varies inputs to learn which factors affect results.",
    "why": [
      "DOE systematically varies factors to find the optimal configuration and the variables with the greatest effect on quality.",
      "Acceptance checks conformity to requirements; DOE investigates how input factors influence an outcome.",
      "Risk ranking prioritizes uncertainty; DOE studies the causal influence of controlled input factors.",
      "A WBS decomposes deliverables into manageable work; DOE investigates experimental factors and outcomes."
    ],
    "tip": "DOE deliberately varies inputs to learn which factors affect results.",
    "id": "q-a1ff9d57",
    "specific": true
  },
  "q-9f90f4bd": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "The report gives an overall project-risk view in addition to individual-risk summaries.",
    "why": [
      "The risk register holds individual risk details; the risk report summarizes sources of overall project risk and the big picture.",
      "Detailed records of a single risk belong in the register; the report also communicates overall project exposure.",
      "A change log tracks modifications and their decisions, rather than overall uncertainty affecting the project.",
      "A stakeholder list identifies people and organizations; it does not summarize overall project risk."
    ],
    "tip": "The report gives an overall project-risk view in addition to individual-risk summaries.",
    "id": "q-9f90f4bd",
    "specific": true
  },
  "q-b49b4571": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "Probability and impact ratings support relative prioritization of risks.",
    "why": [
      "The P-I matrix prioritizes risks qualitatively by combining probability and impact ratings to focus attention.",
      "Quantitative analysis models numerical effects on objectives; a rating matrix supports qualitative prioritization.",
      "Response planning chooses actions after risks are understood and prioritized; the matrix helps establish that priority.",
      "Identification discovers potential risks; the matrix evaluates probability and impact once risks have been identified."
    ],
    "tip": "Probability and impact ratings support relative prioritization of risks.",
    "id": "q-b49b4571",
    "specific": true
  },
  "q-120e5e9a": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "The hierarchy groups where risks come from.",
    "why": [
      "The RBS is a hierarchical categorization of risk sources (technical, external, organizational, project management) to aid identification.",
      "Probability rates likelihood; an RBS groups risks by category or source rather than likelihood alone.",
      "An owner is assigned responsibility for a risk; ownership does not define the RBS hierarchy.",
      "Cost quantifies an impact; the RBS organizes sources or categories, not only monetary values."
    ],
    "tip": "The hierarchy groups where risks come from.",
    "id": "q-120e5e9a",
    "specific": true
  },
  "q-44e02790": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "The response is improvised when the event occurs, rather than planned beforehand.",
    "why": [
      "A workaround is an unplanned response to an issue that has already occurred (often a realized unidentified or accepted risk).",
      "A contingency plan is prepared in advance and activated by a trigger; this response is created on the spot.",
      "A fallback plan is prepared for failure of a primary response, rather than improvised without a prior plan.",
      "Mitigation is a planned reduction of threat probability or impact; the scenario describes an unplanned workaround."
    ],
    "tip": "The response is improvised when the event occurs, rather than planned beforehand.",
    "id": "q-44e02790",
    "specific": true
  },
  "q-c5a270d8": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "The question describes the amount of variation people will accept.",
    "why": [
      "Appetite is willingness to take on uncertainty for reward; tolerance is the acceptable variation; threshold is the specific trigger level.",
      "Appetite is a broader willingness to take on uncertainty; tolerance describes acceptable variation around an objective.",
      "A threshold is a specified limit that triggers action; tolerance describes the acceptable variation range.",
      "A register is the document holding individual risk information, not a stakeholder's acceptance of variation."
    ],
    "tip": "The question describes the amount of variation people will accept.",
    "id": "q-c5a270d8",
    "specific": true
  },
  "q-8fd54f8d": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "The diagram ranks how strongly uncertain inputs affect an outcome.",
    "why": [
      "Sensitivity analysis shows which risks have the most potential impact, displayed as a tornado diagram ranking variables by influence.",
      "Monte Carlo produces distributions of simulated outcomes; a tornado display specifically communicates sensitivity to inputs.",
      "Pareto analysis ranks categories or causes by contribution; this question asks about sensitivity of the result to inputs.",
      "SWOT organizes strengths, weaknesses, opportunities, and threats; it does not itself produce a sensitivity ranking."
    ],
    "tip": "The diagram ranks how strongly uncertain inputs affect an outcome.",
    "id": "q-8fd54f8d",
    "specific": true
  },
  "q-25ced893": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "The opportunity becomes more likely or valuable, but remains uncertain.",
    "why": [
      "Enhance increases probability/impact; exploit makes it certain; share brings in a partner better able to capture the opportunity.",
      "Exploitation seeks to make the opportunity occur; the question explicitly stops short of making it certain.",
      "Sharing assigns joint opportunity ownership with a capable partner; the clue here is increasing probability or impact.",
      "Acceptance leaves the opportunity without a proactive improvement action; enhancement actively improves its prospects."
    ],
    "tip": "The opportunity becomes more likely or valuable, but remains uncertain.",
    "id": "q-25ced893",
    "specific": true
  },
  "q-11482afa": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "Joint capability and ownership make the opportunity possible.",
    "why": [
      "Sharing (opportunity) allocates ownership to a third party best able to capture the benefit — the positive mirror of transfer.",
      "Exploitation seeks to ensure the opportunity happens; the distinctive action here is partnering to share its pursuit.",
      "Enhancement increases an opportunity's likelihood or impact; this scenario specifically uses a partner to capture it.",
      "Transfer is generally a threat-response strategy; this is joint pursuit of a positive opportunity."
    ],
    "tip": "Joint capability and ownership make the opportunity possible.",
    "id": "q-11482afa",
    "specific": true
  },
  "q-45eb909d": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "Political, economic, social, technological, legal, and environmental headings prompt risk identification.",
    "why": [
      "Prompt lists like PESTLE (political, economic, social, technological, legal, environmental) stimulate identification of external risks.",
      "PESTLE helps identify external sources of uncertainty; it does not select a response to a particular risk.",
      "It is a structured category prompt, rather than a numerical model for risk outcomes.",
      "Procurement documents describe or solicit contract work; PESTLE is a broader external-environment analysis aid."
    ],
    "tip": "Political, economic, social, technological, legal, and environmental headings prompt risk identification.",
    "id": "q-45eb909d",
    "specific": true
  },
  "q-0d18c28e": {
    "conceptId": "procurement",
    "conceptTitle": "Procurement and contracts",
    "clue": "The procurement SOW defines the work the seller must deliver.",
    "why": [
      "The procurement SOW defines the goods/services to be provided in enough detail for sellers to determine if they can deliver.",
      "Seller financial information helps assess a supplier, but it does not describe the contracted work itself.",
      "The buyer's organization chart explains reporting relationships, rather than the work to be procured.",
      "A risk register records uncertainty; the SOW specifies the portion of work covered by the contract."
    ],
    "tip": "The procurement SOW defines the work the seller must deliver.",
    "id": "q-0d18c28e",
    "specific": true
  },
  "q-bbd900be": {
    "conceptId": "procurement",
    "conceptTitle": "Procurement and contracts",
    "clue": "The buyer wants proposed approaches and solutions, not just a quoted amount.",
    "why": [
      "An RFP invites proposed approaches/solutions. An RFQ or IFB seeks pricing for well-defined goods/services.",
      "An RFQ is useful when a defined item or service mainly needs a price, rather than a proposed solution.",
      "An invitation for bid usually seeks bids against defined requirements; an RFP invites solution proposals.",
      "A purchase order authorizes a purchase; it is not the document used to solicit competing solution proposals."
    ],
    "tip": "The buyer wants proposed approaches and solutions, not just a quoted amount.",
    "id": "q-bbd900be",
    "specific": true
  },
  "q-62073b01": {
    "conceptId": "procurement",
    "conceptTitle": "Procurement and contracts",
    "clue": "The decision is internal production versus obtaining the work externally.",
    "why": [
      "Make-or-buy weighs cost, capability, capacity, and risk to decide whether to perform work in-house or outsource it.",
      "Contract-type selection follows a procurement decision; make-or-buy first asks whether procurement is appropriate.",
      "Seller margin concerns supplier pricing; it does not answer whether the buyer should perform the work internally.",
      "Warranty terms allocate responsibilities after delivery, rather than deciding internal production versus external purchase."
    ],
    "tip": "The decision is internal production versus obtaining the work externally.",
    "id": "q-62073b01",
    "specific": true
  },
  "q-639002eb": {
    "conceptId": "procurement",
    "conceptTitle": "Procurement and contracts",
    "clue": "The question asks for an interim expression of intent before the full agreement.",
    "why": [
      "A letter of intent signals intent to contract and can authorize preliminary work, but it is generally not a binding contract itself.",
      "A final contract is the completed agreement; the scenario says that agreement has not yet been finalized.",
      "A warranty addresses obligations associated with a product or service, rather than an interim intention to begin work.",
      "A change order modifies an existing contractual arrangement; this question concerns work before the full contract is finalized."
    ],
    "tip": "The question asks for an interim expression of intent before the full agreement.",
    "id": "q-639002eb",
    "specific": true
  },
  "q-f9be2c72": {
    "conceptId": "procurement",
    "conceptTitle": "Procurement and contracts",
    "clue": "Closure checks completion and terms, then formally records the agreement's end.",
    "why": [
      "Close Procurements confirms deliverables and terms are satisfied, settles claims, and archives records for lessons learned.",
      "A new procurement is a separate purchasing decision; it does not close obligations under the existing agreement.",
      "Good seller performance does not remove the need to verify completion and document formal contract closure.",
      "Payment should follow the agreement's terms and verification requirements; willingness to pay does not replace acceptance checks."
    ],
    "tip": "Closure checks completion and terms, then formally records the agreement's end.",
    "id": "q-f9be2c72",
    "specific": true
  },
  "q-d5e62d57": {
    "conceptId": "change-control",
    "conceptTitle": "Scope and change control",
    "clue": "The standard performance baselines cover scope, schedule, and cost.",
    "why": [
      "The three performance baselines are scope, schedule, and cost; together they form the performance measurement baseline.",
      "Cost is one baseline, but scope and schedule also provide approved reference points for control.",
      "Scope defines approved work, but schedule and cost baselines are also needed to measure performance.",
      "Risk and quality plans matter, but they are not the three standard performance baselines named here."
    ],
    "tip": "The standard performance baselines cover scope, schedule, and cost.",
    "id": "q-d5e62d57",
    "specific": true
  },
  "q-b900f90c": {
    "conceptId": "scope",
    "conceptTitle": "Scope and requirements",
    "clue": "Break work down only while the additional detail improves estimation and control.",
    "why": [
      "Stop decomposing at the work-package level; over-decomposition creates non-productive management effort.",
      "More decomposition is not automatically better; excessive detail can cost more to maintain than it helps.",
      "Decomposition reorganizes the same scope into smaller elements; it does not reduce the project's amount of work.",
      "Detail beyond a manageable level adds overhead without guaranteeing better analysis of risk."
    ],
    "tip": "Break work down only while the additional detail improves estimation and control.",
    "id": "q-b900f90c",
    "specific": true
  },
  "q-671220b4": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "A milestone marks a significant point or event, rather than a period of work.",
    "why": [
      "Milestones mark significant points or events and have zero duration; they represent achievements, not work.",
      "One day would represent duration; a milestone is a zero-duration marker on the schedule.",
      "The preceding activity has its own duration; reaching the milestone marks a point after that work.",
      "Activities can have varying durations; the scheduling convention for a milestone is zero duration."
    ],
    "tip": "A milestone marks a significant point or event, rather than a period of work.",
    "id": "q-671220b4",
    "specific": true
  },
  "q-fd61916d": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "Detailed work-package estimates require substantial effort but improve precision.",
    "why": [
      "Bottom-up sums detailed work-package estimates for high accuracy at high effort; analogous is fastest but least accurate.",
      "Analogous estimates use similar past work and are quicker, generally at the cost of detail and precision.",
      "Parametric estimates use a rate or model; the question describes detailed aggregation from the bottom up.",
      "Expert judgment can support any technique; using judgment alone does not imply detailed work-package aggregation."
    ],
    "tip": "Detailed work-package estimates require substantial effort but improve precision.",
    "id": "q-fd61916d",
    "specific": true
  },
  "q-5609b971": {
    "conceptId": "performance-data",
    "conceptTitle": "Performance data and reporting",
    "clue": "Analysis turns raw observations into information about performance.",
    "why": [
      "Information results from analyzing data in context (e.g., status against baseline), which then feeds work performance reports.",
      "Collecting measurements produces data; comparing those measurements with the plan creates performance information.",
      "The charter authorizes the project; it does not analyze ongoing work-performance measurements.",
      "Approving a change is a governance decision, rather than the analysis that produces performance information."
    ],
    "tip": "Analysis turns raw observations into information about performance.",
    "id": "q-5609b971",
    "specific": true
  },
  "q-93686169": {
    "conceptId": "communication",
    "conceptTitle": "Communication and collaboration",
    "clue": "Kickoff creates a common understanding of objectives, roles, and the approach.",
    "why": [
      "Kickoff aligns the team and stakeholders on goals, roles, and approach; timing varies for small vs large or phased projects.",
      "The meeting aligns people before delivery; it does not produce the project's final product by itself.",
      "Closing follows completion or termination; kickoff establishes shared understanding at the beginning of work.",
      "Contract signing authorizes an agreement; kickoff aligns participants on how they will carry out the project."
    ],
    "tip": "Kickoff creates a common understanding of objectives, roles, and the approach.",
    "id": "q-93686169",
    "specific": true
  },
  "q-c70b5abe": {
    "conceptId": "change-control",
    "conceptTitle": "Scope and change control",
    "clue": "Approval must be reflected in the affected approved references and plans.",
    "why": [
      "Approved changes flow into updates of the relevant baselines, plans, and documents so the plan stays current.",
      "A task list alone leaves the approved baselines inconsistent with the change that was authorized.",
      "Waiting until closing would leave the team working against outdated plans during the rest of delivery.",
      "The business case may be affected, but updating it alone misses the baselines and plans the change alters."
    ],
    "tip": "Approval must be reflected in the affected approved references and plans.",
    "id": "q-c70b5abe",
    "specific": true
  },
  "q-b3a6a6d8": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "An accepted deviation must be visible and handled through the agreed authorization process.",
    "why": [
      "Accepting a known deviation is documented (concession/waiver) so the record is accurate and traceable.",
      "Hiding a known defect prevents an informed, documented acceptance decision and undermines transparency.",
      "Unannounced rework can ignore the customer's accepted tradeoff and changes cost or timing without coordination.",
      "A documented, acceptable concession can resolve a minor deviation; cancelling is disproportionate to the scenario."
    ],
    "tip": "An accepted deviation must be visible and handled through the agreed authorization process.",
    "id": "q-b3a6a6d8",
    "specific": true
  },
  "q-549e9ed7": {
    "conceptId": "governance",
    "conceptTitle": "Governance and authority",
    "clue": "The committee provides strategic oversight and decisions beyond day-to-day delivery.",
    "why": [
      "Steering committees give oversight, resolve escalations, and make go/no-go and funding decisions aligned to strategy.",
      "Daily backlog management is a product and delivery activity rather than the committee's governance purpose.",
      "Test-case creation is quality-delivery work, rather than strategic direction and oversight.",
      "A daily standup coordinates delivery; a steering committee handles higher-level governance and major decisions."
    ],
    "tip": "The committee provides strategic oversight and decisions beyond day-to-day delivery.",
    "id": "q-549e9ed7",
    "specific": true
  },
  "q-212edccf": {
    "conceptId": "governance",
    "conceptTitle": "Governance and authority",
    "clue": "Governance sets the decision framework; management works within it.",
    "why": [
      "Governance defines authority, policy, and oversight; management operates the project within that framework.",
      "Hands-on execution is management or delivery work; governance provides direction, accountability, and oversight.",
      "Governance applies across project approaches, including predictive and hybrid, rather than only agile teams.",
      "Governance defines roles and oversight; it does not eliminate the sponsor's accountability and responsibilities."
    ],
    "tip": "Governance sets the decision framework; management works within it.",
    "id": "q-212edccf",
    "specific": true
  },
  "q-908df021": {
    "conceptId": "governance",
    "conceptTitle": "Governance and authority",
    "clue": "The threshold already defines when a decision exceeds the PM's delegated authority.",
    "why": [
      "Governance sets tolerance thresholds; breaching one triggers a defined escalation, not silent absorption or unilateral re-baselining.",
      "Absorbing the variance silently bypasses an agreed escalation trigger and denies governance an informed decision.",
      "Waiting until closing loses the chance for timely corrective action when the threshold is exceeded.",
      "Changing the baseline without approval bypasses the authority and controls established by governance."
    ],
    "tip": "The threshold already defines when a decision exceeds the PM's delegated authority.",
    "id": "q-908df021",
    "specific": true
  },
  "q-a998140f": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "The scenario explicitly describes a practice adopted voluntarily.",
    "why": [
      "Standards are optional guidelines; regulations and laws are mandatory. Confusing the two is a common exam distinction.",
      "A regulation is mandatory within its jurisdiction; the question specifies an optional best practice.",
      "A law carries legal obligation, while this practice is being followed by choice.",
      "A mandate requires action; this example describes voluntary adoption of a standard."
    ],
    "tip": "The scenario explicitly describes a practice adopted voluntarily.",
    "id": "q-a998140f",
    "specific": true
  },
  "q-031922e7": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "The law applies to the project's customer-data handling.",
    "why": [
      "Legal and regulatory requirements are mandatory and must be planned into scope, quality, and risk from the start.",
      "Delivery speed does not make an applicable data-privacy obligation optional.",
      "Legal experts can advise, but the project must incorporate and manage the applicable requirement in its work.",
      "Deferring an applicable obligation can leave current data handling noncompliant; it should be planned into the work."
    ],
    "tip": "The law applies to the project's customer-data handling.",
    "id": "q-031922e7",
    "specific": true
  },
  "q-73398eee": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "Benefits continue in the business after the temporary project ends.",
    "why": [
      "The PM delivers capabilities; the sponsor or business owns realizing and sustaining benefits, often after the project closes.",
      "The PM supports planning and transition, but indefinite benefit ownership normally belongs to the continuing business.",
      "A vendor may deliver a product, but that does not automatically make it accountable for the buyer's business benefits.",
      "The scheduler manages timing information; business benefit ownership requires business authority and continuing accountability."
    ],
    "tip": "Benefits continue in the business after the temporary project ends.",
    "id": "q-73398eee",
    "specific": true
  },
  "q-e077e868": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "The product is an output; the improvement it enables is the benefit.",
    "why": [
      "Outputs are what the project produces; benefits are the measurable improvements or value those outputs create for the organization.",
      "The physical product is a deliverable; a benefit is the value achieved by using that output.",
      "Benefits can include nonfinancial outcomes such as safety, satisfaction, or improved access, as well as financial gains.",
      "Benefits can emerge during and after delivery; their measurement is not restricted to closing."
    ],
    "tip": "The product is an output; the improvement it enables is the benefit.",
    "id": "q-e077e868",
    "specific": true
  },
  "q-2a1f6e05": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "Leading indicators provide early evidence about a future outcome.",
    "why": [
      "Leading indicators give early signals (e.g., adoption rate); lagging indicators confirm results after the fact (e.g., cost savings realized).",
      "An indicator measured only after the benefit occurs is lagging, rather than leading.",
      "Leading describes timing and predictive usefulness; the measure can be financial or nonfinancial.",
      "Early signals of benefit achievement inform governance decisions about value, priorities, and corrective action."
    ],
    "tip": "Leading indicators provide early evidence about a future outcome.",
    "id": "q-2a1f6e05",
    "specific": true
  },
  "q-50f08d55": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "Future investment needs a valid case, even when money has already been spent.",
    "why": [
      "When the business case fails, continuing destroys value (the sunk-cost trap). Raise it to governance for a stop or pivot decision.",
      "Prior spending is a sunk cost; it does not justify additional investment when the case for future value fails.",
      "Completing outputs quietly does not repair the lost justification or provide honest information for governance.",
      "Hiding the finding prevents authorized decision-makers from reassessing whether further investment remains worthwhile."
    ],
    "tip": "Future investment needs a valid case, even when money has already been spent.",
    "id": "q-50f08d55",
    "specific": true
  },
  "q-db8e24ed": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "Feasibility asks whether the proposed project can be undertaken successfully before commitment.",
    "why": [
      "Feasibility assesses technical, economic, legal, operational, and scheduling viability to inform the go decision.",
      "A detailed schedule plans execution after the proposal is sufficiently understood; it is not the feasibility study's main purpose.",
      "Team assignments are delivery-planning decisions, while feasibility first examines whether the proposed undertaking is viable.",
      "Closure ends work; feasibility examines a proposal before committing to it."
    ],
    "tip": "Feasibility asks whether the proposed project can be undertaken successfully before commitment.",
    "id": "q-db8e24ed",
    "specific": true
  },
  "q-b3c4ba70": {
    "conceptId": "organizational-change",
    "conceptTitle": "Adoption and organizational change",
    "clue": "The final ADKAR element helps the new behavior last.",
    "why": [
      "ADKAR: Awareness, Desire, Knowledge, Ability, Reinforcement — a widely used framework for individual change adoption.",
      "Return is not the R in ADKAR; the final element reinforces adoption so it is sustained.",
      "Readiness is relevant to change, but the R element in this named model is Reinforcement.",
      "Resistance is something to understand and address; it is not the final ADKAR outcome."
    ],
    "tip": "The final ADKAR element helps the new behavior last.",
    "id": "q-b3c4ba70",
    "specific": true
  },
  "q-1e4649a9": {
    "conceptId": "organizational-change",
    "conceptTitle": "Adoption and organizational change",
    "clue": "The opening step establishes why action and change are necessary.",
    "why": [
      "Kotter's 8 steps start by establishing urgency and end by anchoring new approaches in the culture.",
      "Declaring victory belongs late in a change effort and can be premature if new behaviors are not sustained.",
      "Removing obstacles supports action after the need for change has been established.",
      "Anchoring change in culture sustains it later; the model begins by creating urgency."
    ],
    "tip": "The opening step establishes why action and change are necessary.",
    "id": "q-1e4649a9",
    "specific": true
  },
  "q-8841d8c3": {
    "conceptId": "organizational-change",
    "conceptTitle": "Adoption and organizational change",
    "clue": "People need visible business commitment to the change.",
    "why": [
      "Change-management research consistently ranks active, visible executive sponsorship as the top contributor to change success.",
      "A Gantt chart helps coordinate tasks, but it does not substitute for leaders actively supporting the change.",
      "Training may help ability, but budget alone does not create visible ownership or commitment to adoption.",
      "A tool can enable change, but leaders still need to communicate and visibly support its purpose."
    ],
    "tip": "People need visible business commitment to the change.",
    "id": "q-8841d8c3",
    "specific": true
  },
  "q-62e48c20": {
    "conceptId": "organizational-change",
    "conceptTitle": "Adoption and organizational change",
    "clue": "Resistance has causes that should be understood before choosing an intervention.",
    "why": [
      "Effective change management diagnoses and addresses the root causes of resistance rather than overriding or ignoring it.",
      "Penalties can intensify resistance without addressing the reasons people are unwilling or unable to adopt.",
      "Ignoring resistance overlooks information about adoption barriers and can undermine the expected benefits.",
      "Indefinite delay avoids the decision; understanding specific concerns enables proportionate support and adjustments."
    ],
    "tip": "Resistance has causes that should be understood before choosing an intervention.",
    "id": "q-62e48c20",
    "specific": true
  },
  "q-40324f02": {
    "conceptId": "organizational-change",
    "conceptTitle": "Adoption and organizational change",
    "clue": "Several simultaneous changes can exceed people's capacity to absorb them.",
    "why": [
      "Change saturation occurs when the volume of concurrent change exceeds people's capacity to absorb it, hurting adoption.",
      "The scenario describes many concurrent changes, rather than an absence of change.",
      "Strong reinforcement would help sustain adoption; faltering adoption amid many changes suggests overload.",
      "Low urgency concerns motivation to act; the distinctive clue here is the number of concurrent demands."
    ],
    "tip": "Several simultaneous changes can exceed people's capacity to absorb them.",
    "id": "q-40324f02",
    "specific": true
  },
  "q-5affab54": {
    "conceptId": "sustainability",
    "conceptTitle": "Sustainability and inclusion",
    "clue": "The triple bottom line combines social, environmental, and economic performance.",
    "why": [
      "The triple bottom line (social, environmental, economic) underpins sustainability and ESG thinking in project decisions.",
      "Scope, time, and cost are project delivery constraints; the triple bottom line evaluates broader sustainability dimensions.",
      "Quality, risk, and procurement are management concerns, rather than the three sustainability dimensions.",
      "Plan, do, and check are process-improvement terms, not the social, environmental, and economic performance dimensions."
    ],
    "tip": "The triple bottom line combines social, environmental, and economic performance.",
    "id": "q-5affab54",
    "specific": true
  },
  "q-d115c0f7": {
    "conceptId": "sustainability",
    "conceptTitle": "Sustainability and inclusion",
    "clue": "Reuse and recycling keep resources useful rather than treating them as waste.",
    "why": [
      "Circular-economy thinking minimizes waste and extends resource life, a growing sustainability consideration in project design.",
      "Procurement risk transfer reallocates exposure; this design choice concerns material use and environmental impact.",
      "A deliberate approved reuse objective is not inherently uncontrolled scope expansion.",
      "Reuse and recycling are not inherently violations; compliance must be evaluated against actual applicable requirements."
    ],
    "tip": "Reuse and recycling keep resources useful rather than treating them as waste.",
    "id": "q-d115c0f7",
    "specific": true
  },
  "q-e5336d46": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "Forecast reliability depends on the quality and bias of the input data.",
    "why": [
      "AI outputs are only as good as their data; the PM verifies data quality and remains accountable for decisions (human in the loop).",
      "Accepting the result without review bypasses the data and output checks needed for responsible forecasting.",
      "An AI forecast is an aid; it does not replace the project's risk-management process or accountability.",
      "Keeping stakeholders uninformed prevents appropriate transparency about how forecasts and decisions are produced."
    ],
    "tip": "Forecast reliability depends on the quality and bias of the input data.",
    "id": "q-e5336d46",
    "specific": true
  },
  "q-26c4ca7e": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "A bias concern calls for oversight and verification of the recommendation.",
    "why": [
      "AI governance and human-in-the-loop review guard against bias and errors; the PM stays accountable for the decision.",
      "Trusting the output completely leaves the identified bias risk unchecked.",
      "Banning all AI is broader than necessary; proportionate review and governance address the specific risk.",
      "Concealing the tool prevents scrutiny and does not reduce bias in its recommendations."
    ],
    "tip": "A bias concern calls for oversight and verification of the recommendation.",
    "id": "q-26c4ca7e",
    "specific": true
  },
  "q-23cb8796": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "Functional managers retain resource control in this organizational structure.",
    "why": [
      "In functional structures, functional managers hold the power and resources; the PM has little authority (often a coordinator/expeditor).",
      "High PM budget authority is more characteristic of strong project-oriented structures than a functional organization.",
      "Total project authority describes a projectized pattern, not functional managers' control of resources.",
      "A balanced split describes a balanced matrix, not the typically limited PM authority in a functional organization."
    ],
    "tip": "Functional managers retain resource control in this organizational structure.",
    "id": "q-23cb8796",
    "specific": true
  },
  "q-7539836f": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "Projectized structures organize authority around the project and its manager.",
    "why": [
      "Projectized structures organize around projects; the PM has high-to-total authority and dedicated resources.",
      "Functional-manager dominance is characteristic of a functional structure, rather than a projectized one.",
      "A part-time coordinator with little authority does not describe the project manager's position in a projectized structure.",
      "A coordinator has limited authority; projectized PMs typically have substantial control of resources and budget."
    ],
    "tip": "Projectized structures organize authority around the project and its manager.",
    "id": "q-7539836f",
    "specific": true
  },
  "q-0d408ad8": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "Strong matrix refers to the project-management side of the matrix having more authority.",
    "why": [
      "Strong matrix tilts authority toward the PM; weak matrix toward functional managers; balanced matrix shares it.",
      "Functional-manager dominance is more characteristic of a weak matrix than a strong matrix.",
      "The customer influences requirements and value, but the matrix describes internal PM versus functional authority.",
      "A PMO may influence governance, but the strong-matrix distinction specifically favors the project manager's authority."
    ],
    "tip": "Strong matrix refers to the project-management side of the matrix having more authority.",
    "id": "q-0d408ad8",
    "specific": true
  },
  "q-5fee4542": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "The support is optional rather than enforced.",
    "why": [
      "Supportive PMOs offer resources with low control; controlling PMOs require compliance; directive PMOs run the projects directly.",
      "A controlling PMO requires compliance with defined methods or standards; this PMO offers optional help.",
      "A directive PMO directly manages projects; offering optional templates and training is a supportive function.",
      "A program office coordinates program work; the described distinction concerns a PMO's level of control."
    ],
    "tip": "The support is optional rather than enforced.",
    "id": "q-5fee4542",
    "specific": true
  },
  "q-09572eb7": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "The PMO itself takes responsibility for managing projects.",
    "why": [
      "Directive PMOs assign PMs and manage projects directly — the highest degree of control among PMO types.",
      "Optional templates describe a supportive PMO, while a directive PMO directly manages the projects.",
      "Direct project management requires authority; a directive PMO is not an office with no authority.",
      "Post-project audits alone do not constitute taking direct responsibility for project management."
    ],
    "tip": "The PMO itself takes responsibility for managing projects.",
    "id": "q-09572eb7",
    "specific": true
  },
  "q-100b1ef4": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "These are conditions influencing the project rather than reusable organizational knowledge assets.",
    "why": [
      "EEFs are conditions not under the team's control that influence the project; OPAs are the organization's own plans, processes, and knowledge.",
      "OPAs include reusable processes, templates, and historical knowledge; culture and market conditions are environmental influences.",
      "Deliverables are outputs created by the project, rather than the surrounding conditions that affect it.",
      "Change requests propose modifications; existing culture, systems, and markets are contextual influences."
    ],
    "tip": "These are conditions influencing the project rather than reusable organizational knowledge assets.",
    "id": "q-100b1ef4",
    "specific": true
  },
  "q-d7401e56": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "Reusable procedures and historical knowledge are organizational assets.",
    "why": [
      "OPAs are the organization's internal assets — processes, policies, and knowledge bases — that the team can use and update.",
      "EEFs are surrounding conditions such as culture and market forces; these examples are reusable organizational knowledge and processes.",
      "Work-performance data consists of current measurements, rather than templates, procedures, and historical lessons.",
      "Risk responses are selected actions for uncertainty; the listed resources support many kinds of project work."
    ],
    "tip": "Reusable procedures and historical knowledge are organizational assets.",
    "id": "q-d7401e56",
    "specific": true
  },
  "q-254ebcf7": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "An expensive personal gift can affect, or appear to affect, impartial supplier selection.",
    "why": [
      "PMI's Code of Ethics (responsibility, respect, fairness, honesty) requires avoiding and disclosing conflicts of interest, including gifts.",
      "Quiet acceptance creates an undisclosed conflict-of-interest risk during an active selection decision.",
      "Choosing a different supplier does not remove the conflict created by taking the expensive personal gift.",
      "The first proportionate action is to decline and disclose; outside-authority reporting depends on the actual circumstances."
    ],
    "tip": "An expensive personal gift can affect, or appear to affect, impartial supplier selection.",
    "id": "q-254ebcf7",
    "specific": true
  },
  "q-90a01402": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "Falsified reports compromise truthful information used for project decisions.",
    "why": [
      "Honesty and responsibility require reporting unethical conduct through proper channels; silence or retaliation is not acceptable.",
      "Ignoring falsification allows decisions to continue relying on inaccurate information.",
      "Public humiliation does not provide a fair, appropriate process for addressing suspected misconduct.",
      "Matching false reports compounds the dishonesty and further damages the reliability of project information."
    ],
    "tip": "Falsified reports compromise truthful information used for project decisions.",
    "id": "q-90a01402",
    "specific": true
  },
  "q-49031064": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "The ethical issue concerns another party's rights in their material.",
    "why": [
      "Respecting intellectual property rights is part of PMI's ethical standard; unauthorized use is a violation regardless of cost.",
      "Respect for intellectual-property rights extends beyond whether an internal local policy mentions the conduct.",
      "Lack of payment does not by itself remove another party's rights or provide permission to use protected material.",
      "Fairness can be relevant, but this question specifically tests respect for intellectual property and others' rights."
    ],
    "tip": "The ethical issue concerns another party's rights in their material.",
    "id": "q-49031064",
    "specific": true
  },
  "q-444ac98c": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "A program coordinates related work to obtain benefits that separate management would miss.",
    "why": [
      "Programs manage related projects together to realize benefits and control not available by managing them individually.",
      "Duration does not define a program; coordinated benefits across related projects are the distinguishing feature.",
      "Programs are explicitly concerned with coordinated benefits, so excluding benefits reverses the distinction.",
      "A single deliverable is an output; a program coordinates related components to achieve broader benefits."
    ],
    "tip": "A program coordinates related work to obtain benefits that separate management would miss.",
    "id": "q-444ac98c",
    "specific": true
  },
  "q-510c7270": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "Portfolio management chooses and balances work against strategy.",
    "why": [
      "Portfolios align the mix of programs and projects with strategy — doing the right work, not just doing work right.",
      "Daily standups coordinate a delivery team; they do not select an organization's strategic mix of work.",
      "Writing stories elaborates product work, rather than deciding which initiatives deserve investment.",
      "Closing a single project is a project-management activity, not portfolio selection and prioritization."
    ],
    "tip": "Portfolio management chooses and balances work against strategy.",
    "id": "q-510c7270",
    "specific": true
  },
  "q-aecf8cd1": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "The work is continuing and repetitive rather than a temporary unique undertaking.",
    "why": [
      "Projects are temporary and produce unique results; operations are ongoing and repetitive. Projects often hand deliverables to operations.",
      "A project is temporary and creates a unique result; ongoing repetitive business work describes operations.",
      "A program coordinates related projects and other work for benefits; routine work alone is not that coordination.",
      "A portfolio groups investments for strategic management; daily repetitive execution is operations."
    ],
    "tip": "The work is continuing and repetitive rather than a temporary unique undertaking.",
    "id": "q-aecf8cd1",
    "specific": true
  },
  "q-29ca8d9b": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "The missing Talent Triangle dimension concerns interpersonal capabilities.",
    "why": [
      "The Talent Triangle covers ways of working, power (interpersonal) skills, and business acumen — reflected in PDU requirements.",
      "Agile is one approach within ways of working; it is not the third broad skill area.",
      "Procurement is a management topic, rather than the interpersonal skill dimension in the triangle.",
      "Scheduling is one technical capability within ways of working; power skills form the missing dimension."
    ],
    "tip": "The missing Talent Triangle dimension concerns interpersonal capabilities.",
    "id": "q-29ca8d9b",
    "specific": true
  },
  "q-51c56aa4": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "Funding and expected value have changed, requiring authorized reassessment.",
    "why": [
      "External shifts are escalated to governance to reassess viability and priorities; the PM does not decide alone to cancel or ignore it.",
      "Continuing the original spending pattern ignores changed conditions that may invalidate priorities or the business case.",
      "The PM should inform the authorized sponsor or governance decision rather than cancel unilaterally.",
      "Concealing exposure prevents the people with funding authority from making an informed decision."
    ],
    "tip": "Funding and expected value have changed, requiring authorized reassessment.",
    "id": "q-51c56aa4",
    "specific": true
  },
  "q-7b1eb3b5": {
    "conceptId": "project-context",
    "conceptTitle": "Project context and organizations",
    "clue": "Culture affects behavior, decision-making norms, and collaboration.",
    "why": [
      "Culture (an EEF) affects decision-making, risk appetite, communication, and collaboration norms the PM must navigate.",
      "Organizational beliefs and norms do not alter physical laws.",
      "Culture influences far more than contract selection, including communication and decisions throughout the project.",
      "Exam domain weightings are set externally; they are not shaped by one project's organizational culture."
    ],
    "tip": "Culture affects behavior, decision-making norms, and collaboration.",
    "id": "q-7b1eb3b5",
    "specific": true
  },
  "q-8610106e": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "Value must continue after the output is handed over.",
    "why": [
      "Sustainment embeds the change and keeps monitoring so benefits endure; it is typically an operations/business responsibility.",
      "Sustaining business benefits does not automatically require reopening the completed project.",
      "Continuing ownership and support can transfer to operations; the original project team need not remain forever.",
      "Ongoing measurement helps determine whether expected benefits persist and where intervention is needed."
    ],
    "tip": "Value must continue after the output is handed over.",
    "id": "q-8610106e",
    "specific": true
  },
  "q-d697ed1b": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "A control gap requires transparent assessment, correction, and a record of action.",
    "why": [
      "Compliance gaps are assessed and remediated through proper channels with documentation; concealment compounds the violation.",
      "Disagreement alone does not address the identified gap; assess evidence and correct applicable control weaknesses.",
      "Waiting for enforcement leaves the known exposure unresolved rather than managing it proactively.",
      "Quietly altering records conceals the problem and does not establish a truthful corrective-action history."
    ],
    "tip": "A control gap requires transparent assessment, correction, and a record of action.",
    "id": "q-d697ed1b",
    "specific": true
  },
  "q-b2d3718b": {
    "conceptId": "organizational-change",
    "conceptTitle": "Adoption and organizational change",
    "clue": "Readiness concerns whether impacted people can and will adopt the change.",
    "why": [
      "Readiness assessments gauge awareness, capability, and willingness so adoption activities can be targeted where resistance is highest.",
      "Budget measures available or planned spending; it does not measure the impacted groups' preparedness to adopt.",
      "The critical path describes schedule logic rather than people's awareness, capability, or adoption preparedness.",
      "Defect rate measures product or process quality, not stakeholder readiness for organizational change."
    ],
    "tip": "Readiness concerns whether impacted people can and will adopt the change.",
    "id": "q-b2d3718b",
    "specific": true
  },
  "q-2e48cbfc": {
    "conceptId": "organizational-change",
    "conceptTitle": "Adoption and organizational change",
    "clue": "Reinforcement helps new behavior continue after initial adoption.",
    "why": [
      "Reinforcement (recognition, feedback, correcting backsliding) sustains adoption so the change sticks after go-live.",
      "Launching change creates initial awareness and action; reinforcement supports the behavior after that beginning.",
      "Stakeholder identification determines who is affected; reinforcement sustains the new way of working.",
      "The business case establishes investment justification; reinforcement maintains the adopted change over time."
    ],
    "tip": "Reinforcement helps new behavior continue after initial adoption.",
    "id": "q-2e48cbfc",
    "specific": true
  },
  "q-bd798843": {
    "conceptId": "sustainability",
    "conceptTitle": "Sustainability and inclusion",
    "clue": "The design includes people who might otherwise face barriers to using the product.",
    "why": [
      "Designing for inclusion and equitable access is part of social responsibility and increasingly an ESG and sometimes compliance consideration.",
      "Accessibility can improve the reach and value of an agreed product; it is not inherently a scope reduction.",
      "Inclusive design does not excuse compliance obligations; applicable requirements still need to be met.",
      "Accessibility may be an explicit requirement or value objective, so it is not automatically an unapproved extra."
    ],
    "tip": "The design includes people who might otherwise face barriers to using the product.",
    "id": "q-bd798843",
    "specific": true
  },
  "q-78a232ff": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "A story needs a way to verify whether its intended outcome is achieved.",
    "why": [
      "INVEST = Independent, Negotiable, Valuable, Estimable, Small, Testable — a checklist for well-formed backlog items.",
      "A story can describe user value without prescribing technical design; the T in INVEST is Testable.",
      "Tracking progress is useful, but the named criterion concerns verifying the story's behavior or outcome.",
      "A story should be small enough to plan, but Timed is not the T in the INVEST mnemonic."
    ],
    "tip": "A story needs a way to verify whether its intended outcome is achieved.",
    "id": "q-78a232ff",
    "specific": true
  },
  "q-64d5eed1": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "The format connects a user role, goal, and reason for value.",
    "why": [
      "The role-goal-benefit template keeps stories focused on user value. 'Given/when/then' is for acceptance criteria.",
      "Given-when-then is a common acceptance-criteria format, rather than the usual role-goal-benefit story format.",
      "Must-should-could-won't are MoSCoW priority categories, not the structure of a user story.",
      "Do-check-act belongs to improvement-cycle language; it does not express the user's role, need, and benefit."
    ],
    "tip": "The format connects a user role, goal, and reason for value.",
    "id": "q-64d5eed1",
    "specific": true
  },
  "q-556002bc": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "An MVP limits the release to useful value and learning.",
    "why": [
      "An MVP delivers enough value to real users to validate assumptions and learn, guiding further investment.",
      "Delivering the entire final product removes the minimal scope and early-learning purpose of an MVP.",
      "An MVP need not be disposable; it can be a usable release that tests assumptions and generates learning.",
      "An MVP supports early learning, rather than being defined as the final increment before a full launch."
    ],
    "tip": "An MVP limits the release to useful value and learning.",
    "id": "q-556002bc",
    "specific": true
  },
  "q-59027fe1": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "The task is time-boxed research to reduce a specific uncertainty.",
    "why": [
      "A spike is a short, time-boxed investigation (technical or functional) to gain the knowledge needed to estimate or proceed.",
      "An epic is a large body of work; it does not specifically identify a focused research time box.",
      "A theme groups related concerns or work, rather than a bounded research task.",
      "A Sprint Goal states the iteration's objective; a spike is a research task that can help reduce uncertainty."
    ],
    "tip": "The task is time-boxed research to reduce a specific uncertainty.",
    "id": "q-59027fe1",
    "specific": true
  },
  "q-476792d8": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "Ready concerns enough shared understanding to select work, rather than its completion.",
    "why": [
      "DoR sets the entry criteria (clear, estimated, testable) for work to be sprint-ready; DoD sets the exit criteria for 'done'.",
      "Completion is associated with Done; Ready means the item is sufficiently understood to begin work.",
      "Deployment is a delivery state after work, rather than a condition for deciding whether an item can be selected.",
      "Readiness clarifies an item for work; it does not require removing that item from the product backlog."
    ],
    "tip": "Ready concerns enough shared understanding to select work, rather than its completion.",
    "id": "q-476792d8",
    "specific": true
  },
  "q-a03a415b": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "The work is too large for one iteration and needs decomposition.",
    "why": [
      "Epics are large items decomposed into smaller stories; related epics/stories may roll up into themes or features.",
      "A spike is focused research to reduce uncertainty, rather than a large feature split into smaller stories.",
      "An increment is usable completed product work; the scenario describes a large item still needing decomposition.",
      "An impediment blocks progress; size alone identifies an epic that can be broken into smaller items."
    ],
    "tip": "The work is too large for one iteration and needs decomposition.",
    "id": "q-a03a415b",
    "specific": true
  },
  "q-f10abb91": {
    "conceptId": "communication",
    "conceptTitle": "Communication and collaboration",
    "clue": "The task board makes information visible and easy to inspect.",
    "why": [
      "Information radiators provide highly visible, always-current status, supporting transparency and self-organization.",
      "An information radiator exposes useful status openly; hiding it would reverse its purpose.",
      "Visible information reduces some reporting needs but does not replace every necessary discussion or planning event.",
      "The value comes from transparency and shared understanding, rather than a universal contractual requirement."
    ],
    "tip": "The task board makes information visible and easy to inspect.",
    "id": "q-f10abb91",
    "specific": true
  },
  "q-5fc7e7b9": {
    "conceptId": "agile-flow",
    "conceptTitle": "Agile delivery and flow",
    "clue": "A widening stage band means more work is entering than leaving that stage.",
    "why": [
      "A growing band signals a bottleneck — arrivals exceed completions at that stage; the team should swarm to clear it.",
      "Perfect flow would not produce an increasing accumulation of unfinished work in a particular stage.",
      "Scope reduction concerns less overall requested work, not a growing queue within one workflow stage.",
      "Completed work is the finished band; a widening active-stage band shows items accumulating before completion."
    ],
    "tip": "A widening stage band means more work is entering than leaving that stage.",
    "id": "q-5fc7e7b9",
    "specific": true
  },
  "q-1e701168": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "Frequent mid-sprint interruptions threaten focus and bypass backlog ordering.",
    "why": [
      "Protecting the team from disruption and channeling new work through the PO/backlog is core servant-leadership behavior.",
      "Allowing repeated interruptions leaves the focus problem unaddressed and encourages bypassing the normal request path.",
      "Immediate compliance accepts work without the Product Owner's value ordering or review of the Sprint Goal.",
      "Removing a stakeholder is disproportionate; establish an effective request path and protect the team's focus."
    ],
    "tip": "Frequent mid-sprint interruptions threaten focus and bypass backlog ordering.",
    "id": "q-1e701168",
    "specific": true
  },
  "q-462f955c": {
    "conceptId": "hybrid-tailoring",
    "conceptTitle": "Tailoring the approach",
    "clue": "The named approaches coordinate agile work across multiple teams.",
    "why": [
      "These coordinate multiple teams on large efforts. LeSS keeps one PO and one backlog; SAFe adds program/portfolio layers; Scrum of Scrums is the simplest.",
      "These approaches address multi-team coordination; they are not techniques for estimating individual items.",
      "A contract allocates commercial terms and obligations, rather than defining how several agile teams coordinate.",
      "Quality tools examine conformance or causes; the named approaches deal with agile delivery at scale."
    ],
    "tip": "The named approaches coordinate agile work across multiple teams.",
    "id": "q-462f955c",
    "specific": true
  },
  "q-9df269d4": {
    "conceptId": "agile-flow",
    "conceptTitle": "Agile delivery and flow",
    "clue": "Lean emphasizes customer value and reducing activities that do not contribute to it.",
    "why": [
      "Lean focuses on eliminating waste, amplifying learning, delivering fast, and optimizing the whole.",
      "Documentation is valuable when it supports outcomes; maximizing it regardless of purpose can create waste.",
      "Fixing scope early is not Lean's central aim; the focus is value and effective flow.",
      "Buffers may sometimes be useful, but adding them everywhere is not the core principle of eliminating waste."
    ],
    "tip": "Lean emphasizes customer value and reducing activities that do not contribute to it.",
    "id": "q-9df269d4",
    "specific": true
  },
  "q-071e10d0": {
    "conceptId": "agile-flow",
    "conceptTitle": "Agile delivery and flow",
    "clue": "Several observations reveal a delivery pattern more reliably than one data point.",
    "why": [
      "Trends in throughput or velocity across iterations forecast delivery better than any single data point or activity measure.",
      "One sprint can be unusual; trends across multiple periods provide a more useful forecasting basis.",
      "Lines of code measure output volume without showing completed customer-value items or delivery flow.",
      "Logged hours show effort, which does not necessarily indicate how much usable work the team completes."
    ],
    "tip": "Several observations reveal a delivery pattern more reliably than one data point.",
    "id": "q-071e10d0",
    "specific": true
  },
  "q-16d09445": {
    "conceptId": "hybrid-tailoring",
    "conceptTitle": "Tailoring the approach",
    "clue": "Specific agile practices can support a broader predictive project approach.",
    "why": [
      "Borrowing practices that fit the context is tailoring; hybrid approaches blend predictive and agile elements deliberately.",
      "Tailoring can combine useful practices when they fit the project's context and governance.",
      "A visual board and daily meeting alone do not establish all Scrum accountabilities, events, and commitments.",
      "The scenario gives no compliance conflict; mixing suitable practices is not inherently a regulatory risk."
    ],
    "tip": "Specific agile practices can support a broader predictive project approach.",
    "id": "q-16d09445",
    "specific": true
  },
  "q-609fe88f": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "The blocker is access to timely product-value decisions.",
    "why": [
      "An engaged, available PO is essential; the Scrum Master addresses the impediment, arranging availability or an empowered proxy.",
      "Developer guesses can misorder value; secure timely access to the accountable Product Owner or an empowered support arrangement.",
      "Cancelling iterations does not address the underlying problem of unavailable product decision-making.",
      "Replacing the delivery team misses the stated cause: the Product Owner is unavailable for decisions."
    ],
    "tip": "The blocker is access to timely product-value decisions.",
    "id": "q-609fe88f",
    "specific": true
  },
  "q-6f8204b4": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "Refactoring improves internal design while preserving externally visible behavior.",
    "why": [
      "Refactoring improves maintainability and reduces technical debt while preserving behavior — a core XP practice.",
      "Adding features changes behavior or capability; refactoring improves how existing behavior is implemented.",
      "Rewriting requirements changes what is requested; refactoring improves the code's structure without that change.",
      "Removing tests reduces safeguards and is not the definition of improving code structure while preserving behavior."
    ],
    "tip": "Refactoring improves internal design while preserving externally visible behavior.",
    "id": "q-6f8204b4",
    "specific": true
  },
  "q-038643a5": {
    "conceptId": "quality-acceptance",
    "conceptTitle": "Quality and acceptance",
    "clue": "The debt is the future maintenance or rework cost caused by today's shortcuts.",
    "why": [
      "Technical debt is the implied cost of rework from choosing a quick solution now; it should be tracked and paid down.",
      "Vendor invoices are financial obligations; technical debt refers to future effort created by design or implementation shortcuts.",
      "Contingency reserve funds identified risk responses; it is not the accumulated cost of technical shortcuts.",
      "Overtime owed is a labor or financial matter, rather than future cost embedded in the product's design."
    ],
    "tip": "The debt is the future maintenance or rework cost caused by today's shortcuts.",
    "id": "q-038643a5",
    "specific": true
  },
  "q-a5e911d7": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "The product backlog evolves and is ordered by value and other relevant considerations.",
    "why": [
      "The product backlog is a living, ordered list owned by the PO; it is refined and reprioritized continuously.",
      "An emergent backlog changes as learning occurs; it is not a fixed fully elaborated requirements document.",
      "Only the selected iteration work belongs in the Sprint Backlog; the Product Backlog covers the wider product.",
      "Impediments are blockers to resolve, rather than the ordered list of potential product improvements."
    ],
    "tip": "The product backlog evolves and is ordered by value and other relevant considerations.",
    "id": "q-a5e911d7",
    "specific": true
  },
  "q-4278657d": {
    "conceptId": "agile-prioritization",
    "conceptTitle": "Agile planning and value",
    "clue": "Cancellation is tied to an obsolete Sprint Goal, not ordinary delivery difficulty.",
    "why": [
      "Only the Product Owner can cancel a sprint, and only if the Sprint Goal becomes obsolete — a rare event.",
      "Being behind calls for inspection and adaptation; it does not by itself make the Sprint Goal obsolete.",
      "A request alone does not justify cancellation; the Product Owner considers whether the Sprint Goal is obsolete.",
      "A bug may require replanning or repair, but it does not automatically invalidate the Sprint Goal."
    ],
    "tip": "Cancellation is tied to an obsolete Sprint Goal, not ordinary delivery difficulty.",
    "id": "q-4278657d",
    "specific": true
  },
  "q-4f9a3afa": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "Different estimates reveal assumptions that the team can discuss.",
    "why": [
      "Planning poker uses relative sizing and discussion to align understanding and expose hidden assumptions, improving estimates.",
      "Relative sizing supports shared understanding and forecasting; it does not promise exact hour-by-hour certainty.",
      "The Product Owner still provides value and requirement context; planning poker does not remove that accountability.",
      "A retrospective improves ways of working, while planning poker develops shared estimates for future work."
    ],
    "tip": "Different estimates reveal assumptions that the team can discuss.",
    "id": "q-4f9a3afa",
    "specific": true
  },
  "q-1b56ca82": {
    "conceptId": "conflict",
    "conceptTitle": "Conflict and collaboration",
    "clue": "Facilitation should make it possible for every team member to contribute.",
    "why": [
      "Facilitation techniques (round-robin, timeboxing, direct invitations) ensure balanced input and protect team collaboration.",
      "Letting one person lead every discussion continues the imbalance and loses other members' information.",
      "Immediate removal is disproportionate before the facilitator has established fair participation.",
      "Ignoring the imbalance allows quieter voices and alternative information to remain unheard."
    ],
    "tip": "Facilitation should make it possible for every team member to contribute.",
    "id": "q-1b56ca82",
    "specific": true
  },
  "q-1d019b3f": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "Total float can be calculated as LS minus ES or LF minus EF.",
    "why": [
      "Total float = LS − ES = 8 − 5 = 3 (equivalently LF − EF = 12 − 9 = 3).",
      "Both late dates exceed their corresponding early dates by three, so the activity has available float rather than zero.",
      "Four is EF minus ES, which describes duration under this convention, not the activity's total float.",
      "Seven does not match either LS minus ES or LF minus EF; both calculations give three."
    ],
    "tip": "Total float can be calculated as LS minus ES or LF minus EF.",
    "id": "q-1d019b3f",
    "specific": true
  },
  "q-5d57667a": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "Cost variance compares earned value with actual cost: 50,000 minus 55,000.",
    "why": [
      "CV = EV − AC = 50,000 − 55,000 = −$5,000 — negative means over budget.",
      "Earned value is below actual cost, so the negative variance indicates over budget rather than under budget.",
      "Actual cost is 5,000 above earned value; the project is not on budget for the work completed.",
      "10,000 compares EV with PV and is the schedule variance; cost variance uses AC and equals negative 5,000."
    ],
    "tip": "Cost variance compares earned value with actual cost: 50,000 minus 55,000.",
    "id": "q-5d57667a",
    "specific": true
  },
  "q-808e8e92": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "Schedule variance uses EV minus PV, not actual spending.",
    "why": [
      "SV = EV − PV = 50,000 − 60,000 = −$10,000 — negative means behind schedule.",
      "Earned value is less than planned value, so the variance is negative rather than positive.",
      "Negative 5,000 is the cost variance EV minus AC; schedule variance compares EV with PV.",
      "Earned value of 50,000 differs from planned value of 60,000, so schedule variance cannot be zero."
    ],
    "tip": "Schedule variance uses EV minus PV, not actual spending.",
    "id": "q-808e8e92",
    "specific": true
  },
  "q-d7276267": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "CPI is 80,000 divided by 90,000; divide BAC by that efficiency.",
    "why": [
      "CPI = 80/90 = 0.889; EAC = BAC/CPI = 200,000/0.889 ≈ $225,000.",
      "210,000 does not follow BAC divided by the current CPI, which is about 0.889.",
      "190,000 would forecast below the original budget even though current cost efficiency is below one.",
      "200,000 assumes no overall overrun; continuing the current below-one CPI forecasts a higher final cost."
    ],
    "tip": "CPI is 80,000 divided by 90,000; divide BAC by that efficiency.",
    "id": "q-d7276267",
    "specific": true
  },
  "q-9c7a0d1f": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "EMV weights the loss by its probability: 0.40 times negative 50,000.",
    "why": [
      "EMV = 0.40 × (−50,000) + 0.60 × 0 = −$20,000.",
      "50,000 is the full loss if the event occurs; EMV weights that loss by its 40 percent likelihood.",
      "30,000 applies the 60 percent no-loss probability to the loss instead of weighting the actual loss outcome.",
      "The outcome is a loss, so its expected monetary value is negative rather than positive."
    ],
    "tip": "EMV weights the loss by its probability: 0.40 times negative 50,000.",
    "id": "q-9c7a0d1f",
    "specific": true
  },
  "q-8567da4f": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "A triangular estimate weights all three values equally.",
    "why": [
      "Triangular = (O + M + P)/3 = (6 + 9 + 18)/3 = 33/3 = 11. (Beta/PERT would weight M by 4.)",
      "10.5 applies the PERT weighted formula; the question explicitly asks for the simple triangular average.",
      "Nine is the most likely value alone; the triangular estimate also includes optimistic and pessimistic values.",
      "The three values sum to 33, and dividing by three gives 11 rather than 12."
    ],
    "tip": "A triangular estimate weights all three values equally.",
    "id": "q-8567da4f",
    "specific": true
  },
  "q-a5f86610": {
    "conceptId": "communication",
    "conceptTitle": "Communication and collaboration",
    "clue": "The team now has eight members; calculate eight times seven divided by two.",
    "why": [
      "n = 8, channels = n(n−1)/2 = 8×7/2 = 28.",
      "21 is the total for seven people; this team has grown from six to eight.",
      "15 is the original six-person total; it omits the channels introduced by the two new members.",
      "36 is the total for nine people; the scenario's new team size is eight."
    ],
    "tip": "The team now has eight members; calculate eight times seven divided by two.",
    "id": "q-a5f86610",
    "specific": true
  },
  "q-c00054d6": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "Remaining budget efficiency is remaining work divided by remaining available funds.",
    "why": [
      "TCPI = (BAC − EV)/(BAC − AC) = (500k − 200k)/(500k − 250k) = 300k/250k = 1.2.",
      "0.8 is the historical CPI, EV divided by AC; TCPI asks for the efficiency still required.",
      "An efficiency of one would not recover the current overspending; the remaining work exceeds the remaining budget.",
      "1.25 is not the ratio of remaining work 300,000 to remaining funds 250,000, which equals 1.2."
    ],
    "tip": "Remaining budget efficiency is remaining work divided by remaining available funds.",
    "id": "q-c00054d6",
    "specific": true
  },
  "q-38faf6f4": {
    "conceptId": "agile-flow",
    "conceptTitle": "Agile delivery and flow",
    "clue": "Cycle time equals average work in progress divided by throughput.",
    "why": [
      "Cycle time = WIP / throughput = 30 / 10 = 3 weeks (Little's Law).",
      "Multiplying WIP by throughput reverses the relationship; divide 30 items by 10 items per week.",
      "0.33 comes from throughput divided by WIP; cycle time requires the inverse ratio.",
      "Adding WIP and throughput mixes quantities and does not calculate a time measure."
    ],
    "tip": "Cycle time equals average work in progress divided by throughput.",
    "id": "q-38faf6f4",
    "specific": true
  },
  "q-e3167f74": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "The stated decision rule is NPV alone, where the larger present value wins.",
    "why": [
      "NPV already accounts for the time value of money; the higher NPV (B) is preferred when selecting on NPV.",
      "Project A's shorter payback does not outweigh B's higher NPV when the question restricts the decision to NPV.",
      "Both projects have positive NPV; the given rule selects the higher value rather than rejecting both.",
      "Payback is a separate selection measure; using it would ignore the explicit NPV-only condition."
    ],
    "tip": "The stated decision rule is NPV alone, where the larger present value wins.",
    "id": "q-e3167f74",
    "specific": true
  },
  "q-12ad67a2": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "BCR is benefits divided by cost: 300,000 divided by 200,000.",
    "why": [
      "BCR = benefits / costs = 300,000 / 200,000 = 1.5. Above 1.0 means benefits exceed costs.",
      "0.67 reverses the ratio to cost divided by benefits; BCR puts benefits in the numerator.",
      "Two does not equal the stated benefits of 300,000 divided by cost of 200,000.",
      "One would mean benefits equal costs; here benefits are 50 percent higher than costs."
    ],
    "tip": "BCR is benefits divided by cost: 300,000 divided by 200,000.",
    "id": "q-12ad67a2",
    "specific": true
  },
  "q-9137a474": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "The question compares the return-rate measure itself, with other factors held comparable.",
    "why": [
      "A higher IRR indicates a more attractive return; it is the discount rate at which NPV equals zero.",
      "A lower IRR represents a lower return rate, so it does not win a comparison based on IRR alone.",
      "An IRR near zero indicates little return, rather than the preferred higher return rate.",
      "A negative IRR indicates a negative return rate and would not be preferred under this stated comparison."
    ],
    "tip": "The question compares the return-rate measure itself, with other factors held comparable.",
    "id": "q-9137a474",
    "specific": true
  },
  "q-35364600": {
    "conceptId": "schedule",
    "conceptTitle": "Schedule logic and resources",
    "clue": "Free float concerns the successor's early start, which can tolerate one day.",
    "why": [
      "Free float concerns the successor's early start (1 day here); total float concerns the project finish (2 days).",
      "Two days is the total float protecting the project finish; the successor can tolerate only one day.",
      "Free and total float are not added; they refer to different protected dates.",
      "The successor can tolerate a one-day delay, so free float is not zero."
    ],
    "tip": "Free float concerns the successor's early start, which can tolerate one day.",
    "id": "q-35364600",
    "specific": true
  },
  "q-4912a1b9": {
    "conceptId": "risk-issue",
    "conceptTitle": "Risk and issue decisions",
    "clue": "The scenario asks for the combined expected loss of three identified risks.",
    "why": [
      "Summing the expected monetary values (4k + 6k + 5k) gives roughly $15,000 of contingency for the identified risks.",
      "6,000 covers only the largest single EMV and omits the other two identified expected losses.",
      "5,000 is only one of the three risks; sum the given EMVs to estimate the combined reserve.",
      "45,000 triples the combined expected loss; the stated EMVs already incorporate their probability weights."
    ],
    "tip": "The scenario asks for the combined expected loss of three identified risks.",
    "id": "q-4912a1b9",
    "specific": true
  },
  "q-dcfb0cf3": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "Percent complete is earned value divided by the total approved budget.",
    "why": [
      "Percent complete = EV / BAC = 120,000 / 400,000 = 30% of the total budgeted work.",
      "120,000 divided by 400,000 equals 0.30; 40 percent would imply 160,000 of earned value.",
      "Twelve percent confuses the monetary digits with the ratio of earned value to the total budget.",
      "Three percent is off by a factor of ten; 0.30 as a percentage is 30 percent."
    ],
    "tip": "Percent complete is earned value divided by the total approved budget.",
    "id": "q-dcfb0cf3",
    "specific": true
  },
  "q-0bddc4ad": {
    "conceptId": "earned-value",
    "conceptTitle": "Earned value and cost control",
    "clue": "CPI of one means on budget; SPI below one means behind schedule.",
    "why": [
      "CPI = 1.0 means exactly on budget; SPI = 0.9 (below 1.0) means behind schedule.",
      "CPI is exactly one, so the earned work is on budget rather than over budget.",
      "Neither index supports this choice: CPI one is on budget and SPI 0.9 indicates behind schedule.",
      "The budget interpretation is correct, but SPI below one signals behind rather than ahead of schedule."
    ],
    "tip": "CPI of one means on budget; SPI below one means behind schedule.",
    "id": "q-0bddc4ad",
    "specific": true
  },
  "q-beab62a8": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "The estimate relies on comparison with a similar completed project.",
    "why": [
      "Analogous (top-down) estimating uses historical data from similar work; it is fast and low-cost but less accurate than bottom-up or parametric.",
      "Summing detailed work packages is bottom-up estimating, which usually requires more detail and effort.",
      "A unit rate multiplied by quantity is parametric estimating, rather than a comparison with a similar project.",
      "Simulation models many possible outcomes; an analogous estimate uses relevant past experience as its reference."
    ],
    "tip": "The estimate relies on comparison with a similar completed project.",
    "id": "q-beab62a8",
    "specific": true
  },
  "q-2ae02e8b": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "A definitive estimate reflects substantial detail and a narrower range than an early estimate.",
    "why": [
      "Definitive estimates are the most precise (−5% to +10%); ROM is widest (−25% to +75%).",
      "Negative 25 to positive 75 percent is the rough-order range used in this bank, not a definitive estimate.",
      "Negative 10 to positive 25 percent is the broader budget range used here, rather than the definitive range.",
      "A symmetric 50 percent range is much wider than the expected control-grade range in this question."
    ],
    "tip": "A definitive estimate reflects substantial detail and a narrower range than an early estimate.",
    "id": "q-2ae02e8b",
    "specific": true
  },
  "q-6c79073e": {
    "conceptId": "procurement",
    "conceptTitle": "Procurement and contracts",
    "clue": "The buyer reimburses eligible actual costs under the contract's terms.",
    "why": [
      "In cost-reimbursable contracts the buyer carries most cost risk, reimbursing the seller's allowable costs plus a fee. (In a firm-fixed-price contract the seller would carry it.)",
      "Unlike a fixed-price arrangement, the seller is generally reimbursed for allowable actual costs under a cost-reimbursable contract.",
      "An insurer pays only under applicable insurance coverage; cost reimbursement normally allocates cost exposure to the buyer.",
      "The PM is not personally the contracting buyer and does not personally reimburse the seller's eligible costs."
    ],
    "tip": "The buyer reimburses eligible actual costs under the contract's terms.",
    "id": "q-6c79073e",
    "specific": true
  },
  "q-16c231bd": {
    "conceptId": "estimation",
    "conceptTitle": "Estimation and uncertainty",
    "clue": "The three comparable sprint observations average 22 points.",
    "why": [
      "Averaging recent velocities (~22) gives a stable basis for forecasting how much the team can take on.",
      "The highest sprint alone can make the forecast optimistic; the available average uses all three observations.",
      "The lowest alone is a conservative observation, but the question asks for a reasonable forecast from the full set.",
      "66 is the total across three sprints, not the average expected in one sprint."
    ],
    "tip": "The three comparable sprint observations average 22 points.",
    "id": "q-16c231bd",
    "specific": true
  },
  "q-9432f58b": {
    "conceptId": "conflict",
    "conceptTitle": "Conflict and collaboration",
    "clue": "A private conversation can reveal the cause before choosing a response.",
    "why": [
      "Address performance issues privately first to understand root causes before escalating; public call-outs damage trust.",
      "Public criticism can embarrass the member without establishing why the repeated lateness is occurring.",
      "Removing them from meetings avoids the symptom and can reduce coordination before the cause is understood.",
      "Immediate HR escalation is premature before a private assessment of the behavior and its underlying cause."
    ],
    "tip": "A private conversation can reveal the cause before choosing a response.",
    "id": "q-9432f58b",
    "specific": true
  },
  "q-9fbcca06": {
    "conceptId": "leadership",
    "conceptTitle": "Leadership and team development",
    "clue": "An immediate safety threat leaves no time for a consensus process.",
    "why": [
      "A directive style is appropriate briefly in genuine emergencies, especially where safety is at stake; return to collaboration afterward.",
      "A laissez-faire response provides too little immediate direction for the urgent safety decision described.",
      "Consensus takes time the scenario explicitly says is unavailable; decisive temporary direction protects people.",
      "Hands-off delegation leaves an urgent safety call unresolved when immediate leadership is required."
    ],
    "tip": "An immediate safety threat leaves no time for a consensus process.",
    "id": "q-9fbcca06",
    "specific": true
  },
  "q-9de99fe7": {
    "conceptId": "ethics-ai",
    "conceptTitle": "Ethics, compliance and AI",
    "clue": "Regulatory requirements shape design and delivery decisions from the beginning.",
    "why": [
      "Compliance requirements are identified early and built into scope, design, and quality — retrofitting them later is costly and risky.",
      "Waiting for a prototype can embed design decisions that fail requirements already applicable to the medical device.",
      "Closing is far too late to discover requirements that should shape the device and its verification.",
      "Compliance obligations apply whether or not an audit occurs; proactive identification supports appropriate planning and design."
    ],
    "tip": "Regulatory requirements shape design and delivery decisions from the beginning.",
    "id": "q-9de99fe7",
    "specific": true
  },
  "q-e4ec98a3": {
    "conceptId": "business-value",
    "conceptTitle": "Business value and benefits",
    "clue": "The receiving operation needs the product, knowledge, and support to use it successfully.",
    "why": [
      "Effective transition hands the product, documentation, and knowledge to operations/support so benefits can be realized and sustained.",
      "Archiving alone does not prepare operations to run, maintain, or gain value from the deliverable.",
      "Keeping knowledge within a disbanding project team prevents the receiving operation from using and sustaining the output.",
      "Deleting knowledge removes information operations may need for safe use, support, maintenance, and benefit realization."
    ],
    "tip": "The receiving operation needs the product, knowledge, and support to use it successfully.",
    "id": "q-e4ec98a3",
    "specific": true
  }
};
  function id(question){
    const stem = String(typeof question === 'string' ? question : (question && question.q) || '').trim().replace(/\s+/g,' ');
    let hash = 2166136261;
    for(let i=0;i<stem.length;i++) { hash ^= stem.charCodeAt(i); hash = Math.imul(hash,16777619); }
    return 'q-' + (hash >>> 0).toString(16).padStart(8,'0');
  }
  function get(question){
    const key = id(question);
    const item = DATA[key];
    if(item){
      const result = Object.assign({},item,{why:item.why.slice()});
      // This original item included a second algebraically valid EV identity.
      // Support the corrected distractor without falsely teaching that AC*CPI is invalid.
      if(question && /Which expression correctly defines earned value/.test(question.q || '')) {
        const evOption = (question.o || [])[1] || '';
        if(/AC\s*[÷/]\s*CPI/.test(evOption)) result.why[1]='Dividing actual cost by CPI does not calculate EV. Since CPI = EV/AC, multiplying AC by CPI gives EV.';
      }
      // These original alternatives were also non-negotiable obligations.
      // Give exact feedback if the bank uses the clarified, discretionary alternatives.
      if(question && /fixed regulatory deadline/.test(question.q || '')) {
        const alternatives = question.o || [];
        if(/optional features/i.test(alternatives[1] || '')) result.why[1]='Optional features can be reprioritized or phased to meet a mandatory compliance date.';
        if(/resource allocation/i.test(alternatives[2] || '')) result.why[2]='Resource allocation can be adjusted through the agreed process while preserving the mandatory date.';
        if(/delivery approach/i.test(alternatives[3] || '')) result.why[3]='The delivery approach can be tailored to meet obligations; the fixed external deadline remains a constraint.';
      }
      return result;
    }
    const options = question && question.o || [];
    const correct = question && Number.isInteger(question.a) ? question.a : -1;
    return {id:key,conceptId:'general',conceptTitle:'Project management judgment',clue:'Review the scenario’s approach, constraints, and requested next action.',why:options.map((_,i)=>i===correct ? String(question.e || 'Review the deciding clue in the explanation.') : 'Use the explanation to compare this option’s timing, authority, and fit to the scenario.'),tip:String(question && question.e || 'Review the deciding clue before trying a fresh scenario.'),specific:false};
  }
  global.QuizInsights = Object.freeze({version:1,coverage:Object.keys(DATA).length,id:id,get:get});
})(typeof window !== 'undefined' ? window : globalThis);
