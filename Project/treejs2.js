function funa(){
    var mypica1=document.getElementById("controlla1");
    var mypicb1=document.getElementById("controllb1");
    var mypicc1=document.getElementById("controllc1");
    var mypicd1=document.getElementById("controlld1");

    var mypica2=document.getElementById("controlla2");
    var mypicb2=document.getElementById("controllb2");
    var mypicc2=document.getElementById("controllc2");
    var mypicd2=document.getElementById("controlld2");

    var mypica3=document.getElementById("controlla3");
    var mypicb3=document.getElementById("controllb3");
    var mypicc3=document.getElementById("controllc3");
    var mypicd3=document.getElementById("controlld3");

    var mypica4=document.getElementById("controlla4");
    var mypicb4=document.getElementById("controllb4");
    var mypicc4=document.getElementById("controllc4");
    var mypicd4=document.getElementById("controlld4");

    var mypica5=document.getElementById("controlla5");
    var mypicb5=document.getElementById("controllb5");
    var mypicc5=document.getElementById("controllc5");
    var mypicd5=document.getElementById("controlld5");

    var mypica6=document.getElementById("controlla6");
    var mypicb6=document.getElementById("controllb6");
    var mypicc6=document.getElementById("controllc6");
    var mypicd6=document.getElementById("controlld6");

    var mypica7=document.getElementById("controlla7");
    var mypicb7=document.getElementById("controllb7");
    var mypicc7=document.getElementById("controllc7");
    var mypicd7=document.getElementById("controlld7");

    mypica1.style.display="none";
    mypicb1.style.display="none";
    mypicc1.style.display="none";
    mypicd1.style.display="none";

    mypica2.style.display="none";
    mypicb2.style.display="none";
    mypicc2.style.display="none";
    mypicd2.style.display="none";

    mypica3.style.display="none";
    mypicb3.style.display="none";
    mypicc3.style.display="none";
    mypicd3.style.display="none";

    mypica4.style.display="none";
    mypicb4.style.display="none";
    mypicc4.style.display="none";
    mypicd4.style.display="none";

    mypica5.style.display="none";
    mypicb5.style.display="none";
    mypicc5.style.display="none";
    mypicd5.style.display="none";

    mypica6.style.display="none";
    mypicb6.style.display="none";
    mypicc6.style.display="none";
    mypicd6.style.display="none";

    mypica7.style.display="none";
    mypicb7.style.display="none";
    mypicc7.style.display="none";
    mypicd7.style.display="none";
}

    function fun0(obj){
        var mythumbnail=obj.id;
        var mywp=obj.id;
        var mypicture= mythumbnail.substr(9);
        if(mypicture == ""){
            var mypicture= mythumbnail.substr(2);
        }
        else{
            var mypicture= mythumbnail.substr(9);
        }
       
        var mydiv1=document.getElementById("picture1");
        var mydiv2=document.getElementById("picture2");
        var mydiv3=document.getElementById("picture3");
        var mydiv4=document.getElementById("picture4");
        var mydiv5=document.getElementById("picture5");
        var mydiv6=document.getElementById("picture6");
        var mydiv7=document.getElementById("picture7");

        var mypica1=document.getElementById("controlla1");
        var mypicb1=document.getElementById("controllb1");
        var mypicc1=document.getElementById("controllc1");
        var mypicd1=document.getElementById("controlld1");

        var mypica2=document.getElementById("controlla2");
        var mypicb2=document.getElementById("controllb2");
        var mypicc2=document.getElementById("controllc2");
        var mypicd2=document.getElementById("controlld2");

        var mypica3=document.getElementById("controlla3");
        var mypicb3=document.getElementById("controllb3");
        var mypicc3=document.getElementById("controllc3");
        var mypicd3=document.getElementById("controlld3");

        var mypica4=document.getElementById("controlla4");
        var mypicb4=document.getElementById("controllb4");
        var mypicc4=document.getElementById("controllc4");
        var mypicd4=document.getElementById("controlld4");

        var mypica5=document.getElementById("controlla5");
        var mypicb5=document.getElementById("controllb5");
        var mypicc5=document.getElementById("controllc5");
        var mypicd5=document.getElementById("controlld5");
        
        var mypica6=document.getElementById("controlla6");
        var mypicb6=document.getElementById("controllb6");
        var mypicc6=document.getElementById("controllc6");
        var mypicd6=document.getElementById("controlld6");
    
        var mypica7=document.getElementById("controlla7");
        var mypicb7=document.getElementById("controllb7");
        var mypicc7=document.getElementById("controllc7");
        var mypicd7=document.getElementById("controlld7");

        switch (mypicture)
        {
            case "1":
            mydiv1.style.display="block";
            mydiv2.style.display="none";
            mydiv3.style.display="none";
            mydiv4.style.display="none";
            mydiv5.style.display="none";
            mydiv6.style.display="none";
            mydiv7.style.display="none";

            mypica1.style.display="block";
            mypicb1.style.display="block";
            mypicc1.style.display="block";
            mypicd1.style.display="block";

            mypica2.style.display="none";
            mypicb2.style.display="none";
            mypicc2.style.display="none";
            mypicd2.style.display="none";

            mypica3.style.display="none";
            mypicb3.style.display="none";
            mypicc3.style.display="none";
            mypicd3.style.display="none";

            mypica4.style.display="none";
            mypicb4.style.display="none";
            mypicc4.style.display="none";
            mypicd4.style.display="none";

            mypica5.style.display="none";
            mypicb5.style.display="none";
            mypicc5.style.display="none";
            mypicd5.style.display="none";

            mypica6.style.display="none";
            mypicb6.style.display="none";
            mypicc6.style.display="none";
            mypicd6.style.display="none";
    
            mypica7.style.display="none";
            mypicb7.style.display="none";
            mypicc7.style.display="none";
            mypicd7.style.display="none";
     
            break;

            case "3":
            mydiv1.style.display="none";
            mydiv2.style.display="block";
            mydiv3.style.display="none";
            mydiv4.style.display="none";
            mydiv5.style.display="none";
            mydiv6.style.display="none";
            mydiv7.style.display="none";
           
            mypica1.style.display="none";
            mypicb1.style.display="none";
            mypicc1.style.display="none";
            mypicd1.style.display="none";

            mypica2.style.display="block";
            mypicb2.style.display="block";
            mypicc2.style.display="block";
            mypicd2.style.display="block";

            mypica3.style.display="none";
            mypicb3.style.display="none";
            mypicc3.style.display="none";
            mypicd3.style.display="none";

            mypica4.style.display="none";
            mypicb4.style.display="none";
            mypicc4.style.display="none";
            mypicd4.style.display="none";

            mypica5.style.display="none";
            mypicb5.style.display="none";
            mypicc5.style.display="none";
            mypicd5.style.display="none";

            mypica6.style.display="none";
            mypicb6.style.display="none";
            mypicc6.style.display="none";
            mypicd6.style.display="none";
    
            mypica7.style.display="none";
            mypicb7.style.display="none";
            mypicc7.style.display="none";
            mypicd7.style.display="none";
           
            break;

            case "3":
            mydiv1.style.display="none";
            mydiv2.style.display="none";
            mydiv3.style.display="block";
            mydiv4.style.display="none";
            mydiv5.style.display="none";
            mydiv6.style.display="none";
            mydiv7.style.display="none";


    
            break;

            case "4":
            mydiv1.style.display="none";
            mydiv2.style.display="none";
            mydiv3.style.display="none";
            mydiv4.style.display="block";
            mydiv5.style.display="none";
            mydiv6.style.display="none";
            mydiv7.style.display="none";



            break;

            case "5":
            mydiv1.style.display="none";
            mydiv2.style.display="none";
            mydiv3.style.display="none";
            mydiv4.style.display="none";
            mydiv5.style.display="block";
            mydiv6.style.display="none";
            mydiv7.style.display="none";

 

            break;

            case "6":
            mydiv1.style.display="none";
            mydiv2.style.display="none";
            mydiv3.style.display="none";
            mydiv4.style.display="none";
            mydiv5.style.display="none";
            mydiv6.style.display="block";
            mydiv7.style.display="none";



            break;

            case "7":
            mydiv1.style.display="none";
            mydiv2.style.display="none";
            mydiv3.style.display="none";
            mydiv4.style.display="none";
            mydiv5.style.display="none";
            mydiv6.style.display="none";
            mydiv7.style.display="block";



            break;




        }
    }
    function fun1(){
        var mydiv1=document.getElementById("picture1");
        var mydiv2=document.getElementById("picture2");
        var mydiv3=document.getElementById("picture3");
        var mydiv4=document.getElementById("picture4");
        var mydiv5=document.getElementById("picture5");
        var mydiv4=document.getElementById("picture6");
        var mydiv5=document.getElementById("picture7");

        var mypica1=document.getElementById("controlla1");
        var mypicb1=document.getElementById("controllb1");
        var mypicc1=document.getElementById("controllc1");
        var mypicd1=document.getElementById("controlld1");

        var mypica2=document.getElementById("controlla2");
        var mypicb2=document.getElementById("controllb2");
        var mypicc2=document.getElementById("controllc2");
        var mypicd2=document.getElementById("controlld2");

        var mypica3=document.getElementById("controlla3");
        var mypicb3=document.getElementById("controllb3");
        var mypicc3=document.getElementById("controllc3");
        var mypicd3=document.getElementById("controlld3");

        var mypica4=document.getElementById("controlla4");
        var mypicb4=document.getElementById("controllb4");
        var mypicc4=document.getElementById("controllc4");
        var mypicd4=document.getElementById("controlld4");

        var mypica5=document.getElementById("controlla5");
        var mypicb5=document.getElementById("controllb5");
        var mypicc5=document.getElementById("controllc5");
        var mypicd5=document.getElementById("controlld5");
        
        var mypica6=document.getElementById("controlla6");
        var mypicb6=document.getElementById("controllb6");
        var mypicc6=document.getElementById("controllc6");
        var mypicd6=document.getElementById("controlld6");
    
        var mypica7=document.getElementById("controlla7");
        var mypicb7=document.getElementById("controllb7");
        var mypicc7=document.getElementById("controllc7");
        var mypicd7=document.getElementById("controlld7");

        mydiv1.style.display="none";
        mydiv2.style.display="none";
        mydiv3.style.display="none";
        mydiv4.style.display="none";
        mydiv5.style.display="none";
        mydiv6.style.display="none";
        mydiv7.style.display="none";

        mypica1.style.display="none";
        mypicb1.style.display="none";
        mypicc1.style.display="none";
        mypicd1.style.display="none";

        mypica2.style.display="none";
        mypicb2.style.display="none";
        mypicc2.style.display="none";
        mypicd2.style.display="none";

        mypica3.style.display="none";
        mypicb3.style.display="none";
        mypicc3.style.display="none";
        mypicd3.style.display="none";

        mypica4.style.display="none";
        mypicb4.style.display="none";
        mypicc4.style.display="none";
        mypicd4.style.display="none";

        mypica5.style.display="none";
        mypicb5.style.display="none";
        mypicc5.style.display="none";
        mypicd5.style.display="none";

        mypica6.style.display="none";
        mypicb6.style.display="none";
        mypicc6.style.display="none";
        mypicd6.style.display="none";

        mypica7.style.display="none";
        mypicb7.style.display="none";
        mypicc7.style.display="none";
        mypicd7.style.display="none";

    }
    function fun2(obj){
        document.write("1");
        var mythumbnail=obj.id;
        var mypicture= mythumbnail.substr(9);

        var mypicb1=document.getElementById("controllb1");
        var mypicb1=document.getElementById("controllb2");
        var mypicb1=document.getElementById("controllb3");
        var mypicb1=document.getElementById("controllb4");
        var mypicb1=document.getElementById("controllb5");
        var mypicb1=document.getElementById("controllb6");
        var mypicb1=document.getElementById("controllb7");


        switch (mypicture)
        {
            case "1":
            mypicb1.src = "MW_1.png";
            break;

            case "2":

            break;

            case "3":

            break;

            case "4":

            break;

            case "5":

            break;

            case "6":

            break;

            case "7":

            break;
        }
    }
    for(i in document.images)document.images[i].ondragstart=imgdragstart;  
