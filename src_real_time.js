        
function clock() {
let month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let d = new Date();
let month_num = d.getMonth()
let day = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;
            let date_time = hours + " : " + minutes + " : " + seconds;
            let date_day = day + " " + month[month_num];
            let date_year = d.getFullYear();
            if (document.layers) {
                document.layers.doc_time.document.write(date_time);
                document.layers.doc_time.document.close();
            } else if (document.layers) {
                document.layers.doc_day.document.write(date_day);
                document.layers.doc_day.document.close();
            } else if (document.layers) {
                document.layers.doc_year.document.write(date_year);
                document.layers.doc_year.document.close();
            } else
            Time.innerHTML = date_time;
            Day.innerHTML = date_day;
            Year.innerHTML = date_year;
            setTimeout("clock()", 1000);
        
        }
        
        clock();
function secondsRotate() {
            let d = new Date();
            let secondDeg = d.getSeconds() * 6;
            arrow1.style.transform = 'rotate(' + secondDeg + 'deg)';
        }
function hoursRotate() {
            let a = new Date();
            let b =new Date()
            let hoursDeg = (a.getHours() *30) + (b.getMinutes()*0.5);
            arrow3.style.transform = 'rotate(' + hoursDeg + 'deg)';
        }
function minutsRotate() {
            let m = new Date();
            let minutDeg =  + (m.getMinutes()*6);
            arrow2.style.transform = 'rotate(' + minutDeg + 'deg)';
        }

        secondsRotate();
        hoursRotate() ;
        minutsRotate();
        setInterval(function() {
            secondsRotate();
            hoursRotate() 
            minutsRotate()
        }, 1000);