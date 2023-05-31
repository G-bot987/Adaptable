# Adaptable Tec Test

## Deployed at: 
https://adaptable-three.vercel.app/

## Technologies

- Next
- TypeScript
- SCSS
- vercel

## Requested Skills Demonstrated

- [x] Mobile First  
- [x] Change Tabs for different tables
- [x] Hover States
- [x] Git hub version control 

## Approach

Used BEM, as a naming convention and methodolgy with SCSS. Used State where required to change '--selected' styling attempted to change only the minium styling required.

Mobile first; hamburger menu using brand colours, and overflow scroll on table on smaller viewports. Hamburger menu with transition for smooter user experience and to meet current mobile industry standards. This design pattern seemed to be a plausible approach and provided an opportunity to demonstate a knowledge of hamburger menu implementation. My general approach was to design off the Figma first (desktop first). Then to go back and add media queries where required following BEM  and then implement mobile first and changing styling for larger viewports.

all text is passed as mock data from in the root folder of the next directory, this data is then passed as props accordingly this was done to minic passing data received from a CMS such as strapi, type checking is then carried out on props. Hopefully this fore thought illustrates an appreciation for how scalable sites are built in industry and a logical approach to structuring my code, I've mapped over arrays to render data where approprate. For specific components I've considered how compoments or elements would behaviour on various viewports then considered these elements components. For example the hamburger menu is separated into its own component. Through considering the scalability of the app, the table in question maps over arrays for both columns and rows as well as being rendered depending on the props passed to it. This made it easier to provide a table that would render the appointment data but also the mock data for billing and documents

Google and Adobe fonts were both required for fonts, I had these accounts so it seemed logical to add

Hover states are considered and implemented as per the Figma. I added some cursor on hover for some elements it seemed logical too despite not being on the Figma e.g. the Book now on the table and the bread crumbs 

## Added Extras

Mock Data to demonstrate the scalablity of the table(mapping) and the its reusablity (as a result of rendering the right table depending on the selected tab). 

Data for both documents and billing rendering tables

hamburger menu using transitions for smooth user experience

Flavicon

Deployed version so you didn't have to run locally to see a functioning version, also coupled with TypeScript this allowed for the ultilisation of the vercel bot for build checking to minic some degree of unit testing as per industry best practise.

## Recreating locally, 

- install node
- npm i
- npm run dev in /adaptable will start the project locally