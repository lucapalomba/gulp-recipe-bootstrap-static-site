# Speeder Website generator, optimizer flavoured

A simple Gulp Recipe for create and optimize landing pages or static websites

Mission
=======

Create a simple **Task/Generator for static websites** without using any server side technologies or cache system.
It can be usefull for Light/Small Business Developer for creating landing pages or multiple pages websites without using CMS.

This system **integrates optimizer** (minifying, img optimizer, ... ) in order to avoid you wasting your time looking for the best online tool, use it and then enter the results in your project.

briefly:
  * [SPEED]
  * [WEB OPTIMIZATION]
  
TOC
=======
  * [Specifications](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#specs)
    * [Speeders](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#speeders)    
      * [Bootstrap](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#bootstrap)
      * [Twig](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#twig)
      * [SASS](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#sass-or-scss)
      * [Browser Syncronized](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#browser-syncronized)
      
  * [What you need before install](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#what-you-need-before-install)
 
  * [How to install](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#how-to-install)
  * [How to Run](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#how-to-run)  
  
  * [Question about this project](https://github.com/lucapalomba/gulp-recipe-bootstrap-static-site#question-about-this-project)
  
  
  
Specifications:
=======

##Speeders:

This project includes some platforms,libs and frameworks to **make you work faster**.

Is important for you have some layers who can help you to increase your productivity and don't loss your quality and creativity time.

There's the list of speeders included in this project:

###Bootstrap
Bootstrap is usefull for creating UI in a **simple and fast way**.  
It uses most of common data UI structure ready out-of-the-box, well written and reliable. That's why I've decided to put inside this project.

Use the official [knowledge base](http://getbootstrap.com/) to understand how it works and how to use it.

###Twig
Twig is a template engine who can use many abstraction layers and so allows you to compile templates also with complex structure like: templating, inheritance, imports, data injections...
It's usefull in a project like this because allows to have **many pages with the same structure** (generally header, footer, sidebars...)    

Take a look in the [Twig official repository](http://twig.sensiolabs.org/)

###SASS (or Scss)
With Sass you can write CSS using cool functions like calculations, variables and hineritances melted up with a simple writing way.
Sass allows you to **save a large amount of time**, especially when you use complex templates or a personalized graphics.  

[Learn the base of Sass](http://sass-lang.com/guide)

###Browser Syncronized
After you start and run this project you can use the auto-sync or manual sync of browser-sync package. This package allow you to writing code on your IDE and see in real-time what happen to our html without reload the entire page.

[See for info and specs](http://www.browsersync.io/)

###Automatic sitemap generation


##Optimizers

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


    