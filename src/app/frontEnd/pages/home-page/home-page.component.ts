import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  programingLanguages=[
        {
          "name": "Java",
          "image": "assets/image/resiged/java.png"
        },
        {
          "name": "Spring",
          "image": "assets/image/resiged/spring.png"
        },
        {
          "name": "Spring Boot",
          "image": "assets/image/resiged/springBoot.png"
        },
        {
          "name": "Oracle Database",
          "image": "assets/image/resiged/oracle.png"
        },
        {
          "name": "MySql Database",
          "image": "assets/image/resiged/mySql.png"
        },
        {
          "name": "Angular",
          "image": "assets/image/resiged/angular.png"
        },
        {
          "name": "JavaScript",
          "image": "assets/image/resiged/javascript-img.png"
        },
        {
          "name": "TypeScript",
          "image": "assets/image/resiged/typescript_logo.png"
        },
        {
          "name": "Scss",
          "image": "assets/image/resiged/sass.png"
        },
        {
          "name": "Css",
          "image": "assets/image/resiged/css3.png"
        },
        {
          "name": "Bootstrap",
          "image": "assets/image/resiged/bootstrap-logo.png"
        },
        {
          "name": "Html",
          "image": "assets/image/resiged/html.png"
        },
        
        {
          "name": "Flutter",
          "image": "assets/image/resiged/flutter.png"
        },
        {
          "name": "Dart",
          "image": "assets/image/resiged/dart.png"
        },
        {
          "name": "Android App",
          "image": "assets/image/resiged/androidStudio.png"
        },
        {
          "name": "Desktop App",
          "image": "assets/image/resiged/swing.png"
        },
        {
          "name": "Git",
          "image": "assets/image/resiged/git.png"
        },
    
  ];


  defaultProjects =[
    {
      "projectImage": "https://previews.dropbox.com/p/thumb/AB44RGIqMHsEnkTNDpdhC6wzC3XhSBKeOY1NxMXgnowNB8lOpG_eyDN9cCl_dF_aAjZt09PQfXVqFJhyTBbk-C1NQEJpeUN3BWlsnmCJ0DjJ7kuQyr74Sf4yyqP2E4WhIOR0YhDQSLpULiL8GwHEvXxYrLsVDuX7NSDAzA3AIrunBnp1CCJPcRGvyzncHw2dAAL1zr7m7MKn5FrU-S4WkkFgxb15_neYp-PCAchpeZFFY1B9Ufv35ZZ9zWByqglsvlNSlixv1hwXCQEzsootKr1K18NqiZsuR_QEZp4dZbJOq2eTVciM7jw3yKtS4_RK0uVmHOIeW_wD6izAQ2Fn4-qxVYoCtjNdbyZkngdFQAWbCfaCiG9yA83yx5SMR8JTza8/p.png",
      "projectName":"Naxian Fashion",
      "appType":"Web Application",
      "projectDescription":"This is My First Full Project With Rest Api and Angular. This is an Online Store where u can sell and buy Anything.",
      "projectLiveUrl":"https://naxianfashion-7b928.web.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/Naxian_Fashion_Angular",
      "programingLanguagesUsed":"#Angular, #Java, #Spring, #Spring Boot, #Scss, #Bootstrap, #Html #TypeScript",
    },
    {
      "projectImage": "https://previews.dropbox.com/p/thumb/AB4Ll5C4ceqIBTo2_wd85-2Fc_Def7rH_M14SDeymiTxj2Wi34JBuAy3zmD9uLo2HofB837uMcyuCFRfQU1WkQYXcbOLipaeXgozlViBhv5Z_4k6zCyFbxpHDDDECnwkjINrpZxqhO1sA3uJnBsekeMBfJ1AhmSb9WLbY9OLzbTiYOGlzzJB8Jd3yIMfInzYRsJJiZxbsNeHHjeOktzH9yNZyLA5d5VTuNp759OTN-ML9F77lWc-yp0vHpKYskaWn1pmKZNZ-Dd1RTTQSNKOvnqcgxgHTbrpwe67rlUcV6kmdicUHaRUvC6asJsMLo_BKE5ODRH_Q4n9lIYT2KZvuY85OLbXCwddjggZuoZzKBjicbfGiAbC9krCzTF8_4QYcy4/p.png",
      "projectName":"Naxian Fashion Api",
      "appType":"Spring Boot Rest Api",
      "projectDescription":"This is The Rest Api Of Naxian Fashion Project.",
      "projectLiveUrl":"https://juicy-camera-production.up.railway.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/Naxian_Fashion_Rest_Api_SpringBoot.git",
      "programingLanguagesUsed":"#Java, #Spring, #Spring Boot",
    },
    {
      "projectImage": "https://previews.dropbox.com/p/thumb/AB7lXL-TSD05diifU5Pz0ww98neXtY8PUbECsXx0uMgInf3s181XxjI1aWsUeWPMKpFk7inS6WC2VZ1HTCd0_RnxbV1GCZGJfyNSN2K-C7KjIMd11ia0g-eXw3aAsBsr8va6QMa4UxE3hcWS8n7hOFSWX7KZH4zfGqSRlQgCUU8mojKIVJDM8wkfoGa29bQvw9jpa7geihtVpV-cxnCJ_pDUolCxXTbXHcBtPhziP-z2iNp6uZFK1iZCPb2Ory90V8NXzKPbR1CTDJiamNUsX6Feiqmq6Ev167VoblobNkVDC2UYueoROrOeQwimoxZgjYA_kRaWfrkcIrijE5k4Hjem41ZDbRfff01Tt7TSPbI7eHic-0cnlBQSErXSa8CUWt9Jk4PVzIXI3YO6pjrWNDHLOhzpoPcZr4vvAbB7ozpm02TCtND-XkP9NiILG0PO_t4MSW_AgMzaOfbKGEm1eMfZ/p.png",
      "projectName":"Feni Bank",
      "appType":"Desktop Application",
      "projectDescription":"This is A Bank Application, Created With Java Swing",
      "projectLiveUrl":"This project is not hosted on the internet",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/FeniBank_JavaSwing_Application.git",
      "programingLanguagesUsed":"#Java, #Java Swing",
    },

    {
      "projectImage": "https://previews.dropbox.com/p/thumb/AB55dZyvGeRKS_jPeQ3nc_RySrAQjXzoXvmqkmQ-z3M_IhzNkkC3bkNEFSXPePR9k9PpK4YCYLYqJ6q_2sBailjKuZsWRnbUkD7fMi6jNbj4scjBO4npgjlr_AiWh8Yt2ae9cB210Aeu3A4X7BV-Iq0mE-FlKPnD2Nz3HnctpoC4P06pXF2aha57BI-ivdoU3LODWUQUJY2-wEdv453qCnvIl7ZpRqqiLrgG7rEr6hg_Cn22_cZ1vmRHYt9NDXUTBh-bwCdwFqnvG4fHSAPHH9NpRRpP9p0g3rWVwVT4_upDqdhuVUPDni7LMIC9J9Wvt3mJltZNYEZZFfrzJfAH0SvAKuq_F1LmU8v4nkCA-s7cUdflGYoyHa2NZalayyFuXv8/p.png",
      "projectName":"Birth Day Wishing Web Site",
      "appType":"Web Site",
      "projectDescription":"This is a Birth day wishin web site, by that web site you can wish your loved one",
      "projectLiveUrl":"https://mitubirthday.netlify.app/",
      "projectGithubLink":"",
      "programingLanguagesUsed":"#JavaScript",
    },

    // {
    //   "projectImage": "",
    //   "projectName":"",
    //   "appType":"",
    //   "projectDescription":"",
    //   "projectLiveUrl":"",
    //   "projectGithubLink":"",
    //   "programingLanguagesUsed":"",
    // },
    
  ];

}
