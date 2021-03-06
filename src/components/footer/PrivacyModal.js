import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default ({isModalOpen,closeModal}) =>{
    return(
        <Modal
            show={isModalOpen}
            onHide={closeModal}
            dialogClassName="modal-90w"
            keyboard
        >
            <Modal.Body>
                <div className="close-modal">
                   <span className='btn' onClick={closeModal}><i className="fas fa-times"></i></span> 
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body" style={{textAlign:'center'}}>
                                <h2 className="text-uppercase">מדיניות הפרטיות</h2>
                                <p className="item-intro text-muted">פירוט המדיניות שלנו</p>
                                <div style={{textAlign:'right'}}>
                                    <p><br/></p>
                                    <p><strong>א. הקדמה</strong></p>
                                    <p>הפרטיות של המבקרים באתר שלנו חשובה לנו מאוד, ואנחנו מחויבים לשמירה עליה. המדיניות הזו מסבירה מה נעשה עם הפרטים האישיים שלכם.<br/> ההסכמה לשימוש שלנו בעוגיות בהתאם לתנאים של מדיניות זו בזמן הביקור הראשון באתר שלנו, מאפשרת לנו להשתמש בעוגיות בכל פעם שאתם מבקרים באתר.</p>
                                    <p><strong>ב. קרדיט</strong></p>
                                    <p>המסמך הזה נוצר בעזרת תבנית של SEQ Legal (seqlegal.com) ושונתה על ידי Website Planet (www.websiteplanet.com)</p>
                                    <p><strong>ג. איסוף פרטים אישיים</strong></p>
                                    <p>ייתכן שהסוגים הבאים של פרטים אישיים ייאספו, יאוחסנו, ויעשה בהם שימוש:</p>
                                    <p>מידע על הביקורים והשימוש שלכם באתר, כולל מקור ההפניה, אורך הביקור, צפיות בעמודים, ונתיבי המעבר שלכם באתר;</p>
                                    <p>המידע שאתם מזינים בזמן השימוש בשירותים באתר שלנו;</p>
                                    <p>מידע שנוצר בזמן השימוש באתר שלנו, כולל מתי, כמה, ובאילו נסיבות אתם משתמשים בו;</p>
                                    <p>מידע שנכלל במסרים שאתם שולחים לנו בדואר האלקטרוני או באמצעות האתר שלנו, כולל תוכן המסר והמטא-דאתה שלו;</p>
                                    <p>כל סוג אחר של פרטים אישיים שאתם שולחים אלינו.</p>
                                    <p>לפני שתחשפו בפנינו את הפרטים האישיים של אדם אחר, עליכם לבקש את הסכמת האדם הזה גם עבור השיתוף וגם עבור העיבוד של אותם הפרטים האישיים לפי מדיניות זו</p>
                                    <p><strong>ד. שימוש בפרטים האישיים שלכם</strong></p>
                                    <p>בפרטים אישיים שנמסרו לנו דרך האתר שלנו ייעשה שימוש למטרות שצוינו במדיניות זו, או בעמודים הרלוונטיים שבאתר.<br/> ייתכן שנשתמש בפרטים האישיים שלכם למטרות הבאות:</p>
                                    <p>ניהול האתר והעסק שלנו;</p>
                                    <p>לשלוח לכם הודעות מסחריות שאינן שיווקיות;</p>
                                    <p>ליצור איתכם קשר בנוגע לפניה שהשארתם לנו;</p>
                                    <p>לשלוח לכם התראות בדואר אלקטרוני שביקשתם באופן ספציפי;</p>
                                    <p>טיפול בבירורים ותלונות שהוגשו על ידכם או נוגעות אליכם וקשורות לאתר שלנו;</p>
                                    <p>לשמור על האתר שלנו מאובטח ולמנוע הונאה;</p>
                                    <p>אנחנו לא נספק את הפרטים האישיים שלכם ללא הסכמתכם לכל צד ג&rsquo; שהוא, לצורך השיווק הישיר שלו, או של כל צד ג&rsquo; אחר.</p>
                                    <p><strong>ה. חשיפת פרטים אישיים</strong></p>
                                    <p>אנחנו עשויים למסור את הפרטים האישיים שלכם לכל אחד מהעובדים, המנהלים, היועצים המקצועיים, הסוכנים או קבלני המשנה שלנו, במידה סבירה וכנדרש למטרות המצוינות במדיניות זו.</p>
                                    <p>אנחנו עשויים למסור את הפרטים האישיים שלכם לכל חברה בקבוצת החברות שלנו (זה אומר כל חברות הבת שלנו, חברת הגג שלנו, וכל חברות הבת שלה) במידה סבירה וכנדרש למטרות המצוינות במדיניות זו.</p>
                                    <p>אנחנו עשויים למסור את הפרטים האישיים שלכם:</p>
                                    <p>לפי מה שנדרש מאתנו על פי חוק;</p>
                                    <p>בהקשר של כל הליך משפטי קיים או עתידי;</p>
                                    <p>על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות (כולל אספקה של מידע לאחרים למטרות מניעת הונאה והפחתה של סיכון אשראי);</p>
                                    <p>לרוכש (או הרוכש הפוטנציאלי) של כל עסק או רכוש שאנחנו רוכשים (או שוקלים לרכוש);</p>
                                    <p>ולכל אדם שאנחנו מאמינים במידה סבירה שעשוי לפנות לבית דין או לכל רשות מוסמכת לצורך מסירה של הפרטים האישיים בהם סביר לדעתנו שאותו בית דין או רשות יורה על מסירה של פרטים אישיים אלה.</p>
                                    <p>למעט על פי הכתוב במדיניות זו, אנו לא נספק את הפרטים האישיים שלכם לצד ג&rsquo;.</p>
                                    <p><strong>ז. שמירת פרטים אישיים</strong></p>
                                    <p>סעיף ג&rsquo; זה מפרט את תהליך ומדיניות שמירת הנתונים שלנו, המתוכננים לעזור להבטיח שאנחנו נענים לחובות המשפטיות שלנו הנוגעות לשמירה ולמחיקה של פרטים אישיים.<br/>פרטים אישיים שאנחנו מעבדים עבור כל מטרה או מטרות, לא יישמרו יותר מכמה שנדרש עבור מטרה או מטרות אלה.</p>
                                    <p>אנו נשמור מסמכים (כולל מסמכים אלקטרוניים) המכילים נתונים אישיים:</p>
                                    <p>לפי מה שנדרש מאתנו על פי חוק;</p>
                                    <p>אם לדעתנו המסמכים עשויים להיות רלוונטיים לכל הליך משפטי מתמשך או פוטנציאלי;</p>
                                    <p>על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות (כולל אספקה של מידע לאחרים למטרות מניעת הונאה והפחתה של סיכון אשראי).</p>
                                    <p>ח. אבטחת הפרטים האישיים שלכם</p>
                                    <p>אנחנו ננקוט משנה זהירות ארגוני וטכני סביר על מנת למנוע את האבדן, השימוש לרעה, או השינוי של הפרטים האישיים שלכם.<br/>אנחנו נאחסן את כל הפרטים האישיים שאתם מספקים בשרתים מאובטחים (המוגנים בסיסמא ובחומת אש).</p>
                                    <p>אתם מכירים בכך שהשידור של מידע על פני האינטרנט אינו מאובטח מעצם היותו, ואנחנו ללא יכולים להבטיח שנתונים שנשלחים דרך האינטרנט יהיו מאובטחים.</p>
                                    <p><strong>ט. תיקונים</strong></p>
                                    <p>אנחנו עשויים לעדכן מדיניות זו מעת לעת באמצעות פרסום של גרסה חדשה באתר שלנו. עליכם לבדוק את העמוד הזה מדי פעם על מנת לוודא שאתם מבינים כל שינוי שנעשה במדיניות זו. אנחנו עשויים להודיע לכם על שינויים במדיניות זו בהודעת דואר אלקטרוני או דרך מערכת ההודעות הפרטיות שבאתר שלנו.</p>
                                    <p><strong>י. הזכויות שלכם</strong></p>
                                    <p>אתם יכולים להורות לנו לספק לכם כל פרט מפרטיכם האישיים שאנו מחזיקים הנוגעים אליכם; אספקת פרטים אלה תהיה כפופה לתנאים הבאים:</p>
                                    <p>אנחנו עשויים לסרב למסור פרטים אישיים שאתם מבקשים עד למידה המורשית על פי חוק.</p>
                                    <p>אתם יכולים להורות לנו בכל עת לא לעבד את הפרטים האישיים שלכם לצורכי שיווק.<br/>בפועל, בדרך כלל תבטאו הסכמה מראש לשימוש שלנו בפרטים האישיים שלכם למטרות שיווק, או שאנחנו נספק לכם אפשרות לבחור שלא יעשה בפרטים האישיים שלכם שימוש למטרות שיווקיות.</p>
                                    <p><strong>יא. עדכון מידע</strong></p>
                                    <p>בבקשה הודיעו לנו אם יש צורך לתקן או לעדכן את הפרטים האישיים שאנו מחזיקים עליכם.</p>
                                    <p><br/></p>
                                    </div>
                                <div className='row justify-content-center'>
                                        <button className="btn btn-primary col-md-4 ml-2 mb-2" type="button" onClick={closeModal}><i className="fas fa-times ml-1"></i>סגור</button>                                                            
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}