const { User } = require('../models/user_model')
const { Officer } = require('../models/officer_model')

exports.GetUserLanguage = async (req, res, next) => {
    const user_id = req.params.id
    const role = req.params.role
    try {
        if (role === "0P") {
            const student = await User.findById(user_id)
            if (!student) {
                res.status(200).json({
                    success: false,
                    message: "Could not find user"
                })
            }
            if (student.preffered_lang === "eng") {
                res.status(200).json({
                    data: {
                        "_id": {
                            "$oid": "6308905ad19b9740398c26e6"
                        },
                        "lang": {
                            "eht1": "ABOUT UNIVERSITY GRANTS COMMISSION",
                            "eht2": "India, the country of the Vedas and the most magnificent fusion of diverse perspectives, has one of the most well-known educational systems in the world. The efficient and orderly operation of a system is essential for its growth. By maintaining effective communication across the system's many components, we can make sure of this. The UGC's Centralised Assistance Cell takes this responsibility. Any complaints from the institution, students, professors, or employed personnel are appreciated.",
                            "eht3": "HELPLINE @ UGC",
                            "eht4": "NAME OF DEPARTMENT",
                            "eht5": "EMAIL ID",
                            "eht6": "CONTACT NUMBER",
                            "eht7": "Scholarship/Fellowship Helpline",
                            "eht8": "National Scholarship Portal Helpline",
                            "eht9": "Saksham Helpline",
                            "eht10": "Anti-ragging Helpline",
                            "eht11": "OUR WORKFLOW",
                            "eht12": "FAQ",
                            "eht13": "How should an HEI register?",
                            "eht14": "The HEI has already been registered by the university to which it belongs. And, if the HEI is a university, it will have been registered with the regulatory body to which it belongs. As a result, HEIs can log in directly from our platform using the login credentials supplied by their presiding body.",
                            "eht15": "What is the institute's grievance resolution procedure?",
                            "eht16": "To get its grievance resolved, an institute must login using the Unique Id provided by its university / Regulatory body . Then, via its dashboard, it may file a fresh grievance. The institute can use the tracking board to follow and view the status of its current grievance. In the grievance history, the institute may also see past grievances.",
                            "eht17": "What is the students/teacher/staff grievance resolution procedure?",
                            "eht18": "The aggrieved student/teacher/staff can register through the registration site, and their grievance will be recorded and resolved by their individual universities. If the student/teacher/staff want to escalate their claim to the regulating body's Public grievance cell, they can do so.",
                            "eht19": "Every organisation must evolve a system for redressal of public grievances arising from its work. The grievance redressal mechanism should form an integral part of the machinery of any organisation. No organisation can claim to be accountable,responsible and user-friendly unless it has established an efficient and effective grievance redressal system. In fact, the grievances redressal mechanism of an organisation is the gauge to measure its efficiency and effectiveness as it provides important feedback on the working of the organisation. It helps the organisation to deliver quality service to the public and other stakeholders in a hassle-free manner and in eliminating then cause of grievances.",
                            "eht20": "UGC has a more extensive public interface. It is especially crucial to establish a strong public grievances mechanism because we are the paramount head of the government of India's regulatory body for the coordinated development of education. This will allow you to act as a facilitator and regulator and will also increase the organisation's responsiveness to the needs of the public. As a result, we are the centralised assistance cell for UGC. Higher education institutions and individuals can file complaints and have them resolved within a set time frame.",
                            "eht21": "About Us",
                            "eht22": "Quick Links",
                            "eht23": "Don't have an account?",
                            "eht24": "Sign up",
                            "eht25": "Log in to your account",
                            "eht26": "PUBLIC REGISTRATION",
                            "eht27": "Register your grievance and have it resolved. This registration is reserved for students, professors, and employees of HEIs (Higher Education Institutes). HEIs and grievance redressal bodies can log in directly using their login credentials.",
                            "eht28": "Register Here",
                            "eht29": "Welcome,",
                            "eht30": "Some grievances you've missed",
                            "eht31": "Current grievances"
                        }
                    }
                })
            }
            else if (student.preffered_lang === "tamil") {
                res.status(200).json({
                    data: {

                        "_id": {
                            "$oid": "6308909dd19b9740398c26e7"
                        },
                        "lang": {
                            "tht1": "பல்கலைக்கழக மானிய ஆணையம் பற்றி",
                            "tht2": "இந்தியா, வேதங்களின் நாடு மற்றும் பலதரப்பட்ட கண்ணோட்டங்களின் மிக அற்புதமான இணைவு, உலகிலேயே மிகவும் பிரபலமான கல்வி முறைகளில் ஒன்றாகும். ஒரு அமைப்பின் திறமையான மற்றும் ஒழுங்கான செயல்பாடு அதன் வளர்ச்சிக்கு அவசியம். கணினியின் பல கூறுகளில் பயனுள்ள தகவல்தொடர்புகளை பராமரிப்பதன் மூலம், இதை நாம் உறுதிசெய்ய முடியும். யுஜிசியின் மையப்படுத்தப்பட்ட உதவிப் பிரிவு இந்தப் பொறுப்பை ஏற்கிறது. நிறுவனம், மாணவர்கள், பேராசிரியர்கள் அல்லது பணியமர்த்தப்பட்ட பணியாளர்களிடமிருந்து வரும் புகார்கள் பாராட்டப்படுகின்றன.",
                            "tht3": "ஹெல்ப்லைன் @ யுஜிசி",
                            "tht4": "துறையின் பெயர்",
                            "tht5": "மின்னஞ்சல் முகவரி",
                            "tht6": "தொடர்பு எண்",
                            "tht7": "ஸ்காலர்ஷிப்/பெல்லோஷிப் ஹெல்ப்லைன்",
                            "tht8": "தேசிய உதவித்தொகை போர்டல் ஹெல்ப்லைன்",
                            "tht9": "சக்ஷம் ஹெல்ப்லைன்",
                            "tht10": "ராகிங் எதிர்ப்பு ஹெல்ப்லைன்",
                            "tht11": "எங்கள் பணிப்பாய்வு",
                            "tht12": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
                            "tht13": "ஒரு HEI எவ்வாறு பதிவு செய்ய வேண்டும்?",
                            "tht14": "HEI ஏற்கனவே அது சேர்ந்த பல்கலைக்கழகத்தால் பதிவு செய்யப்பட்டுள்ளது. மேலும், HEI ஒரு பல்கலைக்கழகமாக இருந்தால், அது அதைச் சேர்ந்த ஒழுங்குமுறை அமைப்பில் பதிவு செய்யப்பட்டிருக்கும். இதன் விளைவாக, HEIக்கள் தங்கள் தலைமையகத்தால் வழங்கப்பட்ட உள்நுழைவு சான்றுகளைப் பயன்படுத்தி எங்கள் தளத்திலிருந்து நேரடியாக உள்நுழைய முடியும்.",
                            "tht15": "நிறுவனத்தின் குறை தீர்க்கும் நடைமுறை என்ன?",
                            "tht16": "அதன் குறையைத் தீர்க்க, ஒரு நிறுவனம் அதன் பல்கலைக்கழகம்/ஒழுங்குமுறை அமைப்பு வழங்கிய தனித்துவ அடையாள அட்டையைப் பயன்படுத்தி உள்நுழைய வேண்டும். பின்னர், அதன் டாஷ்போர்டு வழியாக, அது ஒரு புதிய குறையை தாக்கல் செய்யலாம். நிறுவனம் அதன் தற்போதைய குறைகளின் நிலையைப் பின்தொடரவும் பார்க்கவும் கண்காணிப்பு பலகையைப் பயன்படுத்தலாம். புகார் வரலாற்றில், நிறுவனம் கடந்த கால குறைகளையும் காணலாம்.",
                            "tht17": "மாணவர்கள்/ஆசிரியர்/ஊழியர்கள் குறை தீர்க்கும் நடைமுறை என்ன?",
                            "tht18": "பாதிக்கப்பட்ட மாணவர்/ஆசிரியர்/ஊழியர்கள் பதிவு தளத்தின் மூலம் பதிவு செய்யலாம், மேலும் அவர்களின் குறைகளை அவர்களின் தனிப்பட்ட பல்கலைக்கழகங்கள் பதிவு செய்து தீர்க்கப்படும். மாணவர்/ஆசிரியர்/ஊழியர்கள் தங்கள் கோரிக்கையை ஒழுங்குபடுத்தும் அமைப்பின் பொதுக் குறைதீர்ப்புப் பிரிவிற்குத் தெரிவிக்க விரும்பினால், அவர்கள் அவ்வாறு செய்யலாம்.",
                            "tht19": "ஒவ்வொரு நிறுவனமும் அதன் பணியிலிருந்து எழும் பொதுக் குறைகளைத் தீர்ப்பதற்கான அமைப்பை உருவாக்க வேண்டும். குறை தீர்க்கும் பொறிமுறையானது எந்தவொரு அமைப்பின் இயந்திரத்தின் ஒருங்கிணைந்த பகுதியாக இருக்க வேண்டும். திறமையான மற்றும் பயனுள்ள குறைகளை நிவர்த்தி செய்யும் முறையை நிறுவாத வரையில் எந்தவொரு நிறுவனமும் பொறுப்புணர்வு, பொறுப்புணர்வு மற்றும் பயனர் நட்பு என உரிமை கோர முடியாது. உண்மையில், ஒரு நிறுவனத்தின் குறைகளை நிவர்த்தி செய்யும் பொறிமுறையானது, நிறுவனத்தின் செயல்பாடு குறித்த முக்கியமான கருத்துக்களை வழங்குவதால், அதன் செயல்திறன் மற்றும் செயல்திறனை அளவிடுவதற்கான அளவீடு ஆகும். இது பொது மக்களுக்கும் மற்ற பங்குதாரர்களுக்கும் தரமான சேவையை தொந்தரவில்லாத முறையில் வழங்கவும், பின்னர் ஏற்படும் குறைகளை நீக்கவும் உதவுகிறது.",
                            "tht20": "UGC மிகவும் விரிவான பொது இடைமுகத்தைக் கொண்டுள்ளது. கல்வியின் ஒருங்கிணைந்த வளர்ச்சிக்கான இந்திய அரசாங்கத்தின் ஒழுங்குமுறை அமைப்பின் முதன்மைத் தலைவராக நாங்கள் இருப்பதால், ஒரு வலுவான பொதுக் குறைகள் பொறிமுறையை நிறுவுவது மிகவும் முக்கியமானது. இது உங்களை எளிதாக்குபவர் மற்றும் ஒழுங்குபடுத்துபவராக செயல்பட அனுமதிக்கும் மேலும் பொதுமக்களின் தேவைகளுக்கு நிறுவனத்தின் வினைத்திறனை அதிகரிக்கும். இதன் விளைவாக, நாங்கள் UGCக்கான மையப்படுத்தப்பட்ட உதவிப் பிரிவாக இருக்கிறோம். உயர்கல்வி நிறுவனங்கள் மற்றும் தனிநபர்கள் புகார்களை பதிவு செய்து குறிப்பிட்ட காலக்கெடுவுக்குள் தீர்வு காணலாம்.",
                            "tht21": "எங்களை பற்றி",
                            "tht22": "விரைவு இணைப்புகள்",
                            "tht23": "கணக்கு இல்லையா?",
                            "tht24": "பதிவு செய்யவும்",
                            "tht25": "உங்கள் கணக்கில் உள்நுழையவும்",
                            "tht26": "பொதுப் பதிவு",
                            "tht27": "பொதுப் பதிவேடு உங்கள் குறையைப் பதிவு செய்து அதைத் தீர்க்கவும். இந்த பதிவு HEIs (உயர் கல்வி நிறுவனங்கள்) மாணவர்கள், பேராசிரியர்கள் மற்றும் பணியாளர்களுக்காக ஒதுக்கப்பட்டுள்ளது. உயர் அதிகாரிகளும் குறை தீர்க்கும் அமைப்புகளும் தங்கள் உள்நுழைவுச் சான்றுகளைப் பயன்படுத்தி நேரடியாக உள்நுழையலாம்.ION",
                            "tht28": "இங்கே பதிவு செய்யவும்",
                            "tht29": "வரவேற்பு,",
                            "tht30": "நீங்கள் தவறவிட்ட சில குறைகள்",
                            "tht31": "தற்போதைய குறைகள்"
                        }

                    }
                })
            }
            else if (student.preffered_lang === "hindi") {
                res.status(200).json({
                    data: {
                        "_id": {
                            "$oid": "630890e9d19b9740398c26e8"
                        },
                        "lang": {
                            "hht1": "विश्वविद्यालय अनुदान आयोग के बारे में",
                            "hht2": "भारत, वेदों का देश और विविध दृष्टिकोणों का सबसे शानदार संलयन, दुनिया में सबसे प्रसिद्ध शैक्षिक प्रणालियों में से एक है। किसी प्रणाली का कुशल और व्यवस्थित संचालन उसके विकास के लिए आवश्यक है। सिस्टम के कई घटकों में प्रभावी संचार बनाए रखकर, हम इसे सुनिश्चित कर सकते हैं। यूजीसी का केंद्रीकृत सहायता प्रकोष्ठ यह जिम्मेदारी लेता है। संस्थान, छात्रों, प्रोफेसरों या नियोजित कर्मियों की किसी भी शिकायत की सराहना की जाती है।",
                            "hht3": "हेल्पलाइन @ यूजीसी",
                            "hht4": "विभाग का नाम",
                            "hht5": "ईमेल आईडी",
                            "hht6": "संपर्क संख्या",
                            "hht7": "छात्रवृत्ति/अध्येतावृत्ति हेल्पलाइन",
                            "hht8": "राष्ट्रीय छात्रवृत्ति पोर्टल हेल्पलाइन",
                            "hht9": "सक्षम हेल्पलाइन",
                            "hht10": "एंटी रैगिंग हेल्पलाइन",
                            "hht11": "हमारा कार्यप्रवाह",
                            "hht12": "सामान्य प्रश्न",
                            "hht13": "एक HEI को कैसे पंजीकरण करना चाहिए?",
                            "hht14": "एचईआई पहले से ही उस विश्वविद्यालय द्वारा पंजीकृत किया जा चुका है जिससे वह संबंधित है। और, यदि एचईआई एक विश्वविद्यालय है, तो वह उस नियामक निकाय के साथ पंजीकृत होगा जिससे वह संबंधित है। परिणामस्वरूप, HEI अपने पीठासीन निकाय द्वारा प्रदान किए गए लॉगिन क्रेडेंशियल का उपयोग करके सीधे हमारे प्लेटफॉर्म से लॉग इन कर सकते हैं।",
                            "hht15": "संस्थान की शिकायत समाधान प्रक्रिया क्या है?",
                            "hht16": "अपनी शिकायत का समाधान करने के लिए, एक संस्थान को अपने विश्वविद्यालय/नियामक निकाय द्वारा प्रदान की गई विशिष्ट आईडी का उपयोग करके लॉगिन करना होगा। फिर, अपने डैशबोर्ड के माध्यम से, यह एक नई शिकायत दर्ज कर सकता है। संस्थान अपनी वर्तमान शिकायत की स्थिति का पालन करने और देखने के लिए ट्रैकिंग बोर्ड का उपयोग कर सकता है। शिकायत इतिहास में, संस्थान पिछली शिकायतों को भी देख सकता है।",
                            "hht17": "छात्र/शिक्षक/कर्मचारी शिकायत समाधान प्रक्रिया क्या है?",
                            "hht18": "पीड़ित छात्र/शिक्षक/कर्मचारी पंजीकरण साइट के माध्यम से पंजीकरण कर सकते हैं, और उनकी शिकायत दर्ज की जाएगी और उनके व्यक्तिगत विश्वविद्यालयों द्वारा हल किया जाएगा। यदि छात्र/शिक्षक/कर्मचारी अपने दावे को नियामक निकाय के लोक शिकायत प्रकोष्ठ तक पहुँचाना चाहते हैं, तो वे ऐसा कर सकते हैं।",
                            "hht19": "प्रत्येक संगठन को अपने कार्य से उत्पन्न होने वाली जन शिकायतों के निवारण के लिए एक प्रणाली विकसित करनी चाहिए। शिकायत निवारण तंत्र किसी भी संगठन की मशीनरी का एक अभिन्न अंग होना चाहिए। कोई भी संगठन जब तक एक कुशल और प्रभावी शिकायत निवारण प्रणाली स्थापित नहीं करता है, तब तक वह जवाबदेह, जिम्मेदार और उपयोगकर्ता के अनुकूल होने का दावा नहीं कर सकता है। वास्तव में, किसी संगठन का शिकायत निवारण तंत्र उसकी दक्षता और प्रभावशीलता को मापने का पैमाना है क्योंकि यह संगठन के कामकाज पर महत्वपूर्ण प्रतिक्रिया प्रदान करता है। यह संगठन को जनता और अन्य हितधारकों को परेशानी मुक्त तरीके से गुणवत्तापूर्ण सेवा प्रदान करने और शिकायतों के कारण को समाप्त करने में मदद करता है।",
                            "hht20": "यूजीसी का सार्वजनिक इंटरफ़ेस अधिक व्यापक है। एक मजबूत लोक शिकायत तंत्र स्थापित करना विशेष रूप से महत्वपूर्ण है क्योंकि हम शिक्षा के समन्वित विकास के लिए भारत सरकार के नियामक निकाय के सर्वोच्च प्रमुख हैं। यह आपको एक सूत्रधार और नियामक के रूप में कार्य करने की अनुमति देगा और जनता की जरूरतों के लिए संगठन की प्रतिक्रिया को भी बढ़ाएगा। नतीजतन, हम यूजीसी के लिए केंद्रीकृत सहायता प्रकोष्ठ हैं। उच्च शिक्षा संस्थान और व्यक्ति शिकायत दर्ज कर सकते हैं और उन्हें एक निर्धारित समय सीमा के भीतर हल कर सकते हैं।",
                            "hht21": "हमारे बारे में",
                            "hht22": "त्वरित सम्पक",
                            "hht23": "खाता नहीं है?",
                            "hht24": "साइन अप करें",
                            "hht25": "अपने खाते में प्रवेश करें",
                            "hht26": "सार्वजनिक पंजीकरण",
                            "hht27": "सार्वजनिक पंजीकरण अपनी शिकायत दर्ज करें और उसका समाधान करें। यह पंजीकरण एचईआई (उच्च शिक्षा संस्थानों) के छात्रों, प्रोफेसरों और कर्मचारियों के लिए आरक्षित है। HEI और शिकायत निवारण निकाय अपने लॉगिन क्रेडेंशियल का उपयोग करके सीधे लॉग इन कर सकते हैं।ION",
                            "hht28": "यहां रजिस्टर करें",
                            "hht29": "स्वागत,",
                            "hht30": "कुछ शिकायतें जिन्हें आपने याद किया है",
                            "hht31": "वर्तमान शिकायतें"
                        }
                    }
                })
            }
        }
        if (role === "1A") {
            const student = await Officer.findById(user_id)
            if (!student) {
                res.status(200).json({
                    success: false,
                    message: "Could not find user"
                })
            }
            if (student.preffered_lang === "eng") {
                res.status(200).json({
                    data: {
                        "_id": {
                            "$oid": "6308905ad19b9740398c26e6"
                        },
                        "lang": {
                            "eht1": "ABOUT UNIVERSITY GRANTS COMMISSION",
                            "eht2": "India, the country of the Vedas and the most magnificent fusion of diverse perspectives, has one of the most well-known educational systems in the world. The efficient and orderly operation of a system is essential for its growth. By maintaining effective communication across the system's many components, we can make sure of this. The UGC's Centralised Assistance Cell takes this responsibility. Any complaints from the institution, students, professors, or employed personnel are appreciated.",
                            "eht3": "HELPLINE @ UGC",
                            "eht4": "NAME OF DEPARTMENT",
                            "eht5": "EMAIL ID",
                            "eht6": "CONTACT NUMBER",
                            "eht7": "Scholarship/Fellowship Helpline",
                            "eht8": "National Scholarship Portal Helpline",
                            "eht9": "Saksham Helpline",
                            "eht10": "Anti-ragging Helpline",
                            "eht11": "OUR WORKFLOW",
                            "eht12": "FAQ",
                            "eht13": "How should an HEI register?",
                            "eht14": "The HEI has already been registered by the university to which it belongs. And, if the HEI is a university, it will have been registered with the regulatory body to which it belongs. As a result, HEIs can log in directly from our platform using the login credentials supplied by their presiding body.",
                            "eht15": "What is the institute's grievance resolution procedure?",
                            "eht16": "To get its grievance resolved, an institute must login using the Unique Id provided by its university / Regulatory body . Then, via its dashboard, it may file a fresh grievance. The institute can use the tracking board to follow and view the status of its current grievance. In the grievance history, the institute may also see past grievances.",
                            "eht17": "What is the students/teacher/staff grievance resolution procedure?",
                            "eht18": "The aggrieved student/teacher/staff can register through the registration site, and their grievance will be recorded and resolved by their individual universities. If the student/teacher/staff want to escalate their claim to the regulating body's Public grievance cell, they can do so.",
                            "eht19": "Every organisation must evolve a system for redressal of public grievances arising from its work. The grievance redressal mechanism should form an integral part of the machinery of any organisation. No organisation can claim to be accountable,responsible and user-friendly unless it has established an efficient and effective grievance redressal system. In fact, the grievances redressal mechanism of an organisation is the gauge to measure its efficiency and effectiveness as it provides important feedback on the working of the organisation. It helps the organisation to deliver quality service to the public and other stakeholders in a hassle-free manner and in eliminating then cause of grievances.",
                            "eht20": "UGC has a more extensive public interface. It is especially crucial to establish a strong public grievances mechanism because we are the paramount head of the government of India's regulatory body for the coordinated development of education. This will allow you to act as a facilitator and regulator and will also increase the organisation's responsiveness to the needs of the public. As a result, we are the centralised assistance cell for UGC. Higher education institutions and individuals can file complaints and have them resolved within a set time frame.",
                            "eht21": "About Us",
                            "eht22": "Quick Links",
                            "eht23": "Don't have an account?",
                            "eht24": "Sign up",
                            "eht25": "Log in to your account",
                            "eht26": "PUBLIC REGISTRATION",
                            "eht27": "Register your grievance and have it resolved. This registration is reserved for students, professors, and employees of HEIs (Higher Education Institutes). HEIs and grievance redressal bodies can log in directly using their login credentials.",
                            "eht28": "Register Here",
                            "eht29": "Welcome,",
                            "eht30": "Some grievances you've missed",
                            "eht31": "Current grievances"
                        }
                    }
                })
            }
            else if (user_id.preffered_lang === "tamil") {
                res.status(200).json({
                    data: {

                        "_id": {
                            "$oid": "6308909dd19b9740398c26e7"
                        },
                        "lang": {
                            "tht1": "பல்கலைக்கழக மானிய ஆணையம் பற்றி",
                            "tht2": "இந்தியா, வேதங்களின் நாடு மற்றும் பலதரப்பட்ட கண்ணோட்டங்களின் மிக அற்புதமான இணைவு, உலகிலேயே மிகவும் பிரபலமான கல்வி முறைகளில் ஒன்றாகும். ஒரு அமைப்பின் திறமையான மற்றும் ஒழுங்கான செயல்பாடு அதன் வளர்ச்சிக்கு அவசியம். கணினியின் பல கூறுகளில் பயனுள்ள தகவல்தொடர்புகளை பராமரிப்பதன் மூலம், இதை நாம் உறுதிசெய்ய முடியும். யுஜிசியின் மையப்படுத்தப்பட்ட உதவிப் பிரிவு இந்தப் பொறுப்பை ஏற்கிறது. நிறுவனம், மாணவர்கள், பேராசிரியர்கள் அல்லது பணியமர்த்தப்பட்ட பணியாளர்களிடமிருந்து வரும் புகார்கள் பாராட்டப்படுகின்றன.",
                            "tht3": "ஹெல்ப்லைன் @ யுஜிசி",
                            "tht4": "துறையின் பெயர்",
                            "tht5": "மின்னஞ்சல் முகவரி",
                            "tht6": "தொடர்பு எண்",
                            "tht7": "ஸ்காலர்ஷிப்/பெல்லோஷிப் ஹெல்ப்லைன்",
                            "tht8": "தேசிய உதவித்தொகை போர்டல் ஹெல்ப்லைன்",
                            "tht9": "சக்ஷம் ஹெல்ப்லைன்",
                            "tht10": "ராகிங் எதிர்ப்பு ஹெல்ப்லைன்",
                            "tht11": "எங்கள் பணிப்பாய்வு",
                            "tht12": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
                            "tht13": "ஒரு HEI எவ்வாறு பதிவு செய்ய வேண்டும்?",
                            "tht14": "HEI ஏற்கனவே அது சேர்ந்த பல்கலைக்கழகத்தால் பதிவு செய்யப்பட்டுள்ளது. மேலும், HEI ஒரு பல்கலைக்கழகமாக இருந்தால், அது அதைச் சேர்ந்த ஒழுங்குமுறை அமைப்பில் பதிவு செய்யப்பட்டிருக்கும். இதன் விளைவாக, HEIக்கள் தங்கள் தலைமையகத்தால் வழங்கப்பட்ட உள்நுழைவு சான்றுகளைப் பயன்படுத்தி எங்கள் தளத்திலிருந்து நேரடியாக உள்நுழைய முடியும்.",
                            "tht15": "நிறுவனத்தின் குறை தீர்க்கும் நடைமுறை என்ன?",
                            "tht16": "அதன் குறையைத் தீர்க்க, ஒரு நிறுவனம் அதன் பல்கலைக்கழகம்/ஒழுங்குமுறை அமைப்பு வழங்கிய தனித்துவ அடையாள அட்டையைப் பயன்படுத்தி உள்நுழைய வேண்டும். பின்னர், அதன் டாஷ்போர்டு வழியாக, அது ஒரு புதிய குறையை தாக்கல் செய்யலாம். நிறுவனம் அதன் தற்போதைய குறைகளின் நிலையைப் பின்தொடரவும் பார்க்கவும் கண்காணிப்பு பலகையைப் பயன்படுத்தலாம். புகார் வரலாற்றில், நிறுவனம் கடந்த கால குறைகளையும் காணலாம்.",
                            "tht17": "மாணவர்கள்/ஆசிரியர்/ஊழியர்கள் குறை தீர்க்கும் நடைமுறை என்ன?",
                            "tht18": "பாதிக்கப்பட்ட மாணவர்/ஆசிரியர்/ஊழியர்கள் பதிவு தளத்தின் மூலம் பதிவு செய்யலாம், மேலும் அவர்களின் குறைகளை அவர்களின் தனிப்பட்ட பல்கலைக்கழகங்கள் பதிவு செய்து தீர்க்கப்படும். மாணவர்/ஆசிரியர்/ஊழியர்கள் தங்கள் கோரிக்கையை ஒழுங்குபடுத்தும் அமைப்பின் பொதுக் குறைதீர்ப்புப் பிரிவிற்குத் தெரிவிக்க விரும்பினால், அவர்கள் அவ்வாறு செய்யலாம்.",
                            "tht19": "ஒவ்வொரு நிறுவனமும் அதன் பணியிலிருந்து எழும் பொதுக் குறைகளைத் தீர்ப்பதற்கான அமைப்பை உருவாக்க வேண்டும். குறை தீர்க்கும் பொறிமுறையானது எந்தவொரு அமைப்பின் இயந்திரத்தின் ஒருங்கிணைந்த பகுதியாக இருக்க வேண்டும். திறமையான மற்றும் பயனுள்ள குறைகளை நிவர்த்தி செய்யும் முறையை நிறுவாத வரையில் எந்தவொரு நிறுவனமும் பொறுப்புணர்வு, பொறுப்புணர்வு மற்றும் பயனர் நட்பு என உரிமை கோர முடியாது. உண்மையில், ஒரு நிறுவனத்தின் குறைகளை நிவர்த்தி செய்யும் பொறிமுறையானது, நிறுவனத்தின் செயல்பாடு குறித்த முக்கியமான கருத்துக்களை வழங்குவதால், அதன் செயல்திறன் மற்றும் செயல்திறனை அளவிடுவதற்கான அளவீடு ஆகும். இது பொது மக்களுக்கும் மற்ற பங்குதாரர்களுக்கும் தரமான சேவையை தொந்தரவில்லாத முறையில் வழங்கவும், பின்னர் ஏற்படும் குறைகளை நீக்கவும் உதவுகிறது.",
                            "tht20": "UGC மிகவும் விரிவான பொது இடைமுகத்தைக் கொண்டுள்ளது. கல்வியின் ஒருங்கிணைந்த வளர்ச்சிக்கான இந்திய அரசாங்கத்தின் ஒழுங்குமுறை அமைப்பின் முதன்மைத் தலைவராக நாங்கள் இருப்பதால், ஒரு வலுவான பொதுக் குறைகள் பொறிமுறையை நிறுவுவது மிகவும் முக்கியமானது. இது உங்களை எளிதாக்குபவர் மற்றும் ஒழுங்குபடுத்துபவராக செயல்பட அனுமதிக்கும் மேலும் பொதுமக்களின் தேவைகளுக்கு நிறுவனத்தின் வினைத்திறனை அதிகரிக்கும். இதன் விளைவாக, நாங்கள் UGCக்கான மையப்படுத்தப்பட்ட உதவிப் பிரிவாக இருக்கிறோம். உயர்கல்வி நிறுவனங்கள் மற்றும் தனிநபர்கள் புகார்களை பதிவு செய்து குறிப்பிட்ட காலக்கெடுவுக்குள் தீர்வு காணலாம்.",
                            "tht21": "எங்களை பற்றி",
                            "tht22": "விரைவு இணைப்புகள்",
                            "tht23": "கணக்கு இல்லையா?",
                            "tht24": "பதிவு செய்யவும்",
                            "tht25": "உங்கள் கணக்கில் உள்நுழையவும்",
                            "tht26": "பொதுப் பதிவு",
                            "tht27": "பொதுப் பதிவேடு உங்கள் குறையைப் பதிவு செய்து அதைத் தீர்க்கவும். இந்த பதிவு HEIs (உயர் கல்வி நிறுவனங்கள்) மாணவர்கள், பேராசிரியர்கள் மற்றும் பணியாளர்களுக்காக ஒதுக்கப்பட்டுள்ளது. உயர் அதிகாரிகளும் குறை தீர்க்கும் அமைப்புகளும் தங்கள் உள்நுழைவுச் சான்றுகளைப் பயன்படுத்தி நேரடியாக உள்நுழையலாம்.ION",
                            "tht28": "இங்கே பதிவு செய்யவும்",
                            "tht29": "வரவேற்பு,",
                            "tht30": "நீங்கள் தவறவிட்ட சில குறைகள்",
                            "tht31": "தற்போதைய குறைகள்"
                        }

                    }
                })
            }
            else if (user_id.preffered_lang === "hindi") {
                res.status(200).json({
                    data: {
                        "_id": {
                            "$oid": "630890e9d19b9740398c26e8"
                        },
                        "lang": {
                            "hht1": "विश्वविद्यालय अनुदान आयोग के बारे में",
                            "hht2": "भारत, वेदों का देश और विविध दृष्टिकोणों का सबसे शानदार संलयन, दुनिया में सबसे प्रसिद्ध शैक्षिक प्रणालियों में से एक है। किसी प्रणाली का कुशल और व्यवस्थित संचालन उसके विकास के लिए आवश्यक है। सिस्टम के कई घटकों में प्रभावी संचार बनाए रखकर, हम इसे सुनिश्चित कर सकते हैं। यूजीसी का केंद्रीकृत सहायता प्रकोष्ठ यह जिम्मेदारी लेता है। संस्थान, छात्रों, प्रोफेसरों या नियोजित कर्मियों की किसी भी शिकायत की सराहना की जाती है।",
                            "hht3": "हेल्पलाइन @ यूजीसी",
                            "hht4": "विभाग का नाम",
                            "hht5": "ईमेल आईडी",
                            "hht6": "संपर्क संख्या",
                            "hht7": "छात्रवृत्ति/अध्येतावृत्ति हेल्पलाइन",
                            "hht8": "राष्ट्रीय छात्रवृत्ति पोर्टल हेल्पलाइन",
                            "hht9": "सक्षम हेल्पलाइन",
                            "hht10": "एंटी रैगिंग हेल्पलाइन",
                            "hht11": "हमारा कार्यप्रवाह",
                            "hht12": "सामान्य प्रश्न",
                            "hht13": "एक HEI को कैसे पंजीकरण करना चाहिए?",
                            "hht14": "एचईआई पहले से ही उस विश्वविद्यालय द्वारा पंजीकृत किया जा चुका है जिससे वह संबंधित है। और, यदि एचईआई एक विश्वविद्यालय है, तो वह उस नियामक निकाय के साथ पंजीकृत होगा जिससे वह संबंधित है। परिणामस्वरूप, HEI अपने पीठासीन निकाय द्वारा प्रदान किए गए लॉगिन क्रेडेंशियल का उपयोग करके सीधे हमारे प्लेटफॉर्म से लॉग इन कर सकते हैं।",
                            "hht15": "संस्थान की शिकायत समाधान प्रक्रिया क्या है?",
                            "hht16": "अपनी शिकायत का समाधान करने के लिए, एक संस्थान को अपने विश्वविद्यालय/नियामक निकाय द्वारा प्रदान की गई विशिष्ट आईडी का उपयोग करके लॉगिन करना होगा। फिर, अपने डैशबोर्ड के माध्यम से, यह एक नई शिकायत दर्ज कर सकता है। संस्थान अपनी वर्तमान शिकायत की स्थिति का पालन करने और देखने के लिए ट्रैकिंग बोर्ड का उपयोग कर सकता है। शिकायत इतिहास में, संस्थान पिछली शिकायतों को भी देख सकता है।",
                            "hht17": "छात्र/शिक्षक/कर्मचारी शिकायत समाधान प्रक्रिया क्या है?",
                            "hht18": "पीड़ित छात्र/शिक्षक/कर्मचारी पंजीकरण साइट के माध्यम से पंजीकरण कर सकते हैं, और उनकी शिकायत दर्ज की जाएगी और उनके व्यक्तिगत विश्वविद्यालयों द्वारा हल किया जाएगा। यदि छात्र/शिक्षक/कर्मचारी अपने दावे को नियामक निकाय के लोक शिकायत प्रकोष्ठ तक पहुँचाना चाहते हैं, तो वे ऐसा कर सकते हैं।",
                            "hht19": "प्रत्येक संगठन को अपने कार्य से उत्पन्न होने वाली जन शिकायतों के निवारण के लिए एक प्रणाली विकसित करनी चाहिए। शिकायत निवारण तंत्र किसी भी संगठन की मशीनरी का एक अभिन्न अंग होना चाहिए। कोई भी संगठन जब तक एक कुशल और प्रभावी शिकायत निवारण प्रणाली स्थापित नहीं करता है, तब तक वह जवाबदेह, जिम्मेदार और उपयोगकर्ता के अनुकूल होने का दावा नहीं कर सकता है। वास्तव में, किसी संगठन का शिकायत निवारण तंत्र उसकी दक्षता और प्रभावशीलता को मापने का पैमाना है क्योंकि यह संगठन के कामकाज पर महत्वपूर्ण प्रतिक्रिया प्रदान करता है। यह संगठन को जनता और अन्य हितधारकों को परेशानी मुक्त तरीके से गुणवत्तापूर्ण सेवा प्रदान करने और शिकायतों के कारण को समाप्त करने में मदद करता है।",
                            "hht20": "यूजीसी का सार्वजनिक इंटरफ़ेस अधिक व्यापक है। एक मजबूत लोक शिकायत तंत्र स्थापित करना विशेष रूप से महत्वपूर्ण है क्योंकि हम शिक्षा के समन्वित विकास के लिए भारत सरकार के नियामक निकाय के सर्वोच्च प्रमुख हैं। यह आपको एक सूत्रधार और नियामक के रूप में कार्य करने की अनुमति देगा और जनता की जरूरतों के लिए संगठन की प्रतिक्रिया को भी बढ़ाएगा। नतीजतन, हम यूजीसी के लिए केंद्रीकृत सहायता प्रकोष्ठ हैं। उच्च शिक्षा संस्थान और व्यक्ति शिकायत दर्ज कर सकते हैं और उन्हें एक निर्धारित समय सीमा के भीतर हल कर सकते हैं।",
                            "hht21": "हमारे बारे में",
                            "hht22": "त्वरित सम्पक",
                            "hht23": "खाता नहीं है?",
                            "hht24": "साइन अप करें",
                            "hht25": "अपने खाते में प्रवेश करें",
                            "hht26": "सार्वजनिक पंजीकरण",
                            "hht27": "सार्वजनिक पंजीकरण अपनी शिकायत दर्ज करें और उसका समाधान करें। यह पंजीकरण एचईआई (उच्च शिक्षा संस्थानों) के छात्रों, प्रोफेसरों और कर्मचारियों के लिए आरक्षित है। HEI और शिकायत निवारण निकाय अपने लॉगिन क्रेडेंशियल का उपयोग करके सीधे लॉग इन कर सकते हैं।ION",
                            "hht28": "यहां रजिस्टर करें",
                            "hht29": "स्वागत,",
                            "hht30": "कुछ शिकायतें जिन्हें आपने याद किया है",
                            "hht31": "वर्तमान शिकायतें"
                        }
                    }
                })
            }
        }
        if (role === "1B") {
            const student = await Officer.findById(user_id)
            if (!student) {
                res.status(200).json({
                    success: false,
                    message: "Could not find user"
                })
            }
            if (student.preffered_lang === "eng") {
                res.status(200).json({
                    data: {
                        "_id": {
                            "$oid": "6308905ad19b9740398c26e6"
                        },
                        "lang": {
                            "eht1": "ABOUT UNIVERSITY GRANTS COMMISSION",
                            "eht2": "India, the country of the Vedas and the most magnificent fusion of diverse perspectives, has one of the most well-known educational systems in the world. The efficient and orderly operation of a system is essential for its growth. By maintaining effective communication across the system's many components, we can make sure of this. The UGC's Centralised Assistance Cell takes this responsibility. Any complaints from the institution, students, professors, or employed personnel are appreciated.",
                            "eht3": "HELPLINE @ UGC",
                            "eht4": "NAME OF DEPARTMENT",
                            "eht5": "EMAIL ID",
                            "eht6": "CONTACT NUMBER",
                            "eht7": "Scholarship/Fellowship Helpline",
                            "eht8": "National Scholarship Portal Helpline",
                            "eht9": "Saksham Helpline",
                            "eht10": "Anti-ragging Helpline",
                            "eht11": "OUR WORKFLOW",
                            "eht12": "FAQ",
                            "eht13": "How should an HEI register?",
                            "eht14": "The HEI has already been registered by the university to which it belongs. And, if the HEI is a university, it will have been registered with the regulatory body to which it belongs. As a result, HEIs can log in directly from our platform using the login credentials supplied by their presiding body.",
                            "eht15": "What is the institute's grievance resolution procedure?",
                            "eht16": "To get its grievance resolved, an institute must login using the Unique Id provided by its university / Regulatory body . Then, via its dashboard, it may file a fresh grievance. The institute can use the tracking board to follow and view the status of its current grievance. In the grievance history, the institute may also see past grievances.",
                            "eht17": "What is the students/teacher/staff grievance resolution procedure?",
                            "eht18": "The aggrieved student/teacher/staff can register through the registration site, and their grievance will be recorded and resolved by their individual universities. If the student/teacher/staff want to escalate their claim to the regulating body's Public grievance cell, they can do so.",
                            "eht19": "Every organisation must evolve a system for redressal of public grievances arising from its work. The grievance redressal mechanism should form an integral part of the machinery of any organisation. No organisation can claim to be accountable,responsible and user-friendly unless it has established an efficient and effective grievance redressal system. In fact, the grievances redressal mechanism of an organisation is the gauge to measure its efficiency and effectiveness as it provides important feedback on the working of the organisation. It helps the organisation to deliver quality service to the public and other stakeholders in a hassle-free manner and in eliminating then cause of grievances.",
                            "eht20": "UGC has a more extensive public interface. It is especially crucial to establish a strong public grievances mechanism because we are the paramount head of the government of India's regulatory body for the coordinated development of education. This will allow you to act as a facilitator and regulator and will also increase the organisation's responsiveness to the needs of the public. As a result, we are the centralised assistance cell for UGC. Higher education institutions and individuals can file complaints and have them resolved within a set time frame.",
                            "eht21": "About Us",
                            "eht22": "Quick Links",
                            "eht23": "Don't have an account?",
                            "eht24": "Sign up",
                            "eht25": "Log in to your account",
                            "eht26": "PUBLIC REGISTRATION",
                            "eht27": "Register your grievance and have it resolved. This registration is reserved for students, professors, and employees of HEIs (Higher Education Institutes). HEIs and grievance redressal bodies can log in directly using their login credentials.",
                            "eht28": "Register Here",
                            "eht29": "Welcome,",
                            "eht30": "Some grievances you've missed",
                            "eht31": "Current grievances"
                        }
                    }
                })
            }
            else if (user_id.preffered_lang === "tamil") {
                res.status(200).json({
                    data: {

                        "_id": {
                            "$oid": "6308909dd19b9740398c26e7"
                        },
                        "lang": {
                            "tht1": "பல்கலைக்கழக மானிய ஆணையம் பற்றி",
                            "tht2": "இந்தியா, வேதங்களின் நாடு மற்றும் பலதரப்பட்ட கண்ணோட்டங்களின் மிக அற்புதமான இணைவு, உலகிலேயே மிகவும் பிரபலமான கல்வி முறைகளில் ஒன்றாகும். ஒரு அமைப்பின் திறமையான மற்றும் ஒழுங்கான செயல்பாடு அதன் வளர்ச்சிக்கு அவசியம். கணினியின் பல கூறுகளில் பயனுள்ள தகவல்தொடர்புகளை பராமரிப்பதன் மூலம், இதை நாம் உறுதிசெய்ய முடியும். யுஜிசியின் மையப்படுத்தப்பட்ட உதவிப் பிரிவு இந்தப் பொறுப்பை ஏற்கிறது. நிறுவனம், மாணவர்கள், பேராசிரியர்கள் அல்லது பணியமர்த்தப்பட்ட பணியாளர்களிடமிருந்து வரும் புகார்கள் பாராட்டப்படுகின்றன.",
                            "tht3": "ஹெல்ப்லைன் @ யுஜிசி",
                            "tht4": "துறையின் பெயர்",
                            "tht5": "மின்னஞ்சல் முகவரி",
                            "tht6": "தொடர்பு எண்",
                            "tht7": "ஸ்காலர்ஷிப்/பெல்லோஷிப் ஹெல்ப்லைன்",
                            "tht8": "தேசிய உதவித்தொகை போர்டல் ஹெல்ப்லைன்",
                            "tht9": "சக்ஷம் ஹெல்ப்லைன்",
                            "tht10": "ராகிங் எதிர்ப்பு ஹெல்ப்லைன்",
                            "tht11": "எங்கள் பணிப்பாய்வு",
                            "tht12": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
                            "tht13": "ஒரு HEI எவ்வாறு பதிவு செய்ய வேண்டும்?",
                            "tht14": "HEI ஏற்கனவே அது சேர்ந்த பல்கலைக்கழகத்தால் பதிவு செய்யப்பட்டுள்ளது. மேலும், HEI ஒரு பல்கலைக்கழகமாக இருந்தால், அது அதைச் சேர்ந்த ஒழுங்குமுறை அமைப்பில் பதிவு செய்யப்பட்டிருக்கும். இதன் விளைவாக, HEIக்கள் தங்கள் தலைமையகத்தால் வழங்கப்பட்ட உள்நுழைவு சான்றுகளைப் பயன்படுத்தி எங்கள் தளத்திலிருந்து நேரடியாக உள்நுழைய முடியும்.",
                            "tht15": "நிறுவனத்தின் குறை தீர்க்கும் நடைமுறை என்ன?",
                            "tht16": "அதன் குறையைத் தீர்க்க, ஒரு நிறுவனம் அதன் பல்கலைக்கழகம்/ஒழுங்குமுறை அமைப்பு வழங்கிய தனித்துவ அடையாள அட்டையைப் பயன்படுத்தி உள்நுழைய வேண்டும். பின்னர், அதன் டாஷ்போர்டு வழியாக, அது ஒரு புதிய குறையை தாக்கல் செய்யலாம். நிறுவனம் அதன் தற்போதைய குறைகளின் நிலையைப் பின்தொடரவும் பார்க்கவும் கண்காணிப்பு பலகையைப் பயன்படுத்தலாம். புகார் வரலாற்றில், நிறுவனம் கடந்த கால குறைகளையும் காணலாம்.",
                            "tht17": "மாணவர்கள்/ஆசிரியர்/ஊழியர்கள் குறை தீர்க்கும் நடைமுறை என்ன?",
                            "tht18": "பாதிக்கப்பட்ட மாணவர்/ஆசிரியர்/ஊழியர்கள் பதிவு தளத்தின் மூலம் பதிவு செய்யலாம், மேலும் அவர்களின் குறைகளை அவர்களின் தனிப்பட்ட பல்கலைக்கழகங்கள் பதிவு செய்து தீர்க்கப்படும். மாணவர்/ஆசிரியர்/ஊழியர்கள் தங்கள் கோரிக்கையை ஒழுங்குபடுத்தும் அமைப்பின் பொதுக் குறைதீர்ப்புப் பிரிவிற்குத் தெரிவிக்க விரும்பினால், அவர்கள் அவ்வாறு செய்யலாம்.",
                            "tht19": "ஒவ்வொரு நிறுவனமும் அதன் பணியிலிருந்து எழும் பொதுக் குறைகளைத் தீர்ப்பதற்கான அமைப்பை உருவாக்க வேண்டும். குறை தீர்க்கும் பொறிமுறையானது எந்தவொரு அமைப்பின் இயந்திரத்தின் ஒருங்கிணைந்த பகுதியாக இருக்க வேண்டும். திறமையான மற்றும் பயனுள்ள குறைகளை நிவர்த்தி செய்யும் முறையை நிறுவாத வரையில் எந்தவொரு நிறுவனமும் பொறுப்புணர்வு, பொறுப்புணர்வு மற்றும் பயனர் நட்பு என உரிமை கோர முடியாது. உண்மையில், ஒரு நிறுவனத்தின் குறைகளை நிவர்த்தி செய்யும் பொறிமுறையானது, நிறுவனத்தின் செயல்பாடு குறித்த முக்கியமான கருத்துக்களை வழங்குவதால், அதன் செயல்திறன் மற்றும் செயல்திறனை அளவிடுவதற்கான அளவீடு ஆகும். இது பொது மக்களுக்கும் மற்ற பங்குதாரர்களுக்கும் தரமான சேவையை தொந்தரவில்லாத முறையில் வழங்கவும், பின்னர் ஏற்படும் குறைகளை நீக்கவும் உதவுகிறது.",
                            "tht20": "UGC மிகவும் விரிவான பொது இடைமுகத்தைக் கொண்டுள்ளது. கல்வியின் ஒருங்கிணைந்த வளர்ச்சிக்கான இந்திய அரசாங்கத்தின் ஒழுங்குமுறை அமைப்பின் முதன்மைத் தலைவராக நாங்கள் இருப்பதால், ஒரு வலுவான பொதுக் குறைகள் பொறிமுறையை நிறுவுவது மிகவும் முக்கியமானது. இது உங்களை எளிதாக்குபவர் மற்றும் ஒழுங்குபடுத்துபவராக செயல்பட அனுமதிக்கும் மேலும் பொதுமக்களின் தேவைகளுக்கு நிறுவனத்தின் வினைத்திறனை அதிகரிக்கும். இதன் விளைவாக, நாங்கள் UGCக்கான மையப்படுத்தப்பட்ட உதவிப் பிரிவாக இருக்கிறோம். உயர்கல்வி நிறுவனங்கள் மற்றும் தனிநபர்கள் புகார்களை பதிவு செய்து குறிப்பிட்ட காலக்கெடுவுக்குள் தீர்வு காணலாம்.",
                            "tht21": "எங்களை பற்றி",
                            "tht22": "விரைவு இணைப்புகள்",
                            "tht23": "கணக்கு இல்லையா?",
                            "tht24": "பதிவு செய்யவும்",
                            "tht25": "உங்கள் கணக்கில் உள்நுழையவும்",
                            "tht26": "பொதுப் பதிவு",
                            "tht27": "பொதுப் பதிவேடு உங்கள் குறையைப் பதிவு செய்து அதைத் தீர்க்கவும். இந்த பதிவு HEIs (உயர் கல்வி நிறுவனங்கள்) மாணவர்கள், பேராசிரியர்கள் மற்றும் பணியாளர்களுக்காக ஒதுக்கப்பட்டுள்ளது. உயர் அதிகாரிகளும் குறை தீர்க்கும் அமைப்புகளும் தங்கள் உள்நுழைவுச் சான்றுகளைப் பயன்படுத்தி நேரடியாக உள்நுழையலாம்.ION",
                            "tht28": "இங்கே பதிவு செய்யவும்",
                            "tht29": "வரவேற்பு,",
                            "tht30": "நீங்கள் தவறவிட்ட சில குறைகள்",
                            "tht31": "தற்போதைய குறைகள்"
                        }

                    }
                })
            }
            else if (user_id.preffered_lang === "hindi") {
                res.status(200).json({
                    data: {
                        "_id": {
                            "$oid": "630890e9d19b9740398c26e8"
                        },
                        "lang": {
                            "hht1": "विश्वविद्यालय अनुदान आयोग के बारे में",
                            "hht2": "भारत, वेदों का देश और विविध दृष्टिकोणों का सबसे शानदार संलयन, दुनिया में सबसे प्रसिद्ध शैक्षिक प्रणालियों में से एक है। किसी प्रणाली का कुशल और व्यवस्थित संचालन उसके विकास के लिए आवश्यक है। सिस्टम के कई घटकों में प्रभावी संचार बनाए रखकर, हम इसे सुनिश्चित कर सकते हैं। यूजीसी का केंद्रीकृत सहायता प्रकोष्ठ यह जिम्मेदारी लेता है। संस्थान, छात्रों, प्रोफेसरों या नियोजित कर्मियों की किसी भी शिकायत की सराहना की जाती है।",
                            "hht3": "हेल्पलाइन @ यूजीसी",
                            "hht4": "विभाग का नाम",
                            "hht5": "ईमेल आईडी",
                            "hht6": "संपर्क संख्या",
                            "hht7": "छात्रवृत्ति/अध्येतावृत्ति हेल्पलाइन",
                            "hht8": "राष्ट्रीय छात्रवृत्ति पोर्टल हेल्पलाइन",
                            "hht9": "सक्षम हेल्पलाइन",
                            "hht10": "एंटी रैगिंग हेल्पलाइन",
                            "hht11": "हमारा कार्यप्रवाह",
                            "hht12": "सामान्य प्रश्न",
                            "hht13": "एक HEI को कैसे पंजीकरण करना चाहिए?",
                            "hht14": "एचईआई पहले से ही उस विश्वविद्यालय द्वारा पंजीकृत किया जा चुका है जिससे वह संबंधित है। और, यदि एचईआई एक विश्वविद्यालय है, तो वह उस नियामक निकाय के साथ पंजीकृत होगा जिससे वह संबंधित है। परिणामस्वरूप, HEI अपने पीठासीन निकाय द्वारा प्रदान किए गए लॉगिन क्रेडेंशियल का उपयोग करके सीधे हमारे प्लेटफॉर्म से लॉग इन कर सकते हैं।",
                            "hht15": "संस्थान की शिकायत समाधान प्रक्रिया क्या है?",
                            "hht16": "अपनी शिकायत का समाधान करने के लिए, एक संस्थान को अपने विश्वविद्यालय/नियामक निकाय द्वारा प्रदान की गई विशिष्ट आईडी का उपयोग करके लॉगिन करना होगा। फिर, अपने डैशबोर्ड के माध्यम से, यह एक नई शिकायत दर्ज कर सकता है। संस्थान अपनी वर्तमान शिकायत की स्थिति का पालन करने और देखने के लिए ट्रैकिंग बोर्ड का उपयोग कर सकता है। शिकायत इतिहास में, संस्थान पिछली शिकायतों को भी देख सकता है।",
                            "hht17": "छात्र/शिक्षक/कर्मचारी शिकायत समाधान प्रक्रिया क्या है?",
                            "hht18": "पीड़ित छात्र/शिक्षक/कर्मचारी पंजीकरण साइट के माध्यम से पंजीकरण कर सकते हैं, और उनकी शिकायत दर्ज की जाएगी और उनके व्यक्तिगत विश्वविद्यालयों द्वारा हल किया जाएगा। यदि छात्र/शिक्षक/कर्मचारी अपने दावे को नियामक निकाय के लोक शिकायत प्रकोष्ठ तक पहुँचाना चाहते हैं, तो वे ऐसा कर सकते हैं।",
                            "hht19": "प्रत्येक संगठन को अपने कार्य से उत्पन्न होने वाली जन शिकायतों के निवारण के लिए एक प्रणाली विकसित करनी चाहिए। शिकायत निवारण तंत्र किसी भी संगठन की मशीनरी का एक अभिन्न अंग होना चाहिए। कोई भी संगठन जब तक एक कुशल और प्रभावी शिकायत निवारण प्रणाली स्थापित नहीं करता है, तब तक वह जवाबदेह, जिम्मेदार और उपयोगकर्ता के अनुकूल होने का दावा नहीं कर सकता है। वास्तव में, किसी संगठन का शिकायत निवारण तंत्र उसकी दक्षता और प्रभावशीलता को मापने का पैमाना है क्योंकि यह संगठन के कामकाज पर महत्वपूर्ण प्रतिक्रिया प्रदान करता है। यह संगठन को जनता और अन्य हितधारकों को परेशानी मुक्त तरीके से गुणवत्तापूर्ण सेवा प्रदान करने और शिकायतों के कारण को समाप्त करने में मदद करता है।",
                            "hht20": "यूजीसी का सार्वजनिक इंटरफ़ेस अधिक व्यापक है। एक मजबूत लोक शिकायत तंत्र स्थापित करना विशेष रूप से महत्वपूर्ण है क्योंकि हम शिक्षा के समन्वित विकास के लिए भारत सरकार के नियामक निकाय के सर्वोच्च प्रमुख हैं। यह आपको एक सूत्रधार और नियामक के रूप में कार्य करने की अनुमति देगा और जनता की जरूरतों के लिए संगठन की प्रतिक्रिया को भी बढ़ाएगा। नतीजतन, हम यूजीसी के लिए केंद्रीकृत सहायता प्रकोष्ठ हैं। उच्च शिक्षा संस्थान और व्यक्ति शिकायत दर्ज कर सकते हैं और उन्हें एक निर्धारित समय सीमा के भीतर हल कर सकते हैं।",
                            "hht21": "हमारे बारे में",
                            "hht22": "त्वरित सम्पक",
                            "hht23": "खाता नहीं है?",
                            "hht24": "साइन अप करें",
                            "hht25": "अपने खाते में प्रवेश करें",
                            "hht26": "सार्वजनिक पंजीकरण",
                            "hht27": "सार्वजनिक पंजीकरण अपनी शिकायत दर्ज करें और उसका समाधान करें। यह पंजीकरण एचईआई (उच्च शिक्षा संस्थानों) के छात्रों, प्रोफेसरों और कर्मचारियों के लिए आरक्षित है। HEI और शिकायत निवारण निकाय अपने लॉगिन क्रेडेंशियल का उपयोग करके सीधे लॉग इन कर सकते हैं।ION",
                            "hht28": "यहां रजिस्टर करें",
                            "hht29": "स्वागत,",
                            "hht30": "कुछ शिकायतें जिन्हें आपने याद किया है",
                            "hht31": "वर्तमान शिकायतें"
                        }
                    }
                })
            }
        }

    } catch (error) {
        res.status(200).json({
            success:false,
            message:error.message
        })

    }
}