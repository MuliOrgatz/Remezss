import React from 'react';
import About from './components/about/About'
import Contact from './components/connect/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Services from './components/services/Services'
import PlaceOM from './components/map/PlaceOM'

import './App.css';
import NavBar from './components/navbar/NavBar';
import Gallery from './components/gallery/Gallery';

function App() {
  const telephonNumber = "0538778191"
  const galleryLinks = [
    {
      title:"מגבוני שקמה למבוגרים",
      caption: "מוצרים משלימים",
      imgUrl:require('./assets/img/magvonimShik.jpg'),
      moreDetails:"",
      amount:"72",
      measure:""
    },
    {
      title:"סדינית שקמה",
      caption: "סדיניות",
      imgUrl:require('./assets/img/sdinitShikma.jpg'),
      moreDetails:"	ספיגה משופרת",
      amount:"15",
      measure:"65/99"
    },
    {
      title:"תחתוני seni avctive for man",
      caption: "תחתוני ספיגה",
      imgUrl:require('./assets/img/seniActiveForMan.jpg'),
      moreDetails:["תחתון חד פעמי סופג לגבר סאני אקטיב בייסיק צבע אפור עם יכולת ספיגה גבוה במיוחד", <br key={'1'}/> , "תחתון רך ונעים לגבר, עם התאמה אידיאלית מושלמת לגוף.",<br key={'2 '}/>,"התחתון נושם, מה שמאפשר תנועת אוויר החוצה על מנת לאוורר את העור ולתת תחושת יובש. בעל שכבה המאפשרת פיזור אחיד של נוזלים. כמו כן, שכבה נוספת סופגת. לתחתון לוכד נוזלים על מנת למנוע דליפות מהצדדים. לתחתון חומר מפחית ריחות המונע אי נעימות. בעל תקן אירופאי ce"],
      amount:"16",
      measure:"S, M, L, XL"
    },
    {
      title:"פדים seni lady extra",
      caption: "פדים סופגים",
      imgUrl:require('./assets/img/seniLadyExtra.jpg'),
      moreDetails:["פדים מסדרת סאני ליידי לנשים לבריחת שתן / לנשים לאחר לידה",<br key={'1'}/>,"פדים נעימים המתאימים לדליפה קלה ובינונית עד לכבדה, עם חומר אבקה פולימר אשר הופך את הנוזל לג׳ל. מותאמים בצורה אידיאלית למבנה הגוף שלך, עם שכבה סופגת לתחושת יובש ומניעת אדמומיות העור. שכבה נוספת מאפשרת פיזור אחיד של הנוזלים, עם חומר מפחית ריחות לא נעימים. לפדים מגע כותנה נושם לתחושה אוורירית ונעימה. עם הגנה נוספת בצדדים למניעת דליפות."],
      amount:"15",
      measure:"15/28"
    },
    {
      title:"פד לגבר seni man normal",
      caption: "פדים לגבר",
      imgUrl:require('./assets/img/seniMan.jpg'),
      moreDetails: ["פדים מסדרת סאני מן לגבר לבריחת שתן/ ולאחר ניתוח פרוסטטה",<br key={'1'}/>, "פדים עם התאמה אנטומית במיוחד לגבר, המתאימים לדליפה קלה ובינונית עד לכבדה. השכבה החיצונית בעלת מגע רך ונעים של כותנה נושמת. שכבה פנימית אוורירית וסופגת עם פיזור אחיד של נוזלים. לפדים הגנה נוספת גם בצדדים למניעת דליפות. למניעת ריחות לא נעימים הוספנו לפדים חומר מפחית ריחות ואבקת פולימור אשר הופכת את הנוזל לג׳ל." ,<br key={'2'}/>," בעל תקן אירופאי ce"],
      amount:"20",
      measure:"M"
    },
    {
      title:"חיתול יום לילה seni super",
      caption: "חיתולים למבוגרים",
      imgUrl:require('./assets/img/seniSuper.jpg'),
      moreDetails:["חיתול לשימוש יום ולילה להרטבה בינונית סופר סני" , <br key={'1'}/> , "חיתול נושם בהתאמה מיוחדת לגוף עם גמישות ואלסטיות להתאמה מרבית.כמו כן, לחיתול תנועת אוויר תמידית למניעת פצעים ואדמומיות העור. החיתול נעים ורך למגע, דבר אשר נותן תחושת יובש לעור באופן תמידי." , <br key={'2'}/>, "לחיתול שתי שכבות:",<br key={'3'}/>,"האחת מאפשרת פיזור אחיד של הנוזלים והשניה היא שכבה אשר סופגת את הנוזלים ומנטרלת ריחות לא נעימים. לחיתול מדבקות אלסטיות על מנת לאפשר שימוש רב פעמי. לחיתול תקן אירופאי ce."],
      amount:"30",
      measure:"S, M, L, XL"
    },
    {
      title:"חיתולי לילה seni super plus",
      caption: "חיתולים למבוגרים",
      imgUrl:require('./assets/img/seniSuperPlus.jpg'),
      moreDetails:["חיתול לשימוש לילה להרטבה כבדה סופר סני פלוס",<br key={'1'}/>,"חיתול רך ונעים בעל גזרה מיוחדת להתאמה מושלמת. לחיתול שכבה מיוחדת אשר מאפשרת פיזור אחיד של הנוזלים, ושכבה נוספת אשר סופגת אותם באופן מיידי ובכך מנטרלת ריחות לא נעימים ונותנת תחושת יובש עם העור.",<br key={'2'}/>, "כמו כן, ישנה תנועת אוויר תמידית, דבר אשר מונע פצעים ואדמומיות של האזור. מגיע עם מדבקות אלסטיות לשימוש רב פעמי.",<br key={'3'}/>, "לחיתול תקן אירופאי ce"],
      amount:"30",
      measure:"XS, S, M, L, XL"
    },
    {
      title:"שקמה over night",
      caption: "חיתולים למבוגרים",
      imgUrl:require('./assets/img/shkmaOverNight.jpg'),
      moreDetails:"ספיגת לילה כבידה",
      amount:"15",
      measure:"M, L, XL"
    },
    {
      title:"שקמה super night",
      caption: "חיתולים למבוגרים",
      imgUrl:require('./assets/img/shkmaSuperNight.jpg'),
      moreDetails:"לשימוש בלילה ספיגה גבוהה",
      amount:"15",
      measure:"M, L"
    },
    {
      title:"ספיגה כבדה super seni trio",
      caption: "חיתולים למבוגרים",
      imgUrl:require('./assets/img/SuperSeniTrio.jpg'),
      moreDetails:["חיתול לשימוש לילה להרטבה כבדה במיוחד סופר טריו",<br key={'1'}/>,"התאמה מושלמת לגוף בזכות גזרת החיתול אשר כוללת גמישות, אלסטיות ומדבקות לשימוש רב פעמי. החיתול בעל מגע נעים אשר נותן תחושת יובש. כמו כן, החיתול שלנו הינו חיתול נושם על מנת לאפשר תנועת אוויר החוצה, דבר המונע פצעים ואדמומיות בעור.",<br key={'2'}/>," לחיתול 2 שכבות: אחת מפזרת את הנוזלים בצורה אחידה, והשניה סופגרת ומנטרלת ריחות לא נעימים.",<br key={'3'}/>,"בעל תקן אירופאי CE"],
      amount:"10",
      measure:"S, M, L, XL"
    },
  ]
  return (
    <div className="App">
      
        <NavBar telephonNumber={telephonNumber}></NavBar>
        <Header></Header>
        <Services></Services>
        
        <Gallery galleryLinks={galleryLinks} telephonNumber={telephonNumber}></Gallery>

        <About></About>
        
        <PlaceOM ></PlaceOM>
         
        <Contact></Contact>

        <Footer telephonNumber={telephonNumber}></Footer>

    </div>
  );
}

export default App;
