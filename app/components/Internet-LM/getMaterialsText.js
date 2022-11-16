
export function getMaterialsText(id){
    const materials = [
        `
        Hi
        
        It\'s a me Mario`,
        `# I am a pretty butterfly. 
        
        Look at me, flying in the wind. 
        
        ## AHHH.`
        ,
        `
        # Search Engines vs Web Browsers
        
        In this tutorial we will explain the difference between a search engine and a web <br>owser. 
        
        ## Learning Criteria<br><br>By the end of this section, you will have learned the following:
        
        - What is a web browser?
        - What is a website?
        - What is a search engine?
        - Why Confusion may come between the terms

        ## What Is A Web Browser?
        A web browser is a program that can access the internet and let you visit webpages. Webpages is the name for files on the internet, and are often<br>called simply \"pages\".
        
        Examples of web <br>owsers are Google Chrome, Safari, Microsoft Edge and it\'s older version Internet Explorer.
        
        ## What is a Website?
        
        A website is the name for a group of webpages that are linked together. Even websites such as Facebook and Youtube are simply many webpages
        that are linked to each other. The key feature of a webpage is that you can go to different pages in the website from within a page in the website.
        
        ## What Is A Search Engine?
        
        A search engine is a website that searches the Internet for webpages. Examples of search engines are Google and Bing. 
        
        You can type text into a search bar on search engines to find webpages that are related to what you typed, and these pages are usually part of their 
        own website.
        
        ## Where Does All The Confusion Come From?
        
        It is easy to get the terms \"web browser\" and \"search engine\" mixed up. Often web browsers already have a default search engine built in,
        such that when you use the bar on the top of a web browser, it also is the input for the search engine. 
        
        Also, companies that run search engines may also have their own web browsers. For example, Google has both it\'s search engine, but also has it\'s
        own web browser Google Chrome, that starts with the Google search engine. Microsoft has the Microsoft Edge web browser, that also has the Bing search
        engine made by Microsoft. 
        
        The best way to remember the difference is that web browsers show you webpages, search engines are a group of webpages that finds other webpages.
        `,
        `# Basic Internet Safety
        
        ## Learning Criteria
        
        In this tutorial we will cover the following:<br>- how to avoid scams<br>- recognizing secure websites<br><br>## How to Avoid Being Scammed<br><br>The Internet is a very useful tool, but like any tool, there are some dangers. One of these dangers is the threat of scammers attempting to<br>take your money or acquire your personal information. These scams may come from email, or from social media, but there are common elements<br>that can help you avoid being scammed.<br><br>1. Do not click on any links. If it\'s a scam, then the link will most likely take you to a page that may lead to complications like theft of<br>personal information, or the loss of money, or malicious files being downloaded. If the email seems slightly suspicious, don\'t click unless<br>you are 100% sure that it is legitimate. <br><br>2. Verify from the source. Some scams have the scammers pretend to be government employees demanding money, or saying that your bank has made<br>a bad transfer and that they need osme personal information. Some scans involve pretending to be your family members. As a general rule of thumb,<br>the government and companies will, never, ever message you to ask for your personal information; if a supposed government or bank emial asks for it,<br>it is almost guaranteed to be fake. If there is confusion, directly call or contact the organization (but not to the same number the message came from)<br>to clarify. <br><br>3. If it sounds too good to be true, it most likely is. There are scams that say that you\'ve won a prize for a contest you haven\'t entered,<br>or that you\'ve earned back money from a transfer and need to click on a link to receive it. On social media, people may intend to deceive you<br>into a false connection. Trust your gut feeling; it will work as well as if someone tried to scam you in real life.<br><br><br>## What Makes a Secure Website?<br><br>Secure websites are websites where the connection is secured against outside influence from other computers. You can tell that they are secured<br>by their hyperlink: if you check in the web <br>owser\'s top bar on a website, you\'ll see some text; that is the hyperlink. If you click on it, it should<br>show the full link. If the link begins with \"https\", it\'s secure. In general, avoid websites whose links do not begin with \"https\".<br><br><br>## Further Resources`, 
        ""];

    //const materials = ["H1", "H2", "h3", "h4"]
    let m = materials[id-1];
    return m;
}
