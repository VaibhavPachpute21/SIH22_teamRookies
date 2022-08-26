import {
    getLanguageCode,
    getSupportedLanguages,
    i18n,
    setLanguage
  } from 'web-translate';

var eht1 = "ABOUT UNIVERSITY GRANTS COMMISSION";
var hht1="विश्वविद्यालय अनुदान आयोग के बारे में"
var tht1="பல்கலைக்கழக மானிய ஆணையம் பற்றி";


var eht2 = "India, the country of the Vedas and the most magnificent fusion of diverse perspectives, has one of the most well-known educational systems in the world. The efficient and orderly operation of a system is essential for its growth. By maintaining effective communication across the system's many components, we can make sure of this. The UGC's Centralised Assistance Cell takes this responsibility. Any complaints from the institution, students, professors, or employed personnel are appreciated.";
var hht2="भारत, वेदों का देश और विविध दृष्टिकोणों का सबसे शानदार संलयन, दुनिया में सबसे प्रसिद्ध शैक्षिक प्रणालियों में से एक है। किसी प्रणाली का कुशल और व्यवस्थित संचालन उसके विकास के लिए आवश्यक है। सिस्टम के कई घटकों में प्रभावी संचार बनाए रखकर, हम इसे सुनिश्चित कर सकते हैं। यूजीसी का केंद्रीकृत सहायता प्रकोष्ठ यह जिम्मेदारी लेता है। संस्थान, छात्रों, प्रोफेसरों या नियोजित कर्मियों की किसी भी शिकायत की सराहना की जाती है।"
var tht2="இந்தியா, வேதங்களின் நாடு மற்றும் பலதரப்பட்ட கண்ணோட்டங்களின் மிக அற்புதமான இணைவு, உலகிலேயே மிகவும் பிரபலமான கல்வி முறைகளில் ஒன்றாகும். ஒரு அமைப்பின் திறமையான மற்றும் ஒழுங்கான செயல்பாடு அதன் வளர்ச்சிக்கு அவசியம். கணினியின் பல கூறுகளில் பயனுள்ள தகவல்தொடர்புகளை பராமரிப்பதன் மூலம், இதை நாம் உறுதிசெய்ய முடியும். யுஜிசியின் மையப்படுத்தப்பட்ட உதவிப் பிரிவு இந்தப் பொறுப்பை ஏற்கிறது. நிறுவனம், மாணவர்கள், பேராசிரியர்கள் அல்லது பணியமர்த்தப்பட்ட பணியாளர்களிடமிருந்து வரும் புகார்கள் பாராட்டப்படுகின்றன.";

var eht3="HELPLINE @ UGC";
var hht3="हेल्पलाइन @ यूजीसी";
var tht3="ஹெல்ப்லைன் @ யுஜிசி";

var eht4="NAME OF DEPARTMENT";
var hht4="विभाग का नाम"
var tht4="துறையின் பெயர்"

var eht5="EMAIL ID";
var hht5="ईमेल आईडी"
var tht5="மின்னஞ்சல் முகவரி"

var eht6="CONTACT NUMBER";
var hht6="संपर्क संख्या"
var tht6="தொடர்பு எண்"

var eht7="Scholarship/Fellowship Helpline";
var hht7="छात्रवृत्ति/अध्येतावृत्ति हेल्पलाइन"
var tht7="ஸ்காலர்ஷிப்/பெல்லோஷிப் ஹெல்ப்லைன்"

var eht8="National Scholarship Portal Helpline";
var hht8="राष्ट्रीय छात्रवृत्ति पोर्टल हेल्पलाइन"
var tht8="தேசிய உதவித்தொகை போர்டல் ஹெல்ப்லைன்"

var eht9="Saksham Helpline";
var hht9="सक्षम हेल्पलाइन"
var tht9="சக்ஷம் ஹெல்ப்லைன்"

var eht10="Anti-ragging Helpline";
var hht10="एंटी रैगिंग हेल्पलाइन"
var tht10="ராகிங் எதிர்ப்பு ஹெல்ப்லைன்"

var eht11="OUR WORKFLOW";
var hht11="हमारा कार्यप्रवाह"
var tht11="எங்கள் பணிப்பாய்வு"

var eht12="FAQ";
var hht12="सामान्य प्रश्न"
var tht12="அடிக்கடி கேட்கப்படும் கேள்விகள்"

var eht13="How should an HEI register?";
var hht13="एक HEI को कैसे पंजीकरण करना चाहिए?"
var tht13="ஒரு HEI எவ்வாறு பதிவு செய்ய வேண்டும்?"

