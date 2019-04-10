# BackbaseAssignment - Guillermo Uribe (bluememon)

#How to install and run
- Copy the contents of the zipped file into any folder on your choosing
- Assuming that node is installed on the terminal go to the folder where you copied the files and run 'npm install'
- When the install is finished, to compile the spp, run 'ng serve'
- When compilation is finished go to your favorite browser and open 'http://localhost:4200' to run the app

- If you want to deploy it you can copy the contents of "src" folder into an FTP and check it live on a webserver :)

#Notes on development

#Layout
- Based on design mockups I decided to approach the layout development as desktop first then create overrides for media queries
- there are 3 different versions of the layout wich are desktop, small screen/tablet and mobile
- For the styles I decided to create a mix of different ways to style the components based on two different objects:
    - angular components
    - general ui elements

- Angular componets: I chose to make use of shadowdom from angular to be able to add the functional styles for each component on its own stylesheet so its more intuitive to find and tweak stylings
- General UI elements: these are the elements that I considered repeatable throughout the application, so I decided to separate their styling in separate folders for easy finding and as a separation from component, some examples are the form, infobox, modal stylings, trying to create a pseudo css framework for the app.
- Overrides are innevitable, so I added some element theme's like form elements to be overriden in the component as designs sometimes are not as consistent as we imagine (it's totally fine :)  )
- For some element I could consider using mix-ins so we could make the styles more modular, would have considered if had a little more time or the project were bigger so I can get an Idea on hos component and UI objects repeat and interact (also I try not to be so neurotic haha sometimes a happy chaos is needed for human reading).
- Having a little more time I would like to change the way the background of the content area works, I don't really like it to repeat vertically, I would had to shoot for a way to make it fixed and add the rest of the content to scroll on an transparent background.

- NOT SO DISCLAIMER - I really like to create layouts that are as faithfull as the desiner's mockups, but after some hours working on it on my computer, noticed a caveat (specially handling the fonts) I have a macbook pro 2012 "pre retina" so the resolution in this little warrior is really outdated. I tried to use photoshop to fill the layout with guides, and to measure ots paddings, widths, margins, heights in pixels, even with that I still saw the layout a little bit off.

- Also the icons provided (png's) didn't had the background transparent, so I grab them and putted them on photoshop to redraw them and regenerate those assets with the background transparent, feel free to use them for future challenges :), wanted to use svg's but didn't had the time.

- Had the liberty to change a little bit the design of the order buttons, wanted to add a sensation of foreground -background buttons, so inactive ordering buttons has the font color a little bit lighter so its easier to understand which order is applied.

#Front-End (Ohh Boy...)
- So I decded to use a component approach as it's the way to works on angular 2 (oviously). 
- For the sake of having to handle the transaction history between two components, I decided to approach it in a general "Parent" component that has twl siblng components (transfer comp, and history comp) that way we can call just move the information back and forth between the parent and its childs.
- I chose to use a service to access the json file and populate the history comp.

#transfer comp
- In this component I added some basic validations (nonEmpty and for the amount to be not more than 500)
- Also added some functionality to ad double digit and rounding user input.
- Added styling for the validations and some friendly helpful messages.
- Added autofocus on "To Account" field on app load.
- I decided to put the modal of confirmation inside the transfer template mostly because I considered that the element is part of the transfer, I decided to leave the "modal" object as a sigleton element that centers any object you add it, and being sure other modals would have to include different UI elements, so wanted to have to freedom to reuse that, and also to be easier to find by other persons.
- After Confirmation, the form cleans as it should and also the focus goes back to the "To Account" input

#History comp
- On mobile version, for the sort buttons I decided t puto the arrow below the label (it's not a bug, its a feature believe me) so the button becomes taller and easier for the user to tap on it. added some fancy rotation animations on click :)
- For the ordering and the search I used pipes as it should be.
- Had the liberty to change the layout of the table and redistribute the table elements in the mobile view, because it's always really complicatet to handle cluttered information, so I reordered some elements like the date and the amount and pushed both down so the name of the merchant and the description could have more space and to be easier to read.


# No Testing... for this time
- "Testing... ain't nobody got the time for that" jk I think testing is really important, but in this case in special I didn't had time to create some sweet test cases.
