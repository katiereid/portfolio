# Saskatoon

A bower package containing the ideal Sass file structure with neat and an html5boiler plate.

#File Structure

It might be tempting to write all of your CSS or Sass in one big, messy, stream-of-consciousness type file but what happens when another developer needs to edit styles? Or you in 6 months and you can't remember where you have your typography styles? This file structure seperates out not only different UI components (fonts, colors, modules, etc) but the two different aspects of styles in Sass, the actual code and the logic behind it.

In the folders under the Sass directory there will be several folders seperating each component. Add files like "_variables.scss" or "_mixins.scss" to help keep track of your Sass logic. The loose files are where to write your actual code that may pull from the logic-based folders. Check out the typography and colors included in the package for examples.Both Bourbon and Neat are included in this package as well. Finally, everything is imported in the app.scss. Then add, rename, and delete any files or folders to fit your specific project! Be sure to Sass watch your Sass and CSS to track changes.

#Enjoy!

Keep Saskatoon in mind when you're starting new projects in the future, too :) .

