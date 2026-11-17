// Acronyms and abbreviations used in Outdoor Emergency Care study.
// The explanations are original summaries written for this site, not text from the OEC textbook.

export type Acronym = {
  term: string;
  stands: string;
  meaning: string;
  chapter: string;
};

export const acronyms: Acronym[] = [
  // 1. Introduction
  { term: "NSP", stands: "National Ski Patrol", meaning: "The organization that publishes the OEC program and certifies ski patrollers.", chapter: "1" },
  { term: "OEC", stands: "Outdoor Emergency Care", meaning: "NSP's emergency care course and certification for rescuers working in outdoor settings.", chapter: "1" },
  { term: "OET", stands: "Outdoor Emergency Transportation", meaning: "NSP training in moving patients over snow, such as toboggan handling.", chapter: "1" },
  { term: "CPR", stands: "Cardiopulmonary resuscitation", meaning: "Chest compressions and rescue breaths given to someone in cardiac arrest.", chapter: "1" },
  { term: "DNR", stands: "Do not resuscitate", meaning: "A legal order saying a patient does not want CPR if their heart or breathing stops.", chapter: "1" },
  { term: "POLST", stands: "Physician orders for life-sustaining treatment", meaning: "A signed medical order listing which life-sustaining treatments a seriously ill patient wants.", chapter: "1" },
  { term: "HIPAA", stands: "Health Insurance Portability and Accountability Act", meaning: "U.S. law that protects the privacy of a patient's health information.", chapter: "1" },

  // 2. Emergency systems
  { term: "EMS", stands: "Emergency medical services", meaning: "The whole system that gets care to a sick or injured person, from dispatch to the hospital.", chapter: "2" },
  { term: "EMR", stands: "Emergency medical responder", meaning: "The entry level of EMS certification, focused on immediate lifesaving care.", chapter: "2" },
  { term: "EMT", stands: "Emergency medical technician", meaning: "The basic ambulance-level provider. OEC is built to be comparable to this level.", chapter: "2" },
  { term: "AEMT", stands: "Advanced emergency medical technician", meaning: "An EMT with added skills such as IV access and some medications.", chapter: "2" },
  { term: "ALS", stands: "Advanced life support", meaning: "Care that goes beyond basic skills, such as cardiac drugs and advanced airways, usually from paramedics.", chapter: "2" },
  { term: "BLS", stands: "Basic life support", meaning: "Noninvasive care such as CPR, AED use, bleeding control, and oxygen.", chapter: "2" },
  { term: "NREMT", stands: "National Registry of Emergency Medical Technicians", meaning: "The national body that tests and registers EMS providers.", chapter: "2" },
  { term: "PSAP", stands: "Public safety answering point", meaning: "The dispatch center that answers 911 calls.", chapter: "2" },
  { term: "ED", stands: "Emergency department", meaning: "The hospital unit that receives emergency patients.", chapter: "2" },

  // 3. Rescue basics
  { term: "PPE", stands: "Personal protective equipment", meaning: "Gloves, masks, eye protection, and gowns that protect a rescuer from hazards and body fluids.", chapter: "3" },
  { term: "BSI", stands: "Body substance isolation", meaning: "The practice of treating all body fluids as potentially infectious.", chapter: "3" },
  { term: "HBV", stands: "Hepatitis B virus", meaning: "A bloodborne virus that attacks the liver. A vaccine is available.", chapter: "3" },
  { term: "HCV", stands: "Hepatitis C virus", meaning: "A bloodborne virus that attacks the liver. There is no vaccine.", chapter: "3" },
  { term: "HIV", stands: "Human immunodeficiency virus", meaning: "A bloodborne virus that weakens the immune system and can lead to AIDS.", chapter: "3" },
  { term: "TB", stands: "Tuberculosis", meaning: "A bacterial lung infection spread through the air.", chapter: "3" },
  { term: "MRSA", stands: "Methicillin-resistant Staphylococcus aureus", meaning: "A staph infection that common antibiotics do not kill.", chapter: "3" },
  { term: "CISM", stands: "Critical incident stress management", meaning: "A structured way to help rescuers cope after a traumatic call.", chapter: "3" },
  { term: "PTSD", stands: "Post-traumatic stress disorder", meaning: "A lasting stress reaction after a traumatic event.", chapter: "3" },

  // 4. Incident command
  { term: "ICS", stands: "Incident command system", meaning: "A standard structure for organizing people and resources at an incident.", chapter: "4" },
  { term: "IC", stands: "Incident commander", meaning: "The person in overall charge of an incident.", chapter: "4" },
  { term: "NIMS", stands: "National Incident Management System", meaning: "The U.S. framework that sets how agencies work together at incidents, including ICS.", chapter: "4" },
  { term: "MCI", stands: "Mass casualty incident", meaning: "An event with more patients than the available rescuers can handle at once.", chapter: "4" },
  { term: "START", stands: "Simple triage and rapid treatment", meaning: "A fast triage method that sorts adults by walking, breathing, perfusion, and mental status.", chapter: "4" },
  { term: "JumpSTART", stands: "Pediatric version of START", meaning: "START adapted for children, who may need rescue breaths before they are sorted.", chapter: "4" },
  { term: "SALT", stands: "Sort, assess, lifesaving interventions, treatment/transport", meaning: "A triage method that does quick lifesaving steps while sorting patients.", chapter: "4" },
  { term: "HAZMAT", stands: "Hazardous materials", meaning: "Chemicals or other substances that can harm people or the environment.", chapter: "4" },

  // 5. Moving patients
  { term: "LSB", stands: "Long spine board", meaning: "A rigid board for moving and immobilizing a patient.", chapter: "5" },
  { term: "SMR", stands: "Spinal motion restriction", meaning: "Keeping the spine as still as possible during care and transport.", chapter: "5" },
  { term: "KED", stands: "Kendrick extrication device", meaning: "A short vest-style board for getting a seated patient out with the spine supported.", chapter: "5" },
  { term: "BEAM", stands: "Body elevation and movement", meaning: "A team lift that raises a patient straight up so a board or litter can go underneath.", chapter: "5" },

  // 6. Anatomy
  { term: "CNS", stands: "Central nervous system", meaning: "The brain and spinal cord.", chapter: "6" },
  { term: "PNS", stands: "Peripheral nervous system", meaning: "The nerves outside the brain and spinal cord.", chapter: "6" },
  { term: "RUQ", stands: "Right upper quadrant", meaning: "The upper right part of the abdomen. Holds most of the liver and the gallbladder.", chapter: "6" },
  { term: "LUQ", stands: "Left upper quadrant", meaning: "The upper left part of the abdomen. Holds the stomach and spleen.", chapter: "6" },
  { term: "RLQ", stands: "Right lower quadrant", meaning: "The lower right part of the abdomen. Holds the appendix.", chapter: "6" },
  { term: "LLQ", stands: "Left lower quadrant", meaning: "The lower left part of the abdomen. Holds part of the large intestine.", chapter: "6" },
  { term: "ACL", stands: "Anterior cruciate ligament", meaning: "A ligament inside the knee that is often torn in skiing.", chapter: "6" },
  { term: "MCL", stands: "Medial collateral ligament", meaning: "The ligament on the inner side of the knee.", chapter: "6" },

  // 7. Assessment
  { term: "MOI", stands: "Mechanism of injury", meaning: "How an injury happened, which hints at what injuries to look for.", chapter: "7" },
  { term: "NOI", stands: "Nature of illness", meaning: "What kind of medical problem the patient seems to have.", chapter: "7" },
  { term: "LOR", stands: "Level of responsiveness", meaning: "How alert and responsive the patient is.", chapter: "7" },
  { term: "LOC", stands: "Level of consciousness (or loss of consciousness)", meaning: "How awake the patient is, or whether they passed out.", chapter: "7" },
  { term: "AVPU", stands: "Alert, verbal, painful, unresponsive", meaning: "A quick scale for responsiveness: awake, responds to voice, responds only to pain, or no response.", chapter: "7" },
  { term: "A&O", stands: "Alert and oriented", meaning: "Recorded as A&O x1 to x4 for whether the patient knows person, place, time, and event.", chapter: "7" },
  { term: "GCS", stands: "Glasgow Coma Scale", meaning: "A 3 to 15 score for eye opening, speech, and movement.", chapter: "7" },
  { term: "ABCDE", stands: "Airway, breathing, circulation, disability, expose", meaning: "The order of the primary survey.", chapter: "7" },
  { term: "CAB", stands: "Circulation, airway, breathing", meaning: "The order used when a patient is in cardiac arrest or has life-threatening bleeding.", chapter: "7" },
  { term: "SAMPLE", stands: "Signs and symptoms, allergies, medications, pertinent history, last intake, events", meaning: "A checklist for taking a patient's history.", chapter: "7" },
  { term: "OPQRST", stands: "Onset, provocation, quality, region/radiation, severity, time", meaning: "A checklist for asking about pain or another complaint.", chapter: "7" },
  { term: "DCAP-BTLS", stands: "Deformities, contusions, abrasions, punctures, burns, tenderness, lacerations, swelling", meaning: "What to look and feel for during a physical exam.", chapter: "7" },
  { term: "PERRL", stands: "Pupils equal, round, reactive to light", meaning: "A normal pupil finding.", chapter: "7" },
  { term: "CSM", stands: "Circulation, sensation, motor", meaning: "Checks of blood flow, feeling, and movement beyond an injury. Also written PMS or CMS.", chapter: "7" },
  { term: "PMS", stands: "Pulse, motor, sensation", meaning: "Another name for the CSM check beyond an injury.", chapter: "7" },
  { term: "CC", stands: "Chief complaint", meaning: "The main problem, in the patient's own words.", chapter: "7" },
  { term: "HR", stands: "Heart rate", meaning: "Pulse beats per minute.", chapter: "7" },
  { term: "RR", stands: "Respiratory rate", meaning: "Breaths per minute.", chapter: "7" },
  { term: "BP", stands: "Blood pressure", meaning: "The pressure of blood against artery walls, written systolic over diastolic.", chapter: "7" },
  { term: "SpO2", stands: "Peripheral oxygen saturation", meaning: "The percentage of hemoglobin carrying oxygen, measured with a pulse oximeter.", chapter: "7" },
  { term: "CRT", stands: "Capillary refill time", meaning: "How long color takes to return after you press a nail bed. More than 2 seconds suggests poor perfusion.", chapter: "7" },
  { term: "SCTM", stands: "Skin color, temperature, moisture", meaning: "Skin signs that show how well the patient is perfusing.", chapter: "7" },
  { term: "PE", stands: "Physical exam", meaning: "The hands-on check of the patient's body.", chapter: "7" },

  // 8. Communications
  { term: "SOAP", stands: "Subjective, objective, assessment, plan", meaning: "A common format for a written patient report.", chapter: "8" },
  { term: "PCR", stands: "Patient care report", meaning: "The written record of an incident and the care given.", chapter: "8" },
  { term: "Hx", stands: "History", meaning: "Shorthand for the patient's history.", chapter: "8" },
  { term: "Tx", stands: "Treatment", meaning: "Shorthand for the care given.", chapter: "8" },
  { term: "Dx", stands: "Diagnosis", meaning: "Shorthand for a diagnosis.", chapter: "8" },
  { term: "c/o", stands: "Complains of", meaning: "Shorthand used before what the patient reports.", chapter: "8" },
  { term: "PRN", stands: "Pro re nata (as needed)", meaning: "Used for medications taken only when needed.", chapter: "8" },

  // 9. Airway
  { term: "OPA", stands: "Oropharyngeal airway", meaning: "A curved device put in the mouth to hold the tongue off the airway of an unresponsive patient with no gag reflex.", chapter: "9" },
  { term: "NPA", stands: "Nasopharyngeal airway", meaning: "A soft tube placed through the nose to keep the airway open. Can be used if the patient has a gag reflex.", chapter: "9" },
  { term: "BVM", stands: "Bag-valve mask", meaning: "A hand-squeezed bag and mask for breathing for a patient.", chapter: "9" },
  { term: "NRB", stands: "Non-rebreather mask", meaning: "A mask with a reservoir bag that delivers high-concentration oxygen.", chapter: "9" },
  { term: "NC", stands: "Nasal cannula", meaning: "Prongs in the nose that deliver low-flow oxygen.", chapter: "9" },
  { term: "LPM", stands: "Liters per minute", meaning: "The unit for oxygen flow rate.", chapter: "9" },
  { term: "O2", stands: "Oxygen", meaning: "The gas given to patients who are hypoxic or in distress.", chapter: "9" },
  { term: "CO2", stands: "Carbon dioxide", meaning: "The waste gas the body breathes out.", chapter: "9" },
  { term: "FBAO", stands: "Foreign body airway obstruction", meaning: "An airway blocked by an object, such as food.", chapter: "9" },
  { term: "SGA", stands: "Supraglottic airway", meaning: "An advanced airway that sits above the vocal cords, such as an i-gel or King tube.", chapter: "9" },
  { term: "CPAP", stands: "Continuous positive airway pressure", meaning: "Steady pressure through a mask that keeps the airways and air sacs open.", chapter: "9" },
  { term: "PSI", stands: "Pounds per square inch", meaning: "The unit for pressure in an oxygen cylinder.", chapter: "9" },

  // 10. Shock
  { term: "MAP", stands: "Mean arterial pressure", meaning: "The average pressure in the arteries over one heartbeat.", chapter: "10" },
  { term: "SBP", stands: "Systolic blood pressure", meaning: "The top blood pressure number, measured while the heart squeezes.", chapter: "10" },
  { term: "DBP", stands: "Diastolic blood pressure", meaning: "The bottom blood pressure number, measured while the heart rests.", chapter: "10" },

  // 11. Altered mental status
  { term: "AMS", stands: "Altered mental status", meaning: "Any change from a person's normal awareness or behavior. Also used for acute mountain sickness in the altitude chapter.", chapter: "11" },
  { term: "AEIOU-TIPS", stands: "Alcohol, epilepsy, insulin, overdose, uremia, trauma, infection, psychiatric, stroke", meaning: "A memory aid for possible causes of altered mental status.", chapter: "11" },
  { term: "CVA", stands: "Cerebrovascular accident", meaning: "A stroke: brain damage from a blocked or burst blood vessel.", chapter: "11" },
  { term: "TIA", stands: "Transient ischemic attack", meaning: "A short stroke-like episode whose symptoms clear, often a warning of a stroke to come.", chapter: "11" },
  { term: "FAST", stands: "Face, arms, speech, time", meaning: "A quick stroke check: face droop, arm weakness, speech trouble, and time to get help.", chapter: "11" },
  { term: "BE-FAST", stands: "Balance, eyes, face, arms, speech, time", meaning: "FAST with balance and vision checks added.", chapter: "11" },
  { term: "BGL", stands: "Blood glucose level", meaning: "The amount of sugar in the blood.", chapter: "11" },
  { term: "DKA", stands: "Diabetic ketoacidosis", meaning: "A dangerous buildup of acids in the blood from too little insulin.", chapter: "11" },

  // 12. Substances and medications
  { term: "OTC", stands: "Over the counter", meaning: "Medication sold without a prescription.", chapter: "12" },
  { term: "PO", stands: "Per os (by mouth)", meaning: "A medication route: swallowed.", chapter: "12" },
  { term: "SL", stands: "Sublingual", meaning: "A medication route: under the tongue.", chapter: "12" },
  { term: "IM", stands: "Intramuscular", meaning: "A medication route: injected into muscle.", chapter: "12" },
  { term: "IV", stands: "Intravenous", meaning: "A medication route: into a vein.", chapter: "12" },
  { term: "IN", stands: "Intranasal", meaning: "A medication route: sprayed into the nose, as with naloxone.", chapter: "12" },
  { term: "NSAID", stands: "Nonsteroidal anti-inflammatory drug", meaning: "Pain and swelling medications such as ibuprofen and naproxen.", chapter: "12" },
  { term: "ASA", stands: "Acetylsalicylic acid", meaning: "Aspirin.", chapter: "12" },
  { term: "CO", stands: "Carbon monoxide", meaning: "An odorless poisonous gas from burning fuel that keeps blood from carrying oxygen.", chapter: "12" },
  { term: "SLUDGEM", stands: "Salivation, lacrimation, urination, defecation, GI upset, emesis, miosis", meaning: "A memory aid for the signs of organophosphate or nerve-agent poisoning.", chapter: "12" },

  // 13. Respiratory
  { term: "COPD", stands: "Chronic obstructive pulmonary disease", meaning: "Long-term lung disease, such as emphysema or chronic bronchitis, that makes breathing out hard.", chapter: "13" },
  { term: "MDI", stands: "Metered-dose inhaler", meaning: "A handheld inhaler that gives a measured dose of medication.", chapter: "13" },
  { term: "PE (lungs)", stands: "Pulmonary embolism", meaning: "A blood clot that blocks an artery in the lungs.", chapter: "13" },
  { term: "URI", stands: "Upper respiratory infection", meaning: "An infection of the nose and throat, such as a cold.", chapter: "13" },
  { term: "SOB", stands: "Shortness of breath", meaning: "Shorthand for trouble breathing.", chapter: "13" },
  { term: "DIB", stands: "Difficulty in breathing", meaning: "Another shorthand for trouble breathing.", chapter: "13" },

  // 14. Allergies
  { term: "EAI", stands: "Epinephrine auto-injector", meaning: "A spring-loaded pen, such as an EpiPen, that injects epinephrine into the thigh.", chapter: "14" },
  { term: "Epi", stands: "Epinephrine", meaning: "The drug that reverses anaphylaxis by opening airways and raising blood pressure.", chapter: "14" },

  // 15. Cardiovascular
  { term: "AED", stands: "Automated external defibrillator", meaning: "A device that reads the heart rhythm and shocks it if needed.", chapter: "15" },
  { term: "AMI", stands: "Acute myocardial infarction", meaning: "A heart attack: heart muscle dying from blocked blood flow.", chapter: "15" },
  { term: "MI", stands: "Myocardial infarction", meaning: "A heart attack.", chapter: "15" },
  { term: "ACS", stands: "Acute coronary syndrome", meaning: "Conditions caused by sudden reduced blood flow to the heart, from angina to heart attack.", chapter: "15" },
  { term: "CHF", stands: "Congestive heart failure", meaning: "A weak heart that cannot pump well, so fluid backs up into the lungs and body.", chapter: "15" },
  { term: "CAD", stands: "Coronary artery disease", meaning: "Narrowing of the arteries that feed the heart.", chapter: "15" },
  { term: "SCA", stands: "Sudden cardiac arrest", meaning: "The heart suddenly stops pumping effectively.", chapter: "15" },
  { term: "VF", stands: "Ventricular fibrillation", meaning: "A chaotic, quivering heart rhythm that pumps no blood. Shockable with an AED.", chapter: "15" },
  { term: "VT", stands: "Ventricular tachycardia", meaning: "A very fast rhythm from the lower heart chambers. Shockable when there is no pulse.", chapter: "15" },
  { term: "ROSC", stands: "Return of spontaneous circulation", meaning: "The heart starts beating on its own again after CPR or a shock.", chapter: "15" },
  { term: "NTG", stands: "Nitroglycerin", meaning: "A drug that widens blood vessels to relieve chest pain from angina.", chapter: "15" },
  { term: "ECG / EKG", stands: "Electrocardiogram", meaning: "A recording of the heart's electrical activity.", chapter: "15" },
  { term: "DVT", stands: "Deep vein thrombosis", meaning: "A blood clot in a deep vein, usually in the leg, that can travel to the lungs.", chapter: "15" },

  // 16. Abdomen and pelvis
  { term: "GI", stands: "Gastrointestinal", meaning: "The digestive tract from mouth to anus.", chapter: "16" },
  { term: "UTI", stands: "Urinary tract infection", meaning: "An infection of the bladder, urethra, or kidneys.", chapter: "16" },
  { term: "N/V", stands: "Nausea and vomiting", meaning: "Shorthand for nausea and vomiting.", chapter: "16" },
  { term: "AAA", stands: "Abdominal aortic aneurysm", meaning: "A bulge in the main artery of the abdomen that can burst.", chapter: "16" },

  // 17. Childbirth
  { term: "OB", stands: "Obstetrics", meaning: "Medical care for pregnancy and childbirth.", chapter: "17" },
  { term: "APGAR", stands: "Appearance, pulse, grimace, activity, respiration", meaning: "A 0 to 10 score of a newborn's condition at 1 and 5 minutes after birth.", chapter: "17" },
  { term: "LMP", stands: "Last menstrual period", meaning: "Used to estimate how far along a pregnancy is.", chapter: "17" },

  // 18. Trauma principles
  { term: "TBI", stands: "Traumatic brain injury", meaning: "Injury to the brain from a blow, jolt, or penetrating wound.", chapter: "18" },
  { term: "MVC", stands: "Motor vehicle collision", meaning: "A vehicle crash.", chapter: "18" },
  { term: "GSW", stands: "Gunshot wound", meaning: "A penetrating wound from a firearm.", chapter: "18" },

  // 19. Soft tissue
  { term: "TQ", stands: "Tourniquet", meaning: "A tight band placed above a wound on a limb to stop severe bleeding.", chapter: "19" },
  { term: "TBSA", stands: "Total body surface area", meaning: "The percentage of the body that is burned, often estimated with the rule of nines.", chapter: "19" },

  // 20. Musculoskeletal
  { term: "RICE", stands: "Rest, ice, compression, elevation", meaning: "Basic care for sprains, strains, and other minor soft-tissue injuries.", chapter: "20" },
  { term: "ROM", stands: "Range of motion", meaning: "How far a joint can move.", chapter: "20" },
  { term: "Fx", stands: "Fracture", meaning: "Shorthand for a broken bone.", chapter: "20" },

  // 21. Head and spine
  { term: "CSF", stands: "Cerebrospinal fluid", meaning: "Clear fluid around the brain and spinal cord. Clear fluid from the nose or ears after a head injury may be CSF.", chapter: "21" },
  { term: "ICP", stands: "Intracranial pressure", meaning: "Pressure inside the skull. Rising ICP after a head injury is an emergency.", chapter: "21" },
  { term: "SCI", stands: "Spinal cord injury", meaning: "Damage to the spinal cord that can cause loss of movement or feeling.", chapter: "21" },
  { term: "C-spine", stands: "Cervical spine", meaning: "The seven vertebrae of the neck.", chapter: "21" },
  { term: "C1–C7, T1–T12, L1–L5", stands: "Cervical, thoracic, and lumbar vertebrae", meaning: "Names for the vertebrae of the neck, upper back, and lower back.", chapter: "21" },

  // 23. Chest trauma
  { term: "PTX", stands: "Pneumothorax", meaning: "Air in the chest outside the lung, which collapses the lung.", chapter: "23" },
  { term: "HTX", stands: "Hemothorax", meaning: "Blood in the chest around the lung.", chapter: "23" },

  // 28. Altitude
  { term: "AMS (altitude)", stands: "Acute mountain sickness", meaning: "Headache, nausea, and fatigue from going up too high too fast.", chapter: "28" },
  { term: "HACE", stands: "High-altitude cerebral edema", meaning: "Brain swelling at altitude. Causes confusion and loss of coordination, and can kill.", chapter: "28" },
  { term: "HAPE", stands: "High-altitude pulmonary edema", meaning: "Fluid in the lungs at altitude. Causes breathlessness at rest and cough, and can kill.", chapter: "28" },

  // 29. Water
  { term: "PFD", stands: "Personal flotation device", meaning: "A life jacket.", chapter: "29" },

  // 30. Pediatric
  { term: "PAT", stands: "Pediatric assessment triangle", meaning: "A first look at a child's appearance, work of breathing, and skin circulation.", chapter: "30" },
  { term: "SIDS", stands: "Sudden infant death syndrome", meaning: "Unexplained death of a seemingly healthy infant, usually during sleep.", chapter: "30" },

  // 34. Special operations
  { term: "SAR", stands: "Search and rescue", meaning: "Finding and recovering lost or injured people.", chapter: "34" },
  { term: "LZ", stands: "Landing zone", meaning: "A cleared, safe area for a helicopter to land.", chapter: "34" },
  { term: "HEMS", stands: "Helicopter emergency medical services", meaning: "Air medical transport by helicopter.", chapter: "34" },
];
