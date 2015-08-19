# gulp-recipe-bootstrap-static-site

Mission
=======

Create a simple **Task/Generator for static websites** without using any server side technologies or cache system.
It can be usefull for Light/Small Business Developer for creating landing pages or multiple pages websites without using CMS.

This system integrates also optimizer (minifying, img optimizer, ... ) in order to avoid you wasting your time looking for the best online tool, use it and then enter the results in your project.

briefly:
  * SPEED
  * WEB OPTIMIZATION
  
TOC
=======
  [Specifications](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#specs)  
  [What you need before install](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#what-you-need-before-install)  
  [How to install](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#how-to-install)  
  [How to Run](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#how-to-run)
  [Question about this project](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#question-about-this-project)
  
  
Specifications:
=======

This project include some platforms,libs and frameworks to **make you work faster**. 

## Bootstrap
Bootstrap is usefull for creating simple UI in a **simple and fast way**.  
It use most of common data UI structure ready out-of-the-box, well written and reliable. That's why I decide to put inside this project.

Use the official [knowlendge base](http://getbootstrap.com/) to understand how it works and how to use.

##Twig
Twig is a template engine who can use many abstraction layer and so permit to compile templates also with complex structure like, templating, inheritance, imports, data inections...
It's usefully in a project like this because permits to have **many pages with the same structure** (generally header, footer, sidebars...)    

Take a look in the [Twig official repository](http://twig.sensiolabs.org/)

##SASS (or Scss)
With Sass you can write CSS using cool functions like calculations, variables and hineritances melted up with a simple writing way.
Sass permits to **save a large amout of time**, especially when you use complex templates or a personalized graphics.  

[Learn the base of Sass](http://sass-lang.com/guide)


What you need before install:
=======

  * Node.js  
  This project is runned like a Node.js apps so you must [install Node.js](https://nodejs.org/download/) before continue
        
        
  * Patience  
  This project was born like a personal project and not a commercial one. So what you see it may not be done as well as you could write in your own. I know. And it's true.
  
How to install:
=======

 1. Clone locally this repo
 
 
 2. Install generator dependencies    
    ```
npm install
```
    
    
 3. Install project dependencies
 ```
bower install
```

How to run:
=======

 * Run your project in the browser.
  ```
gulp serve
```

 * Generate in the */dist* folder your project complete version to be uploaded
   ```
gulp
```

Question about this project:
=======
Contact me at [luca palomba - web developer](http://lucapalomba.it)


    