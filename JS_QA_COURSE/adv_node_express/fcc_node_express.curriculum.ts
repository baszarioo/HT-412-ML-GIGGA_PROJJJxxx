/* 
'pug@~3.0.0' has already been installed, and is listed as a dependency in your 'package.json' file.
Express needs to know which template engine you are using. Use the 'set' method to assign 'pug' as the 'view engine' property's value.
	
	app.set('view engine', 'pug');

After that, add another 'set' method that sets the 'views' property of your 'app' to point to the './views/pug' directory. This tells Express to render all views relative to that directory.
Finally, use 'res.render()' in the route for your home page, passing 'index' as the first argument. This will render the 'pug' template.
*/

// -----------------------------------------------------------------------------

/*
One of the greatest features of using a template engine is being able to pass variables from the server to the template file before rendering it to HTML.
In your Pug file, you're able to use a variable by referencing the variable name as '#{variable_name}' inline with other text on an element or by using an equal sign on the element without a space such as 'p=variable_name' which assigns the variable's value to the p element's text.
Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site. EXMPL:

	head
		script(type='text/javascript').
			if (foo) bar(1+5);
	body
		if youAreUsingPug
			p You are amazing
		else 
			p Get on it!

The above yields as the HTML - it's easy.
- Your 'index.pug' file included in your project, uses the variables 'title' and 'message'.
Pass those from your server to the Pug file by adding an object as a second argument to your 'res.render' call with the variables and their values. Give the 'title' a value of 'Hello' and 'message' a value of 'Please log in'.
- It should look like:
	
	res.render('index', { title: 'Hello', message: 'Please log in' });

Now refresh page, and it should display those values rendered in your view in the correct spot as laid out in your 'index.pug' file.

// -----------------------------------------------------------------------------