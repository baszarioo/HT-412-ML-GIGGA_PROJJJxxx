/* 
'pug@~3.0.0' has already been installed, and is listed as a dependency in your 'package.json' file.
Express needs to know which template engine you are using. Use the 'set' method to assign 'pug' as the 'view engine' property's value.
	
	app.set('view engine', 'pug');

After that, add another 'set' method that sets the 'views' property of your 'app' to point to the './views/pug' directory. This tells Express to render all views relative to that directory.
Finally, use 'res.render()' in the route for your home page, passing 'index' as the first argument. This will render the 'pug' template.
*/
