import { LinkedInProfileScraper } from 'linkedin-profile-scraper';

// Plain Javascript
// const { LinkedInProfileScraper } = require('linkedin-profile-scraper')
var result;
(async () => {
    const scraper = new LinkedInProfileScraper({
        sessionCookieValue: 'LI_AT_COOKIE_VALUE',
        keepAlive: false
    });

    // Prepare the scraper
    // Loading it in memory
    await scraper.setup();

    result = await scraper.run('https://www.linkedin.com/in/jvandenaardweg/');

    console.log(result);
})()

export default function linkedinComponent(props) {
    return (
        <>
            <p>{result}</p>
        </>
    );
}