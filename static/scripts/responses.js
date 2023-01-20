function getBotResponse(input) {

    // Responses for About
    if (input == "About") {
        return "We are a growing team in Front End Development, Back-End Development and Software Engineering." + "<br>" + "We have a solid interest in computer programming and have gained knowledge on it." +
            "<br>" + "<br>" + "Most of us studied computer science, in theory and practical." + "<br>" + "We also have skilled graphic designers, who know how to capture the eyes of people with their aesthetic designs.";

    } else if (input == "ABOUT") {
        return "We are a growing team in Front End Development, Back-End Development and Software Engineering." + "<br>" + "We have a solid interest in computer programming and have gained knowledge on it." +
            "<br>" + "<br>" + "Most of us studied computer science, in theory and practical." + "<br>" + "We also have skilled graphic designers, who know how to capture the eyes of people with their aesthetic designs.";

    } else if (input == "about") {
        return "We are a growing team in Front End Development, Back-End Development and Software Engineering." + "<br>" + "We have a solid interest in computer programming and have gained knowledge on it." +
            "<br>" + "<br>" + "Most of us studied computer science, in theory and practical." + "<br>" + "We also have skilled graphic designers, who know how to capture the eyes of people with their aesthetic designs.";

    } else if (input == "1") {
        return "We are a growing team in Front End Development, Back-End Development and Software Engineering." + "<br>" + "We have a solid interest in computer programming and have gained knowledge on it." +
            "<br>" + "<br>" + "Most of us studied computer science, in theory and practical." + "<br>" + "We also have skilled graphic designers, who know how to capture the eyes of people with their aesthetic designs.";
    }

    // Responses for Services
    if (input == "Services") {
        return "Web Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end." +
            "<br>" + "<br>" + "Application Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website." +
            "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website.";

    } else if (input == "services") {
        return "Web Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end." +
            "<br>" + "<br>" + "Application Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website." +
            "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website.";

    } else if (input == "SERVICES") {
        return "Web Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end." +
            "<br>" + "<br>" + "Application Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website." +
            "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website.";

    } else if (input == "2") {
        return "Web Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end." +
            "<br>" + "<br>" + "Application Development" + "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website." +
            "<br>" + "<br>" + "We have a formidable team of programmers that specialise in Web Development, using HTML, CSS, JavaScript, PHP, and Python, to give you the best user-friendly, responsive website and back-end website.";
    }

    // Responses for Contact 
    if (input == "Contact") {
        return "Email Us:" + "<br>" + "mindoptimisers@gmail.com" +
            "<br>" + "<br>" + "LinkedIn:" + "<br>" + "Mind Optimisers" +
            "<br>" + "<br>" + "Twitter:" + "<br>" + "Mind Optimisers";

    } else if (input == "CONTACT") {
        return "Email Us:" + "<br>" + "mindoptimisers@gmail.com" +
            "<br>" + "<br>" + "LinkedIn:" + "<br>" + "Mind Optimisers" +
            "<br>" + "<br>" + "Twitter:" + "<br>" + "Mind Optimisers";

    } else if (input == "contact") {
        return "Email Us:" + "<br>" + "mindoptimisers@gmail.com" +
            "<br>" + "<br>" + "LinkedIn:" + "<br>" + "Mind Optimisers" +
            "<br>" + "<br>" + "Twitter:" + "<br>" + "Mind Optimisers";

    } else if (input == "3") {
        return "Email Us:" + "<br>" + "mindoptimisers@gmail.com" +
            "<br>" + "<br>" + "LinkedIn:" + "<br>" + "Mind Optimisers" +
            "<br>" + "<br>" + "Twitter:" + "<br>" + "Mind Optimisers";

    }

    // Responses for Portfolio
    if (input == "Portfolio") {
        return "Our Portfolio will be uploaded and updated soon. Please stay tuned!";

    } else if (input == "PortFolio") {
        return "Our Portfolio will be uploaded and updated soon. Please stay tuned!";

    } else if (input == "portFolio") {
        return "Our Portfolio will be uploaded and updated soon. Please stay tuned!";


    } else if (input == "portfolio") {
        return "Our Portfolio will be uploaded and updated soon. Please stay tuned!";

    } else if (input == "PORTFOLIO") {
        return "Our Portfolio will be uploaded and updated soon. Please stay tuned!";

    } else if (input == "4") {
        return "Our Portfolio will be uploaded and updated soon. Please stay tuned!";
    }

    // Invalid Message Reply
    else {
        return "Sorry, I couldn't understand you! Please Try Again." + "<br>" + "<br>" + "1. About" + "<br>" + "2. Services" + "<br>" + "3. Contact" + "<br>" + "4. Portfolio";
    }
}