var eht14="The HEI has already been registered by the university to which it belongs. And, if the HEI is a university, it will have been registered with the regulatory body to which it belongs. As a result, HEIs can log in directly from our platform using the login credentials supplied by their presiding body.";
var hht14="एचईआई पहले से ही उस विश्वविद्यालय द्वारा पंजीकृत किया जा चुका है जिससे वह संबंधित है। और, यदि एचईआई एक विश्वविद्यालय है, तो वह उस नियामक निकाय के साथ पंजीकृत होगा जिससे वह संबंधित है। परिणामस्वरूप, HEI अपने पीठासीन निकाय द्वारा प्रदान किए गए लॉगिन क्रेडेंशियल का उपयोग करके सीधे हमारे प्लेटफॉर्म से लॉग इन कर सकते हैं।"
var tht14="HEI ஏற்கனவே அது சேர்ந்த பல்கலைக்கழகத்தால் பதிவு செய்யப்பட்டுள்ளது. மேலும், HEI ஒரு பல்கலைக்கழகமாக இருந்தால், அது அதைச் சேர்ந்த ஒழுங்குமுறை அமைப்பில் பதிவு செய்யப்பட்டிருக்கும். இதன் விளைவாக, HEIக்கள் தங்கள் தலைமையகத்தால் வழங்கப்பட்ட உள்நுழைவு சான்றுகளைப் பயன்படுத்தி எங்கள் தளத்திலிருந்து நேரடியாக உள்நுழைய முடியும்."

var eht15="What is the institute's grievance resolution procedure?";
var hht15="संस्थान की शिकायत समाधान प्रक्रिया क्या है?"
var tht15="நிறுவனத்தின் குறை தீர்க்கும் நடைமுறை என்ன?"

var eht16="To get its grievance resolved, an institute must login using the Unique Id provided by its university / Regulatory body . Then, via its dashboard, it may file a fresh grievance. The institute can use the tracking board to follow and view the status of its current grievance. In the grievance history, the institute may also see past grievances.";
var hht16="अपनी शिकायत का समाधान करने के लिए, एक संस्थान को अपने विश्वविद्यालय/नियामक निकाय द्वारा प्रदान की गई विशिष्ट आईडी का उपयोग करके लॉगिन करना होगा। फिर, अपने डैशबोर्ड के माध्यम से, यह एक नई शिकायत दर्ज कर सकता है। संस्थान अपनी वर्तमान शिकायत की स्थिति का पालन करने और देखने के लिए ट्रैकिंग बोर्ड का उपयोग कर सकता है। शिकायत इतिहास में, संस्थान पिछली शिकायतों को भी देख सकता है।"
var tht16="அதன் குறையைத் தீர்க்க, ஒரு நிறுவனம் அதன் பல்கலைக்கழகம்/ஒழுங்குமுறை அமைப்பு வழங்கிய தனித்துவ அடையாள அட்டையைப் பயன்படுத்தி உள்நுழைய வேண்டும். பின்னர், அதன் டாஷ்போர்டு வழியாக, அது ஒரு புதிய குறையை தாக்கல் செய்யலாம். நிறுவனம் அதன் தற்போதைய குறைகளின் நிலையைப் பின்தொடரவும் பார்க்கவும் கண்காணிப்பு பலகையைப் பயன்படுத்தலாம். புகார் வரலாற்றில், நிறுவனம் கடந்த கால குறைகளையும் காணலாம்."

var eht17="What is the students/teacher/staff grievance resolution procedure?";
var hht17="छात्र/शिक्षक/कर्मचारी शिकायत समाधान प्रक्रिया क्या है?"
var tht17="மாணவர்கள்/ஆசிரியர்/ஊழியர்கள் குறை தீர்க்கும் நடைமுறை என்ன?"

var eht18="The aggrieved student/teacher/staff can register through the registration site, and their grievance will be recorded and resolved by their individual universities. If the student/teacher/staff want to escalate their claim to the regulating body's Public grievance cell, they can do so.";
var hht18="पीड़ित छात्र/शिक्षक/कर्मचारी पंजीकरण साइट के माध्यम से पंजीकरण कर सकते हैं, और उनकी शिकायत दर्ज की जाएगी और उनके व्यक्तिगत विश्वविद्यालयों द्वारा हल किया जाएगा। यदि छात्र/शिक्षक/कर्मचारी अपने दावे को नियामक निकाय के लोक शिकायत प्रकोष्ठ तक पहुँचाना चाहते हैं, तो वे ऐसा कर सकते हैं।"
var tht18="பாதிக்கப்பட்ட மாணவர்/ஆசிரியர்/ஊழியர்கள் பதிவு தளத்தின் மூலம் பதிவு செய்யலாம், மேலும் அவர்களின் குறைகளை அவர்களின் தனிப்பட்ட பல்கலைக்கழகங்கள் பதிவு செய்து தீர்க்கப்படும். மாணவர்/ஆசிரியர்/ஊழியர்கள் தங்கள் கோரிக்கையை ஒழுங்குபடுத்தும் அமைப்பின் பொதுக் குறைதீர்ப்புப் பிரிவிற்குத் தெரிவிக்க விரும்பினால், அவர்கள் அவ்வாறு செய்யலாம்."

var eht19="How should an HEI register?";
var hht19="एक HEI को कैसे पंजीकरण करना चाहिए?"
var tht19="ஒரு HEI எவ்வாறு பதிவு செய்ய வேண்டும்?"






