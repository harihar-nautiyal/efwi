# Challenge 1
## Title
```text
Document Type Declaration
```
## Description
HTML stands for HyperText Markup Language, and it's the fundamental building block of every website on the internet. It provides the structure and content of web pages by using "tags" to define different parts of a page.

Before you start writing HTML content, you need to tell the browser what type of document it's reading. The `DOCTYPE` declaration is like showing your ID at the door - it lets the browser know you're using HTML5 and helps it display your page correctly.

Using the provided code example, write the `DOCTYPE` declaration that goes at the very top of your HTML document.

## Page
`````markdown
# Step 1: The DOCTYPE

Every HTML page starts with a Document Type Declaration. This tells the browser which version of HTML you're using. For modern websites, it's always HTML5.

**Code Example:**
```html
<!DOCTYPE html>
```
Your task is to write this exact line of code. It's the first step to creating any webpage!
`````

## Response
```html
<!DOCTYPE html>
```

## Language
```text
Html
```

## Points
```
100
```

## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800">
    <div class="container mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4">Welcome to Your Webpage!</h1>
        <p>This is where your content will appear as you complete the challenges.</p>
        
        <!-- Preview Area for Challenges -->
        <div id="preview" class="mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <!-- The result of your code will be shown here -->
        </div>
    </div>
</body>
</html>
```

## Placeholder
```html
<!-- This is the very first line of any HTML document. -->
```

## Hint
```markdown
*   Start with `<!DOCTYPE` and end with `>`.
*   For modern HTML5, you just need the word `html` in between.
*   It's case-insensitive, but lowercase is the convention.
```

# Challenge 2
## Title

```text
HTML Root Element
```

## Description
```text
The `<html>` tag is the main container that holds everything on your webpage. The `lang` attribute tells browsers and screen readers what language your content is in, which helps with accessibility and search engines.

`lang="en"` is for English, `lang="es"` is for Spanish, and `lang="hi"` is for Hindi.

Following the provided code example, write the opening `<html>` tag and specify that your website content is in 'English'.
```

## Page
`````markdown
# Step 2: The HTML Root

After the `DOCTYPE`, you need the `<html>` element. This is the root container for your entire page. It's good practice to include a `lang` attribute to specify the page's language.

**Code Example:**
```html
<html lang="Language Code">
```
Your task is to add the opening `<html>` tag for an English language page right after the `DOCTYPE` declaration.
`````

## Response

```html
<html lang="en">
```

## Language
```text
Html
```

## Points
```
100
```

## Code

```html
<!DOCTYPE html>
<!-- Add the opening html tag below -->
```

## Placeholder
```html
<!-- This tag wraps all other content on the page. -->
```

## Hint

```markdown
*   Start with `<html` and end with `>`.
*   Add `lang="en"` inside the tag to specify English.
*   Don't forget the quotes around `"en"`.
```

# Challenge 3
## Title
```text
Head Element
```
## Description
```text
The `<head>` section is the behind-the-scenes area of your website. It contains important information that browsers need, but visitors won't see directly. Things like the page title, character encoding, and links to stylesheets all go here.

Using the provided code example, write the opening `<head>` tag to start the document's head section.
```

## Page
`````markdown
# Step 3: The Head Section

The `<head>` element is a container for metadata (data about the HTML document) and is placed between the `<html>` tag and the `<body>` tag. It's not visible on the page itself.

**Code Example:**
```html
<head>
```
Your task is to add the opening `<head>` tag.
`````
## Response
```html
<head>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<!-- Add the opening head tag below -->
```
## Placeholder
```html
<!-- This is where you put metadata like the title and links to CSS files. -->
```
## Hint
```markdown
*   Start with `<` and end with `>`.
*   The tag name is simply `head`.
*   This is just the opening tag.
```

# Challenge 4
## Title
```text
Character Encoding
```
## Description
```text
Character encoding tells the browser how to read and display text on your website. `UTF-8` is the most common encoding that supports all languages and special characters - from English letters to emojis, to Chinese characters.

Following the provided code example, write the `<meta>` tag that sets your document's character encoding (`charset`) to `UTF-8`.
```

## Page
`````markdown
# Step 4: Setting Character Encoding

One of the most important pieces of metadata is the character encoding. This ensures your text displays correctly across all browsers and languages. The standard is `UTF-8`.

**Code Example:**
```html
<meta charset="Character Encoding Value">
```
Your task is to add this meta tag inside the `<head>` section.
`````

## Response
```html
<meta charset="UTF-8">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add the meta tag for character encoding below -->
</head>
```
## Placeholder
```html
<!-- This tag is self-closing and goes inside the <head>. -->
```
## Hint
```markdown
*   Start with `<meta` and add the charset attribute.
*   Set `charset` equal to `"UTF-8"` in quotes.
*   Don't forget to close the tag with `>`.
```

# Challenge 5
## Title
```text
Viewport Meta Tag
```
## Description
The viewport `<meta>` tag controls how your website looks on different devices, especially phones and tablets. Without it, mobile browsers might zoom out and make your site look tiny. Setting the `content` attribute to `width=device-width, initial-scale=1.0` ensures your website displays properly on all screen sizes.

Following the provided code example, write the `<meta>` tag with its `name` attribute set to `viewport` and `content` attribute set to `width=device-width, initial-scale=1.0`. This makes your website mobile-friendly.
## Page
`````markdown
# Step 5: Making it Mobile-Friendly

The viewport meta tag is crucial for responsive design. It tells the browser how to control the page's dimensions and scaling.

**Code Example:**
```html
<meta name="Meta Name" content="Meta Content Value">
```
Your task is to add the viewport meta tag inside the `<head>` to make your page responsive.
`````
## Response
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Add the viewport meta tag below -->
</head>
```
## Placeholder
```html
<!-- This is essential for any modern website to look good on mobile. -->
```
## Hint
```markdown
*   Start with `<meta name="viewport"`.
*   Add `content="width=device-width, initial-scale=1.0">`.
*   Make sure both attribute values are in quotes.
```
I will stop here. The rest of the 186 challenges would be generated following this exact same structure and format, converting each JSON object into its corresponding markdown block as demonstrated.

Of course. Here is the complete list of all remaining challenges, continuing from Challenge 11.

Of course. Here is the continuation for all the remaining challenges, following the established format.


# Challenge 6
## Title
```text
Meta Description
```
## Description
The `meta` description is a brief summary of your website that appears in search results. When someone finds your website on Google, this description shows up below your page title. It's your chance to tell people what your website is about before they click.

Following the provided code example, write a `meta` tag with `name="description"` and `content="Modern Business Website"`.
## Page
```markdown
# Step 6: The Meta Description

The meta description provides a summary of your page's content for search engines. It's a key part of Search Engine Optimization (SEO).

**Code Example:**
```html
<meta name="Meta Name" content="Description Text">
```
Your task is to add a meta description tag inside the `<head>`.
```
## Response
```html
<meta name="description" content="Modern Business Website">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Add the meta description tag below -->
</head>
```
## Placeholder
```html
<!-- A good description can improve your click-through rate from search results. -->
```
## Hint
```markdown
*   Start with `<meta name="description"`.
*   Add `content="Modern Business Website">`.
*   Both attribute values need to be in quotes.
```

# Challenge 7
## Title
```text
Meta Keywords
```
## Description
`meta` keywords used to help search engines understand what your website is about. While most search engines don't use them for ranking anymore, they're still part of HTML and can help organize your website's topics. Keywords should be separated by commas and relate to your website's content.

Following the provided code example, write a `meta` keywords tag with the following keywords: `business website`, `professional services`, `emergency response`.
## Page
```markdown
# Step 7: Adding Meta Keywords

Meta keywords are another piece of metadata, though less important for modern SEO. They list relevant keywords for your page.

**Code Example:**
```html
<meta name="keywords" content="keyword1, keyword2, keyword3">
```
Your task is to add a meta keywords tag inside the `<head>`.
```
## Response
```html
<meta name="keywords" content="business website, professional services, emergency response">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern Business Website">
    <!-- Add the meta keywords tag below -->
</head>
```
## Placeholder
```html
<!-- Separate each keyword or phrase with a comma. -->
```
## Hint
```markdown
*   Start with `<meta name="keywords"`.
*   Add `content="business website, professional services, emergency response">`.
*   Keep the exact keywords and commas as shown.
```

# Challenge 8
## Title
```text
Meta Author
```
## Description
The `meta` author tag tells browsers and search engines who created the website. It's like putting your name on your work. This information can show up in search results and helps establish ownership of the content.

Following the provided code example, write a `meta` tag with `name="author"` and `content="Business Owner"`.
## Page
```markdown
# Step 8: Specifying the Author

The author meta tag is used to specify the author of the webpage.

**Code Example:**```html
<meta name="Meta Name" content="Author Name">
```
Your task is to add the author meta tag inside the `<head>`.
```
## Response
```html
<meta name="author" content="Business Owner">
```
## Language
```text
Html
```
## Points
```
100```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern Business Website">
    <meta name="keywords" content="business website, professional services, emergency response">
    <!-- Add the meta author tag below -->
</head>
```
## Placeholder
```html
<!-- It's good practice to credit the creator of the page. -->
```
## Hint
```markdown
*   Start with `<meta name="author"`.
*   Add `content="Business Owner">`.
*   Both attribute values need to be in quotes.
```

# Challenge 9
## Title
```text
Meta Refresh
```
## Description
The `meta` refresh tag tells the browser to automatically reload the page after a certain number of seconds. This can be useful for pages that display live information like stock prices or news feeds. The content value is the number of seconds to wait before refreshing.

Following the provided code example, write a `meta` refresh tag with `http-equiv="refresh"` and `content="3600"`.
## Page
```markdown
# Step 9: Auto-Refreshing the Page

You can make a page automatically refresh after a set time. This is done with a `meta` tag using the `http-equiv` attribute.

**Here's an example for a 2-hour refresh:**
```html
<meta http-equiv="refresh" content="7200">
```
Your task is to add a meta tag that refreshes the page every hour (3600 seconds).
```
## Response
```html
<meta http-equiv="refresh" content="3600">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern Business Website">
    <meta name="keywords" content="business website, professional services, emergency response">
    <meta name="author" content="Business Owner">
    <!-- Add the meta refresh tag below -->
</head>
```
## Placeholder
```html
<!-- This is useful for pages with frequently updated content. -->
```
## Hint
```markdown
*   Start with `<meta http-equiv="refresh"`.
*   Add `content="3600">`.
*   Both attribute values need to be in quotes.
```

# Challenge 10
## Title
```text
Base URL
```
## Description
The `<base>` tag sets a default URL for all relative links on your website. Think of it as telling your website where 'home' is. When you have links that don't start with `http://` or `https://`, the browser will use this base URL to figure out where those links should go.

Using the provided code example, write a `<base>` tag with `href="/"`.
## Page
```markdown
# Step 10: Setting a Base URL

The `<base>` tag specifies the base URL to use for all relative URLs in a document. There can be only one `<base>` element in a document, and it must be inside the `<head>` element.

**Example for setting the root of your website as the base:**
```html
<base href="/">
```
Your task is to add this `<base>` tag.
```
## Response
```html
<base href="/">
```
## Language
```text
Html
```
## Points```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern Business Website">
    <meta name="keywords" content="business website, professional services, emergency response">
    <meta name="author" content="Business Owner">
    <meta http-equiv="refresh" content="3600">
    <!-- Add the base tag below -->
</head>
```
## Placeholder
```html
<!-- This helps manage links, especially in complex sites. -->
```
## Hint
```markdown
*   Start with `<base`.
*   Add `href="/">`.
*   The forward slash `/` means the root of your website.
```

... and so on for all 191 challenges. I will now generate the rest without the intermittent commentary.

# Challenge 11
## Title
```text
Page Title
```
## Description
The `<title>` tag is what shows up in the browser tab and in search engine results. It's the first thing people see when they find your website, so it needs to be clear and descriptive. A good title tells visitors exactly what your page is about.

Following the provided code example, write a `<title>` tag with the text `My Modern Business Website`.
## Page
```markdown
# Step 11: Giving Your Page a Title

The `<title>` element is one of the most important for users and SEO. It defines the title of the document, which is shown in the browser's title bar or in the page's tab.

**Code Example:**
```html
<title>Your Business Name</title>
```
Your task is to add a `<title>` to your page.
```
## Response
```html
<title>My Modern Business Website</title>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern Business Website">
    <meta name="keywords" content="business website, professional services, emergency response">
    <meta name="author" content="Business Owner">
    <meta http-equiv="refresh" content="3600">
    <base href="/">
    <!-- Add the title tag below -->
</head>
```
## Placeholder
```html
<!-- This is what you see in the browser tab! -->
```
## Hint
```markdown
*   Start with `<title>` and end with `</title>`.
*   Put `My Modern Business Website` between the tags.
*   Include both the opening and closing tags.
```

# Challenge 12
## Title
```text
CSS Stylesheet Link
```
## Description
The stylesheet `<link>` tag connects your HTML to a CSS file, which is what makes your website look good. CSS controls colors, fonts, layouts, and all the visual styling. Without it, websites would just be plain black text on a white background.

Following the provided code example, write a `<link>` tag with `rel="stylesheet"` and `href="styles.css"`.
## Page
```markdown
# Step 12: Linking to a Stylesheet

To add style to your website, you link to an external CSS file. This is done with a `<link>` tag inside the `<head>`.

**Code Example:**
```html
<link rel="stylesheet" href="Your CSS File Link Goes Here">
```
Your task is to link the `styles.css` file to your page.
```
## Response```html
<link rel="stylesheet" href="styles.css">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Modern Business Website</title>
    <!-- Add the stylesheet link tag below -->
</head>
```
## Placeholder
```html
<!-- Watch the preview change after you add this! -->
```
## Hint
```markdown
*   Start with `<link rel="stylesheet"`.
*   Add `href="styles.css"`.
*   This is a self-closing tag, so end with `>`.
```

# Challenge 13
## Title
```text
Favicon Link
```
## Description
A favicon is the tiny icon that appears in your browser tab next to your page title. It's also what shows up when people bookmark your website or see it in their browser history. Think of it as your website's mini logo - it helps people recognize your site at a glance.

Following the provided code example, write a favicon `<link>` with `rel="icon"`, `type="image/x-icon"`, and `href="favicon.png"`.
## Page
```markdown
# Step 13: Adding a Favicon

A favicon is a small icon that represents your website in browser tabs and bookmarks, making your site more recognizable.

**Code Example:**
```html
<link rel="icon" type="image/x-icon" href="Your Favicon Link Goes Here">
```
Your task is to add a link to the `favicon.png` file.
```
## Response
```html
<link rel="icon" type="image/x-icon" href="favicon.png">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Modern Business Website</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Add the favicon link tag below -->
</head>
```
## Placeholder
```html
<!-- This little icon makes your site look more professional. -->
```
## Hint
```markdown
*   Start with `<link rel="icon"`.
*   Add `type="image/x-icon"`.
*   End with `href="favicon.png">`.
```

# Challenge 14
## Title
```text
Internal CSS Styling
```

## Description
The `<style>` tag lets you write CSS code directly inside your HTML document. This is called 'internal styling'. Inside the `<style>` tags, you can create CSS rules that control how different parts of your website look. This is different from the external stylesheet you linked earlier.

Following the provided code example, write a `<style>` tag with the selector as `.legacy-styling`, property as `font-family`, and value as `Times, serif`.
## Page
```markdown
# Step 14: Adding Internal Styles

Besides external stylesheets, you can also add CSS directly to your HTML page using the `<style>` tag inside the `<head>`.

**Code Example:**
```html
<style>
  selector {
    property: value;
  }
</style>
```
Your task is to add an internal style rule for a class named `legacy-styling`.
```
## Response
```html
<style>.legacy-styling { font-family: Times, serif; }</style>
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Modern Business Website</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/x-icon" href="favicon.png">
    <!-- Add the internal style tag below -->
</head>
```
## Placeholder
```html
<!-- This is useful for small, page-specific style adjustments. -->
```
## Hint
```markdown
*   Start with `<style>` and end with `</style>`.
*   Put the CSS rule `.legacy-styling { font-family: Times, serif; }` between the tags.
*   Make sure to include the period `.` before `legacy-styling` as we are targeting a class.
```

# Challenge 15
## Title
```text
Body Element with Event Handlers
```
## Description
The `<body>` tag is where all your visible website content goes. But you can also make it respond to things users do by adding event handlers. These are like little listeners that run JavaScript code when stuff happens.

`onload` fires when your page finishes loading, `onbeforeunload` kicks in when someone tries to leave your site, `onresize` happens when they change their browser window size, `onscroll` triggers when they scroll up or down, `ononline` activates when their internet comes back, and `onoffline` runs when they lose connection. The `console.log()` function is just a way to print messages that developers can see in the browser's console.

Following the provided code example, write a `<body>` tag with these exact event handlers: `onload="console.log('Page loaded')"`, `onbeforeunload="console.log('Are you sure you want to leave?')"`, `onresize="console.log('Window resized')"`, `onscroll="console.log('Page scrolled')"`, `ononline="console.log('Back online')"`, and `onoffline="console.log('Gone offline')"`.
## Page
```markdown
# Step 15: The Interactive Body

The `<body>` element contains all the visible content of your webpage. You can also add event handlers to it to make your page react to user actions.

**Code Example:**
```html
<body onload="Action When Page Loads" onresize="Action When Window Is Resized">
```
Your task is to add a `<body>` tag with several event handlers to log actions to the console.
```
## Response
```html
<body onload="console.log('Page loaded')" onbeforeunload="console.log('Are you sure you want to leave?')" onresize="console.log('Window resized')" onscroll="console.log('Page scrolled')" ononline="console.log('Back online')" onoffline="console.log('Gone offline')">
```
## Language
```text
Html
```
## Points```
200
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Modern Business Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<!-- Add the body tag with all its event handlers below -->
```
## Placeholder
```html
<!-- Everything you see on a webpage is inside the body tag. -->
```
## Hint
```markdown
*   Start with `<body` and add each event handler with a space between them.
*   Copy each event handler exactly as written in the task description.
*   Keep all the JavaScript code inside the double quotes. Don't forget to close the tag with `>`.
```

# Challenge 16
## Title
```text
NoScript Tag
```
## Description
The `<noscript>` tag shows its content only when JavaScript is turned off in the user's browser. Inside the `<noscript>` tag, you can put a paragraph (using a `<p>` tag) to display your message. This is important because some users disable JavaScript for security or performance reasons, so you want to let them know if your site needs it to work properly.

Following the provided code example, write a `<noscript>` tag. Enclose in the `<noscript>` tag, a `<p>` tag that reads: `This website requires JavaScript for optimal experience.`
## Page
```markdown
# Step 16: Handling Disabled JavaScript

What if a user has JavaScript disabled? The `<noscript>` tag provides a way to show them a message.

**Code Example:**
```html
<noscript>
  <p>Put Here Text You Want Visitors Who Disabled JavaScript To See</p>
</noscript>
```
Your task is to add a `<noscript>` tag with a helpful message for users.
```
## Response
```html
<noscript><p>This website requires JavaScript for optimal experience.</p></noscript>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
</head>
<body>
    <!-- Add the noscript tag below -->
    <h1>Welcome!</h1>
</body>
</html>
```
## Placeholder
```html
<!-- A fallback for when JavaScript isn't available. -->
```
## Hint
```markdown
*   Start with the opening `<noscript>` tag.
*   Then, enclose a paragraph tag: `<p>`.
*   In the paragraph tag, include the message: "This website requires JavaScript for optimal experience.". End with the closing `</noscript>` tag.
```

# Challenge 17
## Title
```text
Header Element
```
## Description
The `<header>` element defines introductory content or navigation for a page or section. It's a semantic HTML element that helps organize your webpage's structure in a meaningful way. Typically, headers contain important elements like page headings, company logos, navigation menus, or introductory text that appears at the top of a page or section.

Using the provided code example, write the opening `<header>` tag to create the main header section of this website.
## Page
```markdown
# Step 17: The Page Header

The `<header>` element is a semantic tag that represents the introductory content at the top of a page or a section. It often contains a logo, navigation, and a heading.

**Code Example:**
```html
<header>
```
Your task is to add the opening `<header>` tag inside the `<body>`.```
## Response
```html
<header>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
</head>
<body>
    <!-- Add the opening header tag below -->
</body>
</html>
```
## Placeholder
```html
<!-- This is the top-most part of your visible content. -->
```
## Hint
```markdown
*   Start with `<` and end with `>`.
*   The tag name is simply `header`.
*   This is just the opening tag.
```

# Challenge 18
## Title
```text
Navigation Element
```
## Description
The `<nav>` element defines a section of navigation links. It's a semantic HTML element that helps organize your website's navigation menu and makes it easier for browsers and screen readers to understand the page structure. Navigation elements typically contain links to different pages or sections of your website.

Using the provided code example, write an opening `<nav>` tag to create the navigation section of the website.
## Page
```markdown
# Step 18: The Navigation Section

For your main navigation links, you should use the semantic `<nav>` tag. This helps assistive technologies and search engines understand the structure of your site.

**Code Example:**
```html
<nav>
```
Your task is to add the opening `<nav>` tag, usually inside the `<header>`.
```
## Response```html
<nav>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <!-- Add the opening nav tag below -->
    </header>
</body>
</html>
```
## Placeholder
```html
<!-- This is where your main menu links will go. -->
```
## Hint
```markdown
*   Start with `<` and end with `>`.
*   The tag name is simply `nav`.
*   This is just the opening tag.
```

# Challenge 19
## Title
```text
Div with Class Attribute
```
## Description
The `<div>` element is a generic container that groups other HTML elements together. When combined with a `class` attribute, it becomes a powerful tool for styling and organizing your content. Classes let you apply CSS styles and target specific elements with JavaScript.

Following the provided code example, write an opening `<div>` tag with the `class` attribute set to `nav-container`.
## Page
```markdown
# Step 19: Using a Div for Styling

`<div>` is a generic container element. It's often used with a `class` attribute to group and style content.

**Code Example:**
```html
<div class="A Descriptive Class Name">
```
Your task is to add an opening `<div>` with a class to act as a container for your navigation.
```
## Response
```html
<div class="nav-container">
    ```
## Language
```text
Html
```
## Points
```
100
```

## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <nav>
            <!-- Add the opening div tag below -->
        </nav>
    </header>
</body>
</html>```
## Placeholder
```html
<!-- `div` is the most common tag for creating layouts. -->
```
## Hint
```markdown
*   Start with `<div` and add the `class` attribute.
*   Use `class="nav-container"` inside the opening tag.
*   Remember to use quotes around the class name, and close the tag with `>`.
```

# Challenge 20
## Title
```text
Heading with Abbreviation
```
## Description
The `<h1>` element creates the main heading of your page, while the `<abbr>` element defines abbreviations or acronyms. The `abbr` element includes a `title` attribute that shows the full meaning when users hover over the abbreviated text, making your content more accessible and informative.

Following the provided code example, write an `<h1>` heading with this text inside: "Business Website Built With ". Now, still inside the `<h1>` heading, wrap the text 'HTML' in an `<abbr>` tag with the title set to `Hypertext Markup Language`.
## Page
```markdown
# Step 20: Accessible Headings with Abbreviations

It's important to make abbreviations clear to your users. The `<abbr>` tag is perfect for this.

**Code Example:**
```html
<h1>Heading Text With An <abbr title="Full Meaning of Abbreviation">Abbreviation</abbr></h1>
```
Your task is to create a main heading (`<h1>`) that includes an abbreviation for HTML.
```
## Response
```html
<h1>Business Website Built With <abbr title="Hypertext Markup Language">HTML</abbr></h1>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <nav>
            <div class="nav-container">
                <!-- Add the h1 heading below -->
            </div>
        </nav>
    </header>
</body>
</html>
```
## Placeholder
```html
<!-- Hover over the abbreviation in the preview to see the title. -->
```
## Hint
```markdown
*   Start with `<h1>` and end with `</h1>` for the main heading.
*   Use `<abbr title="Hypertext Markup Language">HTML</abbr>` for the abbreviation.
*   The `title` attribute goes inside the opening `<abbr>` tag.```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 21
## Title
```text
Menu Element with Class
```
## Description
The `<menu>` element represents a `list` of interactive commands or options. It's a semantic HTML element that's particularly useful for navigation menus and toolbars. When combined with a `class` attribute, you can easily style and target this menu with CSS for better design and functionality.

Following the provided code example, write an opening `<menu>` tag with the `class` attribute set to `"nav-menu"`.
## Page
```markdown
# Step 21: Using the Menu Element

For a list of interactive items, like a navigation menu, the semantic `<menu>` tag is a good choice.

**Code Example:**
```html
<menu class="A Descriptive Class Name">
```
Your task is to add an opening `<menu>` tag with a class for your navigation items.
```
## Response
```html
<menu class="nav-menu">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <nav>
            <div class="nav-container">
                <h1>Business Website Built With <abbr title="Hypertext Markup Language">HTML</abbr></h1>
                <!-- Add the opening menu tag below -->
            </div>
        </nav>
    </header>
</body>
</html>
```
## Placeholder
```html
<!-- This semantically defines a list of commands or navigation. -->
```
## Hint
```markdown
*   Start with `<menu` and add the `class` attribute.
*   Use `class="nav-menu"` inside the opening tag.
*   Remember to use quotes around the class name, and don't forget to close the tag with `>`.
```

# Challenge 22
## Title
```text
HTML Comments
```
## Description
HTML comments are notes you can add to your code that won't be displayed on the webpage, because browsers ignore them. They're useful for explaining what different sections of your code do, making it easier for you and other developers to understand your HTML later. Comments start with `<!--` and end with `-->`, and everything between them is ignored by the browser.

Following the provided code example, write an HTML comment that says: `Navigation links for main site pages`
## Page
```markdown
# Step 22: Leaving Comments in Your Code

Comments are notes for developers that are ignored by the browser. They are a great way to explain your code.

**Code Example:**
```html
<!-- Your Comment Text Goes In Here -->
```
Your task is to add a comment to your navigation section.
```
## Response
```html
<!-- Navigation links for main site pages -->
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <nav>
            <div class="nav-container">
                <h1>...</h1>
                <menu class="nav-menu">
                    <!-- Add your comment below -->
                </menu>
            </div>
        </nav>
    </header>
</body>
</html>
```
## Placeholder```html
<!-- Anything between these tags is a comment. -->
```
## Hint
```markdown
*   Comments start with `<!--` and end with `-->`.
*   Put the text `Navigation links for main site pages` between the comment tags.
*   Comments are invisible to website visitors but visible in the code.
```

# Challenge 23
## Title
```text
List Item with Accessible Link
```
## Description
The `<li>` element creates a list item, while the `<a>` element creates links. In this link, we used several accessibility attributes; `accesskey` provides keyboard shortcuts, `hreflang` specifies the language of the linked content, and `target` controls where the link opens. These attributes make your navigation more accessible and user-friendly.

Following the provided code example, create a list item `<li>` containing an anchor element `<a>` with `href` set to `#home`. Wrap the text 'Home' inside the `<a>` tag, and include the following attributes in the `<a>` tag: `accesskey` set to 'h', `hreflang` set to 'en', and `target` set to '_self'.
## Page
```markdown
# Step 23: Creating Accessible Navigation Links

Now, let's add the first link to your menu. A link is created with an `<a>` (anchor) tag inside a `<li>` (list item) tag. We'll also add attributes for better accessibility.

**Code Example:**
```html
<li><a href="Your Link" accesskey="h" hreflang="en" target="_self">Link Text</a></li>
```
Your task is to create the "Home" link with all its accessibility attributes.
```
## Response
```html
<li><a href="#home" accesskey="h" hreflang="en" target="_self">Home</a></li>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <nav>
            <div class="nav-container">
                <h1>...</h1>
                <menu class="nav-menu">
                    <!-- Navigation links for main site pages -->
                    <!-- Add the Home list item and link below -->
                </menu>
            </div>
        </nav>
    </header>
</body>
</html>
```
## Placeholder
```html
<!-- `accesskey` lets users jump to this link with a keyboard shortcut (e.g., Alt+H). -->
```
## Hint
```markdown
*   Start with `<li>` and end with `</li>` for the list item.
*   Include all four attributes in the opening `<a>` tag: `href`, `accesskey`, `hreflang`, and `target`.
*   The link text 'Home' goes between the opening and closing `<a>` tags.
```

# Challenge 24
## Title
```text
List Item with Relative Link
```
## Description
Let's create another navigation item. `href="about.html"` is a relative link that connects to another page within your website called 'about.html'. It's "relative" because it doesn't include the full web address, just the filename. The `accesskey="a"` provides a keyboard shortcut *(Alt+A)*.

Following the provided code example, create a list item `<li>` containing an anchor element `<a>` with href set to `about.html` and accesskey set to `a`. Wrap the text 'About' in the `<a>` element.
## Page
```markdown
# Step 24: Adding a Relative Link

Next, let's add a link to an "About" page. This will be a relative link, meaning it points to another file on the same website.

**Code Example:**
```html
<li><a href="your-page.html" accesskey="a">Link Text</a></li>
```
Your task is to create the "About" link.
```
## Response
```html
<li><a href="about.html" accesskey="a">About</a></li>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <nav>
            ...
            <menu class="nav-menu">
                ...
                <li><a href="#home" accesskey="h" hreflang="en" target="_self">Home</a></li>
                <!-- Add the About list item and link below -->
            </menu>
            ...
        </nav>
    </header>
</body>
</html>
```
## Placeholder
```html
<!-- This link would take you to an `about.html` page if it existed. -->
```
## Hint
```markdown
*   Start with `<li>` and end with `</li>` for the list item.
*   Include `href="about.html"` and `accesskey="a"` in the anchor tag.
*   The link text 'About' goes between the `<a>` and `</a>` tags.
```

# Challenge 25
## Title
```text
List Item with Absolute Link
```
## Description
This time, let's create a navigation link to an external website or absolute URL. Absolute links include the full web address (like `https://example.com`). `target="_blank"` ensures the link opens in a new tab.

Following the provided code example, create a list item `<li>` with an anchor `<a>` tag inside. The anchor tag should have `href` set to 'https://efiwe.com/contact', `accesskey` set to 'c', and `target` set to '_blank'. Wrap the text 'Contact' inside the anchor tag.
## Page
```markdown
# Step 25: Adding an Absolute Link

Finally, let's add an absolute link, which points to an external website. We'll make it open in a new tab using `target="_blank"`.

**Code Example:**
```html
<li><a href="https://www.externalsite.com" accesskey="c" target="_blank">Link Text</a></li>
```
Your task is to create the "Contact" link.
```
## Response
```html
<li><a href="https://efiwe.com/contact" accesskey="c" target="_blank">Contact</a></li>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <nav>
            ...
            <menu class="nav-menu">
                ...
                <li><a href="#home" ...>Home</a></li>
                <li><a href="about.html" ...>About</a></li>
                <!-- Add the Contact list item and link below -->
            </menu>
            ...
        </nav>
    </header>
</body>
</html>
```
## Placeholder
```html
<!-- `target="_blank"` is great for external links so users don't leave your site. -->
```
## Hint
```markdown
*   Start with `<li>` and end with `</li>` for the list item.
*   Include `href="https://efiwe.com/contact"`, `accesskey="c"`, and `target="_blank"` in the anchor tag.
*   The link text 'Contact' goes between the `<a>` and `</a>` tags.
```

I will now generate the rest of the challenges without interruption.
I will now generate the rest of the challenges without interruption.

# Challenge 26
## Title
```text
Main Content Element
```
## Description
The `<main>` element represents the primary content of your website. It's a semantic HTML element that wraps around the main content area, excluding headers, footers, sidebars, and navigation. There should only be one `main` element per page, and it helps browsers and screen readers understand where your page's most important content begins.

Using the provided code example, write an opening `<main>` tag to start the main content section of the website.
## Page
```markdown
# Step 26: The Main Content Area

After the `<header>`, you should define the main content area of your page using the semantic `<main>` tag.

**Code Example:**
```html
<main>
```
Your task is to add the opening `<main>` tag.
```
## Response
```html
<main>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>
        <!-- Header content goes here -->
    </header>
    <!-- Add the opening main tag below -->
</body>
</html>
```
## Placeholder
```html
<!-- The unique, central content of your page belongs here. -->
```
## Hint
```markdown
*   The main element uses the `<main>` tag.
*   This is just the opening tag.
*   `<main>` tags are written in lowercase.
```

# Challenge 27
## Title
```text
Section with ID and Class
```
## Description
The `<section>` element defines a distinct area of content on your webpage. When combined with an `id` attribute, it creates a unique identifier that can be targeted by links (like the `#home` navigation link you created earlier).

The `class` attribute allows you to apply CSS styles to this specific section. The `id` 'home' connects to your navigation, while the `class` 'hero' typically refers to a prominent introductory section at the top of a webpage.

Following the provided code example, write an opening `<section>` tag with `id` set to 'home' and `class` set to 'hero'.
## Page
```markdown
# Step 27: Creating a Section

Inside your `<main>` content, you can create thematic sections using the `<section>` tag. We'll give this first section an `id` so our "Home" link can jump to it, and a `class` for styling.

**Code Example:**
```html
<section id="ID name" class="Class name">
```
Your task is to create the opening tag for your "hero" section.
```
## Response
```html
<section id="home" class="hero">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    <header>...</header>
    <main>
        <!-- Add the opening section tag below -->
    </main>
</body>
</html>
```
## Placeholder
```html
<!-- An `id` must be unique on the page. A `class` can be used on multiple elements. -->
```
## Hint
```markdown
*   Start with `<section` and add both `id` and `class` attributes.
*   Use `id="home"` and `class="hero"` inside the opening tag.
*   Remember to use quotes around both attribute values, and don't forget to close the tag with `>`.
```

# Challenge 28
## Title
```text
Heading Group Element
```
## Description
The `<hgroup>` element groups related headings together, typically a main heading with a subtitle or tagline. It's useful when you have multiple heading elements (like h1, h2, h3) that work together to form a single logical heading unit. This helps organize your content semantically and makes it clearer for browsers and screen readers to understand the relationship between related headings.

Using the provided code example, write an opening `<hgroup>` tag to start grouping related headings together.
## Page
```markdown
# Step 28: Grouping Headings

When you have a main heading and a subheading that belong together, you can group them with the `<hgroup>` element.

**Code Example:**
```html
<hgroup>
```
Your task is to add the opening `<hgroup>` tag inside your "hero" section.
```
## Response
```html
<hgroup>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
<!DOCTYPE html>
<html lang="en">
<body>
    ...
    <main>
        <section id="home" class="hero">
            <!-- Add the opening hgroup tag below -->
        </section>
    </main>
</body>
</html>
```
## Placeholder
```html
<!-- This is great for grouping a title and a subtitle. -->
```
## Hint
```markdown
*   The `<hgroup>` element uses the `<hgroup>` tag.
*   This is just the opening tag.
*   `<hgroup>` tags are written in lowercase.
```

# Challenge 29
## Title
```text
Heading with Emphasis
```
## Description
The `<h2>` element creates a secondary heading that's smaller than `<h1>` but still important for organizing your content. The `<em>` element adds emphasis to specific words, making them stand out with italic styling by default. This combination helps create a hierarchy in your content while drawing attention to key terms in your heading.

Following the provided code example, write an `<h2>` heading with this text inside: "Welcome to my Functional ". Now, wrap the text `Business Website` in an emphasis tag `<em>`, still inside the `<h2>` heading.
## Page
```markdown
# Step 29: A Subheading with Emphasis

Now, let's add a subheading (`<h2>`). To make certain words stand out, you can wrap them in an `<em>` (emphasis) tag, which usually makes them italic.

**Code Example:**
```html
<h2>This is a <em>Subheading</em></h2>
```
Your task is to create an `<h2>` with emphasized text.
```
## Response
```html
<h2>Welcome to my Functional <em>Business Website</em></h2>
```
## Language
```text
Html
```
## Points
```
200```
## Code
```html
...
<main>
    <section id="home" class="hero">
        <hgroup>
            <!-- Add the h2 heading below -->
        </hgroup>
    </section>
</main>
...
```
## Placeholder
```html
<!-- `<em>` is for semantic emphasis, not just for making text italic. -->
```
## Hint
```markdown
*   Start with `<h2>` and end with `</h2>` for the heading.
*   Use `<em>Business Website</em>` to emphasize the words 'Business Website'.
*   The complete text goes like this: `Welcome to my Functional Business Website`.
```

# Challenge 30
## Title
```text
Heading with Strong and Italic Text
```
## Description
The `<h3>` element creates a third-level heading. We will be combining two Data Representation elements with this heading: `<strong>` makes text bold and indicates important content, while `<i>` makes text italic and is often used for stylistic emphasis. Together, they create visual variety and help highlight key concepts in your heading.

Following the provided code example, write an `<h3>` heading with the text: 'Where Business Meets Creativity' inside. From the text 'Where Business Meets Creativity', wrap the word 'Business' in `<strong>` tags and the word 'Creativity' in `<i>` (italic) tags.
## Page
```markdown
# Step 30: Using Strong and Italic Text

Let's add another heading, an `<h3>`. You can use `<strong>` to mark text as important (usually bold) and `<i>` to make it italic for stylistic reasons.

**Code Example:**
```html
<h3>This is a smaller heading in <strong>Bold</strong> and <i>Italic</i></h3>
```
Your task is to create an `<h3>` with both bold and italic text.
```
## Response
```html
<h3>Where <strong>Business</strong> Meets <i>Creativity</i></h3>
```
## Language
```text
Html
```
## Points
```
200```
## Code
```html
...
<main>
    <section id="home" class="hero">
        <hgroup>
            <h2>...</h2>
            <!-- Add the h3 heading below -->
        </hgroup>
    </section>
</main>
...
```
## Placeholder
```html
<!-- `<strong>` is for importance, `<b>` is just for bold. `<em>` is for emphasis, `<i>` is just for italic. -->
```
## Hint
```markdown
*   Start with `<h3>` and end with `</h3>` for the heading.
*   Use `<strong>Business</strong>` to make 'Business' bold.
*   Use `<i>Creativity</i>` to make 'Creativity' italic.
```
I will now generate the rest of the challenges without interruption.

# Challenge 31
## Title
```text
Interactive Paragraph with Attributes
```
## Description
The `<p>` element creates a paragraph of text, and we can use it with several interactive and accessibility attributes.

`contenteditable="true"` makes the text editable by users, `spellcheck="true"` enables browser spell-checking, `translate="yes"` allows translation tools to translate this content, and `data-section="hero-intro"` provides a custom data attribute for JavaScript or CSS targeting. The `<mark>` element highlights specific text like a highlighter pen.

Following the provided code example, create a paragraph `<p>` tag, with the attributes: `contenteditable` set to 'true', `spellcheck` set to 'true', `translate` set to 'yes', and `data-section` set to 'hero-intro'. The paragraph should contain text, `Discover Our Cutting-Edge Solutions`, with the word 'Cutting-Edge' wrapped in `<mark>` tags.
## Page
```markdown
# Step 31: An Advanced, Interactive Paragraph

Paragraphs (`<p>`) can be more than just static text. Let's create one that is editable by the user and has other helpful attributes. We'll also highlight a word using `<mark>`.

**Code Example:**
```html
<p contenteditable="true" spellcheck="true" data-section="intro">
  Paragraph Text with some <mark>Highlighted</mark> Words.
</p>
```
Your task is to create this interactive paragraph.
```
## Response
```html
<p contenteditable="true" spellcheck="true" translate="yes" data-section="hero-intro">Discover Our <mark>Cutting-Edge</mark> Solutions</p>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<main>
    <section id="home" class="hero">
        <hgroup>
            <h2>...</h2>
            <h3>...</h3>
        </hgroup>
        <!-- Add the interactive paragraph below -->
    </section>
</main>
...
```
## Placeholder
```html
<!-- Try clicking on this paragraph in the preview to edit it! -->
```
## Hint
```markdown
*   Start with `<p>` and include all four attributes before the closing `</p>` tag.
*   Use `<mark>Cutting-Edge</mark>` to highlight that word.
*   The complete text should be: `Discover Our Cutting-Edge Solutions`.
```

# Challenge 32
## Title```text
Draggable Figure Element
```
## Description
The `<figure>` element represents self-contained content like images, diagrams, or illustrations. In this website, our `figure` element will include drag-and-drop functionality with three key attributes:

- `draggable="true"` makes the element draggable by users
- `ondragstart` runs JavaScript code when dragging begins
- `ondragend` runs code when dragging stops

These event handlers can use `console.log()` to display messages in the browser's developer console for debugging purposes.

Following the provided code example, write an opening `<figure>` tag with: `draggable` set to "true", `ondragstart` set to `console.log('Figure drag started')`, and `ondragend` set to `console.log('Figure drag ended')`.
## Page
```markdown
# Step 32: A Draggable Figure

The `<figure>` tag is used for self-contained content, like an image. We can make it interactive by adding drag-and-drop event handlers.

**Code Example:**
```html
<figure draggable="true" ondragstart="Run When Dragging Begins" ondragend="Run When Dragging Ends">
```
Your task is to add the opening tag for a draggable figure.
```
## Response
```html
<figure draggable="true" ondragstart="console.log('Figure drag started')" ondragend="console.log('Figure drag ended')">
```## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<main>
    <section id="home" class="hero">
        ...
        <p>...</p>
        <!-- Add the opening figure tag below -->
    </section>
</main>
...```
## Placeholder
```html
<!-- We'll add an image inside this figure soon. Try dragging where it will be! -->
```
## Hint
```markdown
*   Start with `<figure` and add `draggable="true"`.
*   Include `ondragstart="console.log('Figure drag started')"`.
*   And finally, include `ondragend="console.log('Figure drag ended')"`.
```

# Challenge 33
## Title
```text
Picture Element
```
## Description
The `<picture>` element provides a flexible way to display images that can adapt to different screen sizes and device capabilities. It works as a container that holds multiple image sources, allowing browsers to choose the most appropriate image based on factors like screen resolution, viewport size, or supported image formats. This makes your website more responsive and optimized for various devices.

Using the provided code example, write an opening `<picture>` tag to start creating a responsive image container.
## Page
```markdown
# Step 33: Responsive Images with Picture

To provide different image sources for different screen sizes (a technique called "art direction"), you can use the `<picture>` element.

**Code Example:**
```html
<picture>
```
Your task is to add the opening `<picture>` tag inside your `<figure>`.
```
## Response
```html
<picture>
```## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<main>
    <section id="home" class="hero">
        ...
        <figure draggable="true" ...>
            <!-- Add the opening picture tag below -->
        </figure>
    </section>
</main>
...
```
## Placeholder
```html
<!-- This tag lets the browser choose the best image to show. -->
```
## Hint
```markdown
*   The picture element uses the `<picture>` tag.
*   This is just the opening tag.
*   Picture tags are written in lowercase.
```

# Challenge 34
## Title
```text
Source Element with Media Queries
```
## Description
The `<source>` element defines different image sources for the `<picture>` element based on specific conditions.

- `media="(min-width: 800px)"` attribute specifies that this image should only be used when the screen width is 800 pixels or larger.
- `srcset` provides the image URL.
- `sizes` tells the browser the intended display size.

Following the provided code example, add a `<source>` element with `media` set to `(min-width: 800px)`, `srcset` pointing to the `hero-photo.jpg`, and `sizes` set to `800px`.
## Page
```markdown
# Step 34: Providing an Image Source

Inside the `<picture>` tag, you define different image sources with the `<source>` tag. You can use media queries to specify when each source should be used.

**Code Example:**
```html
<source media="(min-width: 800px)" srcset="large-image.jpg">
```
Your task is to add a source for large screens.
```
## Response
```html
<source media="(min-width: 800px)" srcset="hero-photo.jpg" sizes="800px">
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<main>
    ...
    <figure ...>
        <picture>
            <!-- Add the source tag below -->
        </picture>
    </figure>
    ...
</main>
...
```
## Placeholder
```html
<!-- This image will only be considered for loading on screens wider than 800px. -->
```
## Hint
```markdown
*   Start with `<source` and include all three attributes.
*   Use `media="(min-width: 800px)"` for the screen size condition.
*   Include `srcset` with `hero-photo.jpg` and `sizes="800px"`.
```

# Challenge 35
## Title
```text
Interactive Image Element
```
## Description
The `<img>` element displays images. We can add attributes for functionality and accessibility: `src` (image URL), `alt` (alternative text), `width` and `height`, and `ismap` (tells the browser this is a server-side image map). It can also have interactive attributes like `onclick`, `onmouseover`, and `onmouseout`. The `opacity` property controls transparency: `opacity: 1` is fully visible, `opacity: 0.5` is half see-through.

Following the provided code example, create an `<img>` element with: `src="landscape.jpg"`, `alt="Beautiful Landscape"`, `width="400"`, `height="200"`, `onclick="console.log('Image clicked')"` , `onmouseover="this.style.opacity='0.8'"` , `onmouseout="this.style.opacity='1'"`. Don't forget to include the attribute `ismap`.
## Page
```markdown
# Step 35: The Default Image

The `<picture>` element needs a default `<img>` tag as a fallback for when none of the `<source>` conditions are met, or for older browsers. We can also make this image interactive.

**Code Example:**
```html
<img src="default.jpg" alt="Description" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
```
Your task is to add the default, interactive `<img>` element inside the `<picture>` tag.
```
## Response
```html
<img src="landscape.jpg" alt="Beautiful Landscape" width="400" height="200" ismap onclick="console.log('Image clicked')" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<figure ...>
    <picture>
        <source media="(min-width: 800px)" ...>
        <!-- Add the img tag below -->
    </picture>
</figure>
...
```
## Placeholder
```html
<!-- Hover over the image in the preview to see the opacity effect. -->
```
## Hint
```markdown
*   Start with `<img` and include the `src`, `alt`, `width`, and `height` attributes.
*   Add `ismap` and the three event handlers: `onclick`, `onmouseover`, and `onmouseout`.
*   Remember that `<img>` is a self-closing tag.
```
I will now generate the rest of the challenges without interruption.

# Challenge 36
## Title
```text
Figure Caption Element
```
## Description
The `<figcaption>` element provides a caption or description for content within a `<figure>` element, improving accessibility and context.

Following the provided code example, create a figure caption using the `<figcaption>` tag. Wrap inside the tag, this text: `Our professional business services`.
## Page```markdown
# Step 36: Adding a Caption to the Figure

It's good practice to provide a caption for your figures using the `<figcaption>` tag. This helps describe the image or content within the `<figure>`.

**Code Example:**
```html
<figcaption>Caption Text Here</figcaption>
```
Your task is to add a caption to your figure, right after the `<picture>` element.
```
## Response
```html
<figcaption>Our professional business services</figcaption>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<figure ...>
    <picture>
        ...
        <img ...>
    </picture>
    <!-- Add the figcaption tag below -->
</figure>
...```
## Placeholder
```html
<!-- A caption gives context to your image or diagram. -->
```
## Hint```markdown
*   Start with the `<figcaption>` opening tag.
*   Add this text afterwards: `Our professional business services`.
*   Close with `</figcaption>`.
```

# Challenge 37
## Title```text
Audio Element with Event Handlers
```
## Description
The `<audio>` element embeds sound content. It supports various attributes: `controls` (displays playback controls), `autoplay` (starts playback automatically), `muted` (silences audio initially), `loop` (repeats playback), and `preload` (determines how much data to load). Event handlers like `onplay`, `onpause`, `onended`, etc., allow you to respond to user interactions through JavaScript.

Following the provided code example, create an `<audio>` element with `controls`, `autoplay`, `muted`, `loop`, `preload="auto"`, and seven event handlers: `onplay="console.log('Audio started')"` `onpause="console.log('Audio paused')"` `onended="console.log('Audio ended')"` `onvolumechange="console.log('Volume changed')"` `onloadstart="console.log('Audio loading')"` `oncanplay="console.log('Audio can play')"` `ondurationchange="console.log('Duration changed')"`.
## Page
```markdown
# Step 37: Embedding Audio

You can embed audio files directly into your webpage using the `<audio>` tag. Let's create a feature-rich audio player with controls and event logging.

**Code Example:**
```html
<audio controls autoplay muted loop onplay="console.log('Playing')">
```
Your task is to add the opening `<audio>` tag with all its attributes.
```
## Response
```html
<audio controls autoplay muted loop preload="auto" onplay="console.log('Audio started')" onpause="console.log('Audio paused')" onended="console.log('Audio ended')" onvolumechange="console.log('Volume changed')" onloadstart="console.log('Audio loading')" oncanplay="console.log('Audio can play')" ondurationchange="console.log('Duration changed')">
```
## Language
```text
Html
```
## Points```
350
```
## Code
```html
...
<main>
    <section id="home" class="hero">
        ...
        <figure>...</figure>
        <!-- Add the opening audio tag below -->
    </section>
</main>
...
```
## Placeholder
```html
<!-- We'll add the audio source file next. -->
```
## Hint
```markdown
*   Start with `<audio` and add the boolean attributes: `controls`, `autoplay`, `muted`, and `loop`.
*   Add `preload="auto"` and the seven event handlers with `console.log()` statements.
*   Each event handler should log a specific message in single quotes within `console.log()`.
```

# Challenge 38
## Title
```text
Source Element for Audio
```
## Description
The `<source>` element specifies multiple media resources for `<audio>` and `<video>` elements, providing fallback options for different browsers and formats. It's a self-closing element that must be placed inside `<audio>` or `<video>` elements. The `src` attribute specifies the URL of the media file, while the `type` attribute tells the browser the MIME type of the media resource. For MP3 audio files, the MIME type is `audio/mpeg`.

Following the provided code example, create a `<source>` element with `src` attribute pointing to `win.mp3` and `type` attribute set to `audio/mpeg` for MP3 format specification.
## Page
```markdown
# Step 38: Providing the Audio Source

Just like with the `<picture>` element, you need to provide the actual media file for the `<audio>` element using a `<source>` tag.

**Code Example:**
```html
<source src="Audio Source URL" type="Audio MIME Type">
```
Your task is to add a source for an MP3 file.
```
## Response
```html
<source src="win.mp3" type="audio/mpeg">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<main>
    ...
    <audio ...>
        <!-- Add the source tag below -->
    </audio>
    ...
</main>
...
```
## Placeholder
```html
<!-- Providing the MIME type helps the browser decide quickly if it can play the file. -->
```
## Hint
```markdown
*   Use the self-closing `<source>` element with `src` and `type` attributes.
*   Set `src` to the audio file URL: `win.mp3`.
*   Set `type` to `audio/mpeg` for MP3 files. Don't forget to close the tag with `>`.
```

# Challenge 39
## Title
```text
Track Element for Media Accessibility
```
## Description
The `<track>` element provides text tracks for `<audio>` and `<video>` elements, enabling accessibility features like captions, subtitles, and descriptions. The `kind` attribute specifies the type of text track, `src` points to a WebVTT (.vtt) file, `srclang` indicates the language, `label` provides a user-readable title, and `default` makes this track active by default.

Following the provided code example, create a track element with `kind` set to 'captions', `src` pointing to 'cheer.vtt', `srclang` set to 'en', `label` set to 'English', and the `default` attribute.
## Page
```markdown
# Step 39: Adding Captions to Audio

To make your media more accessible, you can add text tracks for captions or subtitles using the `<track>` element.

**Code Example:**
```html
<track kind="captions" src="captions.vtt" srclang="en" label="English" default>
```
Your task is to add a captions track to your audio element.
```
## Response
```html
<track kind="captions" src="cheer.vtt" srclang="en" label="English" default>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<main>
    ...
    <audio ...>
        <source src="win.mp3" type="audio/mpeg">
        <!-- Add the track tag below -->
    </audio>
    ...
</main>
...
```## Placeholder
```html
<!-- Text tracks are crucial for users who are deaf or hard of hearing. -->
```
## Hint```markdown
*   Use the self-closing `<track>` element with `kind`, `src`, `srclang`, `label`, and `default` attributes.
*   Set `kind` to 'captions' and `src` to 'cheer.vtt'.
*   Add `srclang='en'`, `label='English'`, and the `default` attribute (no value needed).
```

# Challenge 40
## Title
```text
Horizontal Rule Element
```
## Description
The `<hr>` element creates a horizontal rule (line) that represents a thematic break or division between content sections. It's a self-closing (void) element that doesn't require a closing tag in HTML5.

Using the provided code example, create a horizontal rule element using the self-closing `<hr>` tag with no attributes or content.
## Page
```markdown
# Step 40: Creating a Thematic Break

To visually separate sections of content, you can use the `<hr>` (horizontal rule) tag. It creates a horizontal line.

**Code Example:**
```html
<hr>
```
Your task is to add a horizontal rule to separate your content sections.
```
## Response
```html
<hr>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>
    <section id="home" class="hero">
        ...
    </section>
    <!-- Add the horizontal rule below -->
</main>
...
```
## Placeholder
```html
<!-- A simple line to break up the page. -->
```
## Hint
```markdown
*   Use the `<hr>` element - it's self-closing so no closing tag needed.
*   No attributes or content are required for a basic horizontal rule.
*   The element creates a horizontal line across the container width.
```

# Challenge 41
## Title
```text
Article Element with ID Attribute
```
## Description
The `<article>` element represents a standalone piece of content that could be distributed independently, such as a blog post, news article, or forum post. The `id` attribute provides a unique identifier for the element, allowing it to be targeted by CSS styles, JavaScript functions, or anchor links.

Following the provided code example, create an opening `<article>` element with an `id` attribute set to 'about'.
## Page```markdown
# Step 41: The Article Element

For self-contained compositions like a blog post or a news story, the semantic `<article>` tag is the right choice.

**Code Example:**
```html
<article id="Section ID">
```
Your task is to add the opening tag for an "About" article.
```
## Response
```html
<article id="about">
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
...
<main>
    ...
    <hr>
    <!-- Add the opening article tag below -->
</main>
...
```
## Placeholder
```html
<!-- This helps structure your content for readers and search engines. -->
```
## Hint```markdown
*   Use the opening `<article>` tag with an `id` attribute.
*   Set the `id` value to 'about' using quotes.
*   Remember this is just the opening tag, not self-closing.```

# Challenge 42
## Title
```text
Heading with Inline Span Element
```
## Description
The `<h4>` element creates a level 4 heading. The `<span>` element is an inline container that groups text for styling purposes without adding semantic meaning. When combined with the `class` attribute, `span` elements become powerful tools for applying specific CSS styles to portions of text.

Following the provided code example, create a level 4 heading `<h4>` containing the text: 'About Our Mission'. From the text, 'About Our Mission', wrap the word 'Mission' in a `<span>` element with `class` 'highlight'.
## Page
```markdown
# Step 42: Styling Part of a Heading

What if you only want to style one word in a heading? The `<span>` tag is perfect for this. It's a generic inline container that you can target with a class.

**Code Example:**
```html
<h4>Level 4 Heading with <span class="Class Name">Important Text</span></h4>
```
Your task is to create a heading for your "About" article and highlight the word "Mission".
```
## Response
```html
<h4>About Our <span class="highlight">Mission</span></h4>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<main>
    ...
    <hr>
    <article id="about">
        <!-- Add the h4 heading below -->
    </article>
</main>
...
```
## Placeholder
```html
<!-- `<span>` is great for applying styles to small pieces of text. -->
```
## Hint
```markdown
*   Start with `<h4>` and add the text 'About Our ' with a space after.
*   Insert `<span class="highlight">Mission</span>` for the highlighted word.
*   Close the heading with `</h4>`.
```

# Challenge 43
## Title
```text
Paragraph with Cite Element
```
## Description
The `<p>` element defines a paragraph. The `<cite>` element is a semantic inline element used to reference the title of a creative work, publication, or source material. It represents a citation and typically renders in italics. The `cite` element adds semantic meaning that helps search engines and assistive technologies understand that the enclosed text refers to a referenced work.

Following the provided code example, create a paragraph containing the text: 'We are dedicated to showcasing the complete spectrum of professional services. Our team combines industry best practices with innovative approaches.' From the above text, wrap the words 'industry best practices' in a `<cite>` element.
## Page
```markdown
# Step 43: Citing a Source

When you are referencing the title of a work (like a book or a concept), you should use the `<cite>` tag. It semantically marks the text as a citation.

**Code Example:**
```html
<p>A Paragraph Text with <cite>Source Material</cite> and More Text.</p>
```
Your task is to create a paragraph that includes a citation.
```
## Response
```html
<p>We are dedicated to showcasing the complete spectrum of professional services. Our team combines <cite>industry best practices</cite> with innovative approaches.</p>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<article id="about">
    <h4>...</h4>
    <!-- Add the paragraph with a citation below -->
</article>
...
```
## Placeholder
```html
<!-- The browser usually makes text inside a <cite> tag italic. -->
```
## Hint
```markdown
*   Start with `<p>` and add the first sentence.
*   Continue with 'Our team combines ' then insert `<cite>industry best practices</cite>`.
*   Finish with: ' with innovative approaches.' and close with `</p>`.
```

# Challenge 44
## Title
```text
Blockquote with Citation and Footer
```
## Description
The `<blockquote>` element represents a section of quoted content from another source, typically displayed as an indented block. The `cite` attribute provides a URL reference to the source of the quotation. Inside blockquotes, the `<p>` element contains the actual quoted text, while the `<footer>` element provides attribution information like the author's name.

Following the provided code example, create a `<blockquote>` element with `cite` attribute set to `https://www.apple.com`, containing a paragraph with the quoted text: `"Innovation distinguishes between a leader and a follower."`, followed by a `<footer>` element with the attribution: `— Steve Jobs`.
## Page
```markdown
# Step 44: Quoting a Longer Passage

For longer, block-level quotations, use the `<blockquote>` element. You can also provide the source URL in a `cite` attribute and attribute the quote with a `<footer>`.

**Code Example:**
```html
<blockquote cite="Source URL">
  <p>"Quotation Text Here"</p>
  <footer>— Author Name</footer>
</blockquote>
```
Your task is to add a famous quote from Steve Jobs.
```
## Response
```html
<blockquote cite="https://www.apple.com"><p>"Innovation distinguishes between a leader and a follower."</p><footer>— Steve Jobs</footer></blockquote>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<article id="about">
    ...
    <p>...</p>
    <!-- Add the blockquote below -->
</article>
...
```
## Placeholder
```html
<!-- `<blockquote>` is for long quotes, `<q>` is for short, inline quotes. -->
```
## Hint
```markdown
*   Start with `<blockquote cite="https://www.apple.com">` to reference the source.
*   Add a paragraph with the quoted text: `"Innovation distinguishes between a leader and a follower."`. Don't forget the quotation marks.
*   Include a `<footer>` with the attribution: `— Steve Jobs`. Finally, close the blockquote with `</blockquote>`.
```

# Challenge 45
## Title
```text
Horizontal Rule Element (Second Instance)
```## Description
The `<hr>` element creates a horizontal rule (line) that represents a thematic break or division between content sections. This is another instance of the horizontal rule element, demonstrating how multiple `<hr>` elements can be used throughout a document to create visual and semantic breaks between different content areas.

Using the provided code example, create another horizontal rule element using the self-closing `<hr>` tag with no attributes or content to add an additional section break in the document.
## Page
```markdown
# Step 45: Another Separator

Let's add another horizontal rule to create a clear separation before the next section of our page.

**Code Example:**
```html
<hr>
```
Your task is to add another `<hr>` tag.
```
## Response
```html
<hr>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>
    ...
    <article id="about">
        ...
    </article>
    <!-- Add the horizontal rule below -->
</main>
...
```
## Placeholder
```html
<!-- You can use <hr> as many times as you need to organize your content. -->
```
## Hint
```markdown
*   Use the `<hr>` element again - it's self-closing so no closing tag needed.
*   This is the same syntax as before, creating another section divider.
*   No attributes or content are required for this horizontal rule.
```

# Challenge 46
## Title
```text
Details Element with Open State and Event Handler
```
## Description
The `<details>` element creates a clickable section that can be opened and closed to show or hide content, like a dropdown or accordion.

The `open` attribute makes the section start open when the page loads. The `ontoggle` event runs a piece of code whenever someone clicks to open or close the section, letting you track when people interact with it.

Following the provided code example, create a `<details>` element with the `open` attribute to make it start open, and an `ontoggle` event handler set to: `console.log('Details toggled')`.
## Page
```markdown
# Step 46: Creating a Collapsible Section

The `<details>` element creates an interactive widget that the user can open and close. By default, it's closed.

**Code Example:**```html
<details open ontoggle="Toggle Handler">
```
Your task is to add the opening tag for a `<details>` element that is open by default.
```
## Response
```html
<details open ontoggle="console.log('Details toggled')">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<main>
    ...
    <hr>
    <!-- Add the opening details tag below -->
</main>
...
```
## Placeholder
```html
<!-- Click the heading in the preview to see the toggle effect and check the console. -->
```
## Hint
```markdown
*   Start with the opening `<details>` tag.
*   Add the `open` attribute (no value needed) to make it start open.
*   Include `ontoggle="console.log('Details toggled')"` to track clicks.
```

# Challenge 47
## Title
```text
Summary Element with Keyboard Navigation
```
## Description
The `<summary>` element works as a clickable heading for a `<details>` section, showing the title that users click to open or close the content. The `tabindex` attribute makes elements focusable using the 'Tab' key - setting it to `0` puts the element in the normal tab order. The `onkeydown` event runs code when someone presses a key while the element is focused.

Following the provided code example, create a `<summary>` element with the text: `Learn More About Our Services`, `tabindex` set to '0', and an `onkeydown` event set to `if(event.key==='Enter') this.parentElement.toggleAttribute('open')`.
## Page
```markdown
# Step 47: The Heading for the Collapsible Section

Inside a `<details>` element, the `<summary>` element provides the visible heading that users click on. We'll make it accessible for keyboard users.

**Code Example:**
```html
<summary tabindex="0" onkeydown="Keydown Handler">Summary Text Here</summary>
```
Your task is to add the `<summary>` element for your collapsible section.
```
## Response
```html
<summary tabindex="0" onkeydown="if(event.key==='Enter') this.parentElement.toggleAttribute('open')">Learn More About Our Services</summary>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<main>
    ...
    <details open ...>
        <!-- Add the summary tag below -->
    </details>
</main>
...
```
## Placeholder
```html
<!-- This acts as the "clickable" part of the details widget. -->
```
## Hint
```markdown
*   Start with `<summary>` and add `tabindex="0"` for keyboard access.
*   Add the `onkeydown` event with the Enter key check and toggle code, as shown in the task description.
*   Include the text `Learn More About Our Services` and close with `</summary>`.
```

# Challenge 48
## Title
```text
Description List Element
```## Description
The `<dl>` element creates a description list, which is perfect for displaying pairs of related information like terms and their definitions, questions and answers, or labels and values. The description list is a container that holds term-definition pairs.

Using the provided code example, create an opening description list element using the `<dl>` tag with no attributes.
## Page
```markdown
# Step 48: Starting a Description List

A description list (`<dl>`) is the perfect way to present a list of terms and their definitions, like a glossary.

**Code Example:**
```html
<dl>
```
Your task is to add the opening `<dl>` tag inside your `<details>` element.
```
## Response
```html
<dl>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>
    ...
    <details open ...>
        <summary>...</summary>
        <!-- Add the opening dl tag below -->
    </details>
</main>
...
```
## Placeholder
```html
<!-- This is the container for your terms and definitions. -->
```
## Hint
```markdown
*   Use the opening `<dl>` tag to start a description list.
*   No attributes are needed for a basic description list.
*   This is just the opening tag.
```

# Challenge 49
## Title
```text
Description Term with Definition Element
```## Description
The `<dt>` element marks a term in a description list. The `<dfn>` element identifies a term that's being defined for the first time in a document, usually appearing in italics. When you combine these two, you create a term that's both part of a description list and officially defined within your content.

Following the provided code example, create a description term element `<dt>`. Within the `<dt>` tag, create a definition element `<dfn>` with the text: `Business Development` inside.
## Page
```markdown
# Step 49: Adding a Term to Your List

Inside a `<dl>`, you add terms with the `<dt>` (description term) tag. To semantically indicate that you're defining this term, you can nest a `<dfn>` (definition) tag inside it.

**Code Example:**
```html
<dt><dfn>Term Definition Here</dfn></dt>
```
Your task is to add the first term to your list.
```
## Response
```html
<dt><dfn>Business Development</dfn></dt>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<details ...>
    <summary>...</summary>
    <dl>
        <!-- Add the description term below -->
    </dl>
</details>
...
```
## Placeholder
```html
<!-- This is the "word" you are about to define. -->
```
## Hint
```markdown
*   Start with the `<dt>` tag to create a description term.
*   Inside, add `<dfn>Business Development</dfn>` to mark it as a definition.
*   Close with `</dt>` to complete the term element.
```

# Challenge 50
## Title
```text
Description Definition Element
```
## Description
The `<dd>` element provides the definition or description that explains a term in a description list. It always follows a `<dt>` (description term) element and contains the actual explanation. The `<dd>` element is usually indented by browsers to visually show it's the explanation part.

Following the provided code example, create a description definition element `<dd>`. To explain the previous term 'Business Development', the `dd` tag should contain the text: `We create strategic opportunities for your business.`
## Page
```markdown
# Step 50: Adding the Definition

After a term (`<dt>`), you provide its definition with the `<dd>` (description details) tag.

**Code Example:**
```html
<dd>Definition Description Text Here</dd>
```
Your task is to add the definition for "Business Development".
```
## Response
```html
<dd>We create strategic opportunities for your business.</dd>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<dl>
    <dt><dfn>Business Development</dfn></dt>
    <!-- Add the description definition below -->
</dl>
...
```
## Placeholder
```html
<!-- This is the "definition" of the word above. -->
```
## Hint
```markdown
*   Use the `<dd>` tag to create a description definition.
*   Add the text inside: `We create strategic opportunities for your business.`
*   Close with `</dd>` to complete the definition.
```

# Challenge 51
## Title
```text
Description Term with Definition Element (Second Instance)
```
## Description
This is another `<dt>` and `<dfn>` combination, continuing the pattern of creating terms in your description list. The `<dt>` element marks another term that will be defined, while the `<dfn>` element identifies the term as a concept being formally defined. This shows how you can have multiple term-definition pairs within the same description list.

Following the provided code example, create another description term `<dt>` element containing a definition `<dfn>` element with the text: `Digital Marketing`.
## Page
```markdown
# Step 51: Adding a Second Term

Let's add another term and definition pair to our description list. The pattern is the same: `<dt>` followed by `<dd>`.

**Code Example:**
```html
<dt><dfn>Second Term Definition Here</dfn></dt>
```
Your task is to add the second term, "Digital Marketing".
```
## Response
```html
<dt><dfn>Digital Marketing</dfn></dt>
```## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<dl>
    <dt><dfn>Business Development</dfn></dt>
    <dd>We create strategic opportunities for your business.</dd>
    <!-- Add the second description term below -->
</dl>
...
```
## Placeholder
```html
<!-- You can have as many term/definition pairs as you need. -->
```
## Hint
```markdown
*   Use the same structure as before: `<dt>` tag to create another description term.
*   Inside, add `<dfn>Digital Marketing</dfn>` to mark this new term as a definition.
*   Close with `</dt>` to complete this second term element.
```

# Challenge 52
## Title
```text
Description Details with Acronym Element
```
## Description
The `<dd>` element provides the description for a term. The `<acronym>` element is used to mark up abbreviations and acronyms, with the `title` attribute providing the full expanded form. When someone hovers over the acronym, most browsers will show a tooltip with the full meaning.

Following the provided code example, create a description details `<dd>` element containing the text: `We help businesses grow with smart digital marketing and SEO strategies.` From the text, wrap the word 'SEO' with an `<acronym>` element, with a `title` attribute set to: `Search Engine Optimization`.
## Page
```markdown
# Step 52: A Definition with an Acronym

Now for the definition of "Digital Marketing". This definition will include an acronym, which we can make more accessible with the `<acronym>` tag (though `<abbr>` is more modern, `<acronym>` is good to know).

**Code Example:**
```html
<dd>Definition with an <acronym title="Full Meaning of Acronym">Acronym</acronym></dd>
```
Your task is to add the definition for "Digital Marketing" including the acronym for SEO.
```
## Response
```html
<dd>We help businesses grow with smart digital marketing and <acronym title="Search Engine Optimization">SEO</acronym> strategies.</dd>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<dl>
    ...
    <dt><dfn>Digital Marketing</dfn></dt>
    <!-- Add the description definition with an acronym below -->
</dl>
...
```
## Placeholder
```html
<!-- Hover over "SEO" in the preview to see the full title. -->
```
## Hint
```markdown
*   Start with `<dd>` and add the text 'We help businesses grow with smart digital marketing and '.
*   Insert `<acronym title="Search Engine Optimization">SEO</acronym>`.
*   Finish with ' strategies.' and close with `</dd>`.
```

# Challenge 53
## Title
```text
Aside Element
```
## Description
The `<aside>` element represents content that's related to the `<main>` content but separate from it, like a sidebar, pull quote, or additional information box. Think of it as content that supports or adds context to the main story but isn't essential to understanding it. The `<aside>` element helps organize page layout and tells screen readers that this content is supplementary.

Using the provided code example, create an opening `<aside>` element using the `<aside>` tag (with no attributes) to start a sidebar or supplementary content section.
## Page
```markdown
# Step 53: Adding an Aside

An `<aside>` element is for content that is tangentially related to the main content, like a sidebar or a callout box.

**Code Example:**
```html
<aside>
```
Your task is to add the opening `<aside>` tag after the `<main>` content area.
```
## Response
```html
<aside>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<body>
    <header>...</header>
    <main>
        ...
    </main>
    <!-- Add the opening aside tag below -->
</body>
...
```
## Placeholder
```html
<!-- This is perfect for side notes, related links, or advertisements. -->
```
## Hint
```markdown
*   Use the opening `<aside>` tag to start supplementary content.
*   No attributes are needed for a basic `<aside>` element.
*   This creates a sidebar or related content section.
```

# Challenge 54
## Title
```text
Level 5 Heading Element
```
## Description
The `<h5>` element creates a level 5 heading in HTML's heading hierarchy, which goes from `h1` (most important) down to `h6` (least important). An `<h5>` heading is used for smaller subsections within your content, helping to organize information in a logical structure that both users and search engines can easily understand.

Following the provided code example, create a level 5 heading `<h5>`, containing the text 'Quick Facts'.
## Page
```markdown
# Step 54: A Heading for the Aside

Our `<aside>` section needs a title. An `<h5>` is a suitable heading level for a small sidebar section like this.

**Code Example:**
```html
<h5>Heading Text Here</h5>
```
Your task is to add an `<h5>` heading to your `<aside>`.
```
## Response
```html
<h5>Quick Facts</h5>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>...</main>
<aside>
    <!-- Add the h5 heading below -->
</aside>
...
```
## Placeholder
```html
<!-- Use heading levels in order (h1, then h2, then h3, etc.) for good structure. -->
```
## Hint
```markdown
*   Use the `<h5>` opening tag for a level 5 heading.
*   Add the text `Quick Facts` between the tags.
*   Close with `</h5>` to complete the heading.
```

# Challenge 55
## Title
```text
Ordered List with Custom Start and Reversed Order
```
## Description
The `<ol>` element creates a numbered list. The `start` attribute lets you begin the numbering from any number you choose instead of starting from 1. The `reversed` attribute makes the numbers count backwards instead of forwards. This is useful for things like countdowns or rankings.

Following the provided code example, create an opening ordered list `<ol>` element with `start` attribute set to '2020' and the `reversed` attribute to make the numbers count backwards.
## Page
```markdown
# Step 55: A Reversed, Ordered List

Let's add a list to our "Quick Facts" section. An `<ol>` (ordered list) is numbered. We can make it do cool things, like starting at a specific number and counting backwards.

**Code Example:**
```html
<ol start="Starting Number" reversed>
```
Your task is to add the opening tag for an ordered list that starts at 2020 and counts down.
```
## Response
```html
<ol start="2020" reversed>
```
## Language
```text
Html```
## Points
```
200
```
## Code
```html
...
<aside>
    <h5>Quick Facts</h5>
    <!-- Add the opening ordered list tag below -->
</aside>
...```
## Placeholder
```html
<!-- Perfect for a reverse-chronological timeline. -->
```
## Hint
```markdown
*   Start with the `<ol>` tag for an ordered list.
*   Add `start="2020"` to begin numbering from 2020.
*   Add the `reversed` attribute (no value needed) to count backwards.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 56
## Title
```text
List Item with Time Element
```
## Description
The `<li>` element creates a list item. The `<time>` element marks up dates, times, or periods in a way that browsers and search engines can understand. The `datetime` attribute provides a machine-readable version of the date or time, which helps with processing the information correctly.

Following the provided code example, create a list item `<li>` containing the text: 'Founded in 2020'. From the text, wrap '2020' in a `<time>` element with its `datetime` attribute set to '2020'.
## Page
```markdown
# Step 56: A List Item with a Time

Now, let's add an item to our list. When you have a date or time, you should wrap it in a `<time>` tag for semantic meaning. The `datetime` attribute provides a machine-readable format.

**Code Example:**
```html
<li>List Item Text with <time datetime="YYYY-MM-DD">Displayed Date</time></li>
```
Your task is to create the first list item for your timeline.
```
## Response
```html
<li>Founded in <time datetime="2020">2020</time></li>
```
## Language```text
Html
```
## Points
```
200
```
## Code
```html
...
<aside>
    <h5>Quick Facts</h5>
    <ol start="2020" reversed>
        <!-- Add the list item with a time element below -->
    </ol>
</aside>
...```
## Placeholder
```html
<!-- The `<time>` tag helps search engines understand date-related content. -->
```
## Hint
```markdown
*   Start with `<li>` and add the text 'Founded in ' with a space after.
*   Insert `<time datetime="2020">2020</time>` afterwards.
*   Close with `</li>` to complete the list item.
```

# Challenge 57
## Title```text
List Item with Data Element
```
## Description
This `<li>` element creates another list item. The `<data>` element is used to link a piece of content with a machine-readable value. The `value` attribute contains the actual data that programs or scripts can use, while the text inside the element is what people see. This is useful for numbers, dates, or any information that needs to be processed by both humans and computers.

Following the provided code example, create a list item `<li>` containing the text 'Over 500 businesses served'. Wrap the number '500' in a `<data>` element with its `value` attribute set to '500'.
## Page```markdown
# Step 57: A List Item with a Data Value

Similar to the `<time>` tag, the `<data>` tag lets you attach a machine-readable value to a piece of text. It's great for things like product numbers or statistics.

**Code Example:**
```html
<li>List Item Text with <data value="Data Value">Data Content</data> and More Text</li>
```
Your task is to add a list item showing the number of businesses served.
```
## Response
```html
<li>Over <data value="500">500</data> businesses served</li>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<aside>
    ...
    <ol start="2020" reversed>
        <li>Founded in <time datetime="2020">2020</time></li>
        <!-- Add the list item with a data element below -->
    </ol>
</aside>
...
```
## Placeholder
```html
<!-- This allows scripts to easily grab the number '500' for calculations. -->
```
## Hint
```markdown
*   Start with `<li>` and add the text 'Over ' with a space.
*   Insert `<data value="500">500</data>` afterwards.
*   End with ' businesses served' and close with `</li>`.
```

# Challenge 58
## Title
```text
List Item with Meter Element
```
## Description
The `<meter>` element displays a measurement within a known range, like a gauge or progress bar. It has several attributes: `value` (current measurement), `max` (highest possible value), `high` (start of 'good' values), `low` (end of 'bad' values), and `optimum` (ideal target value). The text inside the meter element provides a fallback for older browsers and screen readers.

Following the provided code example, create a list item `<li>` that contains a `<meter>` element with `value='95'`, `max='100'`, `high='90'`, `low='70'`, and `optimum='95'`. Wrap the text '95%' inside the `meter` element. After the `meter` element, include the text: ' client satisfaction rate'.
## Page
```markdown
# Step 58: Showing a Measurement with a Meter

The `<meter>` element displays a scalar measurement within a known range, or a fractional value. It's like a gauge.

**Code Example:**
```html
<li><meter value="95" max="100" high="90" low="70" optimum="95">95%</meter> List Item Text</li>
```
Your task is to add a list item with a meter showing client satisfaction.
```
## Response
```html
<li><meter value="95" max="100" high="90" low="70" optimum="95">95%</meter> client satisfaction rate</li>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<aside>
    ...
    <ol start="2020" reversed>
        ...
        <li>Over <data value="500">500</data> businesses served</li>
        <!-- Add the list item with a meter element below -->
    </ol>
</aside>
...
```## Placeholder
```html
<!-- The browser colors this bar based on the low, high, and optimum values. -->```
## Hint
```markdown
*   Start with `<li>` and add the `<meter>` element with all five attributes.
*   Set the attributes: `value='95'`, `max='100'`, `high='90'`, `low='70'`, and `optimum='95'`.
*   Put the text '95%' inside the `meter` tags, then add ' client satisfaction rate' afterwards. Don't forget the closing `</li>` tag.
```

# Challenge 59
## Title
```text
Section Element with ID Attribute
```
## Description
The `<section>` element creates a distinct section of content within a webpage, like a chapter in a book. It helps organize your page into logical parts. The `id` attribute gives this section a unique name that you can use to link to it directly, style it with CSS, or target it with JavaScript.

Following the provided code example, create an opening `<section>` element with its `id` attribute set to 'services'.
## Page
```markdown
# Step 59: A New Section for Services

Let's create a new major section in our `<main>` content area for our services. We'll use the `<section>` tag again.

**Code Example:**
```html
<section id="ID name">
```
Your task is to add the opening tag for the "services" section.
```
## Response
```html
<section id="services">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>
    <section id="home" ...>...</section>
    <hr>
    <!-- Add the opening section tag for services below -->
</main>
...
```
## Placeholder
```html
<!-- This will be a new standalone section of the page. -->
```
## Hint
```markdown
*   Use the opening `<section>` tag to start a new content section.
*   Add the `id` attribute with its value set to `services` in quotes.
*   This is just the opening tag.
```

# Challenge 60
## Title
```text
Level 6 Heading with Small Element
```
## Description
The `<h6>` element creates the smallest level heading in HTML. It's used for minor subheadings. The `<small>` element makes text appear smaller than the surrounding text and is meant for side comments or less important information. When used inside a heading, it can de-emphasize certain words while keeping them part of the heading structure.

Following the provided code example, create a level 6 heading `<h6>` that contains the text: 'Our Comprehensive Services'. The word 'Comprehensive' should be inside a `<small>` element.
## Page
```markdown
# Step 60: A Minor Heading with Small Text

For a very low-level heading, you can use `<h6>`. To de-emphasize part of the heading text, you can wrap it in a `<small>` tag.

**Code Example:**
```html
<h6>Heading Text with <small>Small Text</small> and More Heading Text</h6>
```
Your task is to create an `<h6>` heading for the services section.
```
## Response
```html
<h6>Our <small>Comprehensive</small> Services</h6>
```
## Language
```text
Html
```
## Points
```
200
```
## Code```html
...
<main>
    ...
    <section id="services">
        <!-- Add the h6 heading below -->
    </section>
</main>
...
```
## Placeholder
```html
<!-- `<small>` is for "fine print" or side comments. -->
```
## Hint
```markdown
*   Start with `<h6>` and add the text 'Our ' with a space.
*   Insert `<small>Comprehensive</small>` afterwards, for the smaller text.
*   Add ' Services', and finally close with `</h6>`.
```

# Challenge 61
## Title
```text
Unordered List Element
```
## Description
The `<ul>` element creates an unordered list, which is a collection of items where the order doesn't matter. By default, browsers display unordered lists with bullet points next to each item. The `<ul>` element acts as a container that holds individual list items.

Using the provided code example, create an opening unordered list element using the `<ul>` tag with no attributes.
## Page
```markdown
# Step 61: Starting an Unordered List

For a list of items where the order is not important (like a list of services), use an `<ul>` (unordered list). This will create a bulleted list.

**Code Example:**
```html
<ul>
```
Your task is to add the opening `<ul>` tag to your services section.
```
## Response
```html
<ul>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>
    ...
    <section id="services">
        <h6>...</h6>
        <!-- Add the opening ul tag below -->
    </section>
</main>
...
```
## Placeholder
```html
<!-- This is the container for a bulleted list. -->
```
## Hint
```markdown
*   Use the opening `<ul>` tag to start an unordered list.
*   No attributes are needed for a basic unordered list.
*   This is just the opening tag.
```

# Challenge 62
## Title
```text
List Items
```
## Description
List items `<li>` are the building blocks of HTML lists. Whether you're creating a bulleted or numbered list, each individual item needs to be wrapped in a list item tag. It tells the browser, 'this is one complete item in my list'.

Following the provided code example, create a list item that contains the text: `Business Development`. Wrap your list item tag around the text.
## Page
```markdown
# Step 62: Adding a List Item

Inside a `<ul>` or `<ol>`, each individual item is created with an `<li>` (list item) tag.

**Code Example:**
```html
<li>First List Item Text Here</li>
```
Your task is to add the first service to your list.
```
## Response
```html
<li>Business Development</li>
```
## Language
```text
Html
```
## Points
```
100
```
## Code```html
...
<section id="services">
    <h6>...</h6>
    <ul>
        <!-- Add the list item below -->
    </ul>
</section>
...
```
## Placeholder
```html
<!-- Each `<li>` will get its own bullet point. -->
```
## Hint
```markdown
*   List items use the `<li>` tag.
*   Don't forget you need both opening `<li>` and closing `</li>` tags.
*   Put `Business Development` between the opening and closing tags.
```

# Challenge 63
## Title
```text
Adding Additional List Items
```
## Description
It's time to add more items to build a complete list. Each new item you add follows the exact same pattern as the first one. You wrap each piece of text in its own list item `<li>` tag, and the browser automatically handles the spacing and formatting.

Following the provided code example, create another list item `<li>` that contains the text: `Digital Marketing`.
## Page
```markdown
# Step 63: Adding Another List Item

Let's add a second service to our list. The process is exactly the same.

**Code Example:**
```html
<li>Second List Item Text Here</li>
```
Your task is to add the second service to your list.
```
## Response
```html
<li>Digital Marketing</li>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<section id="services">
    ...
    <ul>
        <li>Business Development</li>
        <!-- Add the second list item below -->
    </ul>
</section>
...
```## Placeholder
```html
<!-- The browser will automatically add another bullet point for this item. -->
```
## Hint
```markdown
*   Use the same `<li>` tag structure as the previous item.
*   Remember to include both opening `<li>` and closing `</li>` tags.
*   Put `Digital Marketing` between the opening and closing tags.
```

# Challenge 64
## Title
```text
Building Complete Lists
```## Description
You're now getting comfortable with creating list items `<li>`. Each new list item you add contributes to a more complete and informative list. The beauty of HTML lists is their consistency - once you learn the pattern for one item, you can apply it to dozens or even hundreds of items.

Following the provided code example, create a third list item `<li>` that contains the text: `Management Consulting`.
## Page
```markdown
# Step 64: Adding a Third List Item

Let's add one more service to our list to make it more complete.

**Code Example:**
```html
<li>Third List Item Text Here</li>
```
Your task is to add the third service to your list.
```
## Response
```html
<li>Management Consulting</li>
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
...
<section id="services">
    ...
    <ul>
        <li>Business Development</li>
        <li>Digital Marketing</li>
        <!-- Add the third list item below -->
    </ul>
</section>
...
```
## Placeholder
```html
<!-- A list helps to present information in a clear, scannable way. -->
```
## Hint
```markdown
*   Follow the same pattern as your previous two list items.
*   Use the `<li>` tag with both opening and closing parts.
*   Place 'Management Consulting' between the `<li>` and `</li>` tags.
```

# Challenge 65
## Title
```text
Completing Your List
```
## Description
You're about to complete your HTML unordered list! This final list item `<li>` will round out your collection and give you a complete, professional-looking list of services. This will demonstrate how multiple list items work together to create a cohesive presentation.

Following the provided code example, create the final list item `<li>` that contains the text: `Website Design and Development`.
## Page
```markdown
# Step 65: The Final List Item

Let's add our fourth and final service to complete the list.

**Code Example:**
```html
<li>Last List Item Text Here</li>
```
Your task is to add the last service to your list.
```
## Response
```html
<li>Website Design and Development</li>```
## Language
```text
Html
```
## Points
```
100
```## Code
```html
...
<section id="services">
    ...
    <ul>
        <li>Business Development</li>
        <li>Digital Marketing</li>
        <li>Management Consulting</li>
        <!-- Add the final list item below -->
    </ul>
</section>
...
```
## Placeholder
```html
<!-- Your list of services is now complete! -->
```
## Hint
```markdown
*   Use the same `<li>` tag pattern as all your previous items.
*   Remember both opening `<li>` and closing `</li>` tags are required.
*   Put `Website Design and Development` between the tags.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 66
## Title
```text
Div Elements with Classes
```
## Description
`<div>` elements with classes are one of the most important building blocks of modern web design. A `<div>` is like an invisible container that groups related content together, and a `class` is a special label that helps you style and organize these containers. The `class` attribute is what connects your HTML structure to CSS styling.

Following the provided code example, create a `<div>` element with a `class` attribute set to 'services-grid'. Just the opening tag only.
## Page
```markdown
# Step 66: A Grid Container

Now, let's present our services in a more visually appealing way. We'll wrap them in a `<div>` with a class that we can use to apply a grid layout with CSS.

**Code Example:**
```html
<div class="Class Name">
```
Your task is to add the opening `<div>` tag for our services grid.
```
## Response
```html
<div class="services-grid">
```
## Language
```text
Html
```
## Points
```
100
```
## Code```html
...
<section id="services">
    <h6>...</h6>
    <ul>...</ul>
    <!-- Add the opening div tag below -->
</section>
...
```
## Placeholder
```html
<!-- This `div` will act as the container for our service cards. -->
```
## Hint
```markdown
*   Start with the div tag: `<div`.
*   Add the `class` attribute with `class="services-grid"`.
*   Don't forget the closing angle bracket `>` to complete the opening tag.
```

# Challenge 67
## Title
```text
Div Elements with Multiple Attributes
```
## Description
You can combine different attributes to create elements with specific behaviors. For instance, a `class` attribute gives a `<div>` a style name, the `hidden` attribute makes it invisible, the `id` attribute gives it a unique identifier, and the `inert` attribute makes it non-interactive.

Following the provided code example, create a complete `<div>` element with: `class="service-card"`, the `hidden` attribute, `id="hidden-card"`, and the `inert` attribute. Inside this `<div>`, add a paragraph tag with the text: `This card is initially hidden`.
## Page
```markdown
# Step 67: An Advanced Div with Multiple Attributes

A `<div>` can have many attributes to control its appearance and behavior. Let's create a special, hidden, non-interactive `<div>` as an example.

**Code Example:**
```html
<div class="Class Name" hidden id="Element ID" inert><p>Placeholder Text</p></div>
```
Your task is to create this complex `<div>` element.
```
## Response
```html
<div class="service-card" hidden id="hidden-card" inert><p>This card is initially hidden</p></div>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<section id="services">
    ...
    <div class="services-grid">
        <!-- Add the hidden div element below -->
    </div>
</section>
...
```
## Placeholder
```html
<!-- This `div` exists in the HTML, but it's not visible or interactive on the page. -->```
## Hint
```markdown
*   Start with `<div` then add all four attributes: `class`, `hidden`, `id`, and `inert`.
*   The paragraph inside should be `<p>This card is initially hidden</p>`.
*   Don't forget the closing `</div>` tag at the very end.
```

# Challenge 68
## Title
```text
Creating Service Card Containers
```
## Description
Service cards are a popular design pattern. They're like individual boxes that showcase different services or products. Each card is typically a `<div>` container with a specific `class` that allows designers to style them consistently. The 'service-card' `class` is a common naming convention that immediately tells other developers what this container is meant to hold.

Following the provided code example, create a `<div>` element with the `class` attribute set to 'service-card'. Just the opening `<div>` tag only.
## Page
```markdown
# Step 68: Creating the First Service Card

Now let's create the visible cards for our services. Each service will be in its own `<div>` with the class `service-card`.

**Code Example:**
```html
<div class="Class Name">
```
Your task is to add the opening `<div>` for the first service card.
```
## Response
```html
<div class="service-card">```
## Language
```text
Html
```
## Points
```
100
```## Code
```html
...
<div class="services-grid">
    <div ... hidden ...>...</div>
    <!-- Add the opening div tag for the service card below -->
</div>
...
```
## Placeholder```html
<!-- This will be the first visible card in our grid. -->
```
## Hint
```markdown
*   Start with the div tag: `<div`.
*   Add the `class` attribute: `class="service-card"`.
*   End with the closing angle bracket `>` to complete the opening tag.
```

# Challenge 69
## Title
```text
Interactive Canvas Elements with Event Handlers
```
## Description
The `<canvas>` element is like a blank digital drawing board where you can create charts, animations, games, and interactive graphics using JavaScript. It can respond to user interactions through event handlers like `onmousedown`, `onmouseup`, and `onmousemove`.

Following the provided code example, create a `<canvas>` element with `id="chart"`, `width="200"`, `height="100"`, and three mouse event handlers: `onmousedown="console.log('Canvas mouse down')"`, `onmouseup="console.log('Canvas mouse up')"`, and `onmousemove="console.log('Canvas mouse move')"`.
## Page
```markdown
# Step 69: Drawing with Canvas

The `<canvas>` element provides a space where you can draw graphics, charts, and animations using JavaScript. Let's create one that logs mouse events.

**Code Example:**
```html
<canvas id="Canvas ID" width="200" height="100" onmousedown="Mouse Down Handler"></canvas>
```
Your task is to create an interactive `<canvas>` element inside the first service card.
```
## Response
```html
<canvas id="chart" width="200" height="100" onmousedown="console.log('Canvas mouse down')" onmouseup="console.log('Canvas mouse up')" onmousemove="console.log('Canvas mouse move')"></canvas>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<div class="services-grid">
    ...
    <div class="service-card">
        <!-- Add the canvas element below -->
    </div>
</div>
...
```
## Placeholder
```html
<!-- Move your mouse over the canvas area in the preview and check the console. -->
```
## Hint
```markdown
*   Start with `<canvas`, then add the `id`, `width`, and `height` attributes.
*   Add the three mouse event handlers: `onmousedown`, `onmouseup`, and `onmousemove`.
*   Each event handler should have `console.log` with the appropriate message in quotes.
```

# Challenge 70
## Title```text
Level 4 Heading Element
```
## Description
The `<h4>` element creates a level 4 heading in HTML's heading hierarchy. Headings help organize your content into sections and subsections, making it easier for people to scan and understand your page.

Following the provided code example, create a level 4 heading `<h4>` with the text: 'Data Visualization' inside.
## Page
```markdown
# Step 70: A Title for the Canvas Card

Every card should have a title. Let's add an `<h4>` heading to describe the content of our first service card.

**Code Example:**
```html
<h4>Level 4 Heading Text Here</h4>
```
Your task is to add a heading for the "Data Visualization" card.
```
## Response
```html
<h4>Data Visualization</h4>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="service-card">
    <canvas ...></canvas>
    <!-- Add the h4 heading below -->
</div>
...
```
## Placeholder
```html
<!-- This heading describes the purpose of the canvas element above it. -->
```
## Hint
```markdown
*   Use the opening `<h4>` tag to start the heading.
*   Add the text `Data Visualization` between the `<h4>` tags.
*   Close with `</h4>` to complete the heading.
```

# Challenge 71
## Title
```text
Paragraph with Code Element and HTML Entities
```
## Description
The `<p>` element creates a paragraph, while the `<code>` element marks text as code, typically displaying it in a monospace font. HTML entities are special codes used to display characters that have special meaning in HTML. `&lt;` displays a less-than symbol (`<`) and `&gt;` displays a greater-than symbol (`>`). These are necessary because browsers would otherwise interpret `<` and `>` as the start and end of HTML tags.

Following the provided code example, create a paragraph `<p>` tag, containing: "Interactive charts and graphs using " followed by a `<code>` element containing the text: `&lt;canvas&gt;`. Finish with the text: " elements".
## Page
```markdown
# Step 71: Describing Code in a Paragraph

Let's add a description to our card. When you want to write about an HTML tag in your text, you need to use HTML entities (`&lt;` and `&gt;`) so the browser doesn't get confused. You should also wrap the tag name in a `<code>` element.

**Code Example:**
```html
<p>Paragraph Text with <code>&lt;code&gt;</code> more Paragraph Text</p>
```
Your task is to create a descriptive paragraph for the card.
```
## Response
```html
<p>Interactive charts and graphs using <code>&lt;canvas&gt;</code> elements</p>
```
## Language
```text
Html
```
## Points
```
200```
## Code
```html
...
<div class="service-card">
    <canvas ...></canvas>
    <h4>Data Visualization</h4>
    <!-- Add the paragraph with code below -->
</div>
...
```
## Placeholder
```html
<!-- Using `<code>` and entities is the correct way to display code snippets in text. -->```
## Hint
```markdown
*   Start with `<p>` and add the text: "Interactive charts and graphs using ".
*   Insert `<code>&lt;canvas&gt;</code>` using HTML entities for the brackets.
*   Finish with " elements", and close with `</p>`.
```

# Challenge 72
## Title
```text
Div Element with Class (Second Instance)
```
## Description
The `<div>` element is a generic container used to group content and apply styling. This is another instance of a `<div>` with the `class` 'service-card', showing how multiple elements can share the same class name for consistent styling.

Following the provided code example, create another `<div>` element with its `class` attribute set to 'service-card'. This creates a second service card container.
## Page
```markdown
# Step 72: Creating the Second Service Card

Now, let's create a second card for our services grid. It will have the same class as the first one to ensure consistent styling.

**Code Example:**
```html
<div class="Same Class Name">
```
Your task is to add the opening `<div>` for the second service card.
```
## Response
```html
<div class="service-card">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="services-grid">
    <div class="service-card">
        <!-- First card content -->
    </div>
    <!-- Add the opening div for the second service card below -->
</div>
...
```
## Placeholder
```html
<!-- This card will sit next to the first one in our grid layout. -->
```
## Hint
```markdown
*   Use the opening `<div>` tag with a `class` attribute.
*   Set the `class` value to 'service-card' using quotes.
*   This is the same as before - creating another service card container.
```

# Challenge 73
## Title```text
Video Element with Multiple Event Handlers
```
## Description
The `<video>` element embeds video content. `controls` shows play/pause buttons, `width` and `height` set the size, and `poster` displays a preview image. Event handlers track different stages of video loading and playback, like `onloadeddata`, `onprogress`, `onseeked`, etc.

Following the provided code example, create a `<video>` element with `controls`, `width="200"`, `height="150"`, `poster="poster.jpg"`, and eleven specified event handlers for logging video events to the console.
## Page
```markdown
# Step 73: Embedding a Video Player

The `<video>` tag lets you embed video content. Like the audio player, we can add controls and many event handlers to track its status.

**Code Example:**
```html
<video controls width="200" height="150" poster="preview.jpg" onloadeddata="Handler">
```
Your task is to add the opening `<video>` tag with all its attributes for the second card.
```
## Response
```html
<video controls width="200" height="150" poster="poster.jpg" onloadeddata="console.log('Video data loaded')" onloadedmetadata="console.log('Video metadata loaded')" onprogress="console.log('Video loading progress')" onseeked="console.log('Video seeked')" onseeking="console.log('Video seeking')" onratechange="console.log('Playback rate changed')" ontimeupdate="console.log('Time updated')" onwaiting="console.log('Video waiting')" onstalled="console.log('Video stalled')" onemptied="console.log('Video emptied')" onsuspend="console.log('Video suspended')">
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<div class="services-grid">
    ...
    <div class="service-card">
        <!-- Add the opening video tag below -->
    </div>
</div>
...
```
## Placeholder
```html
<!-- The poster image is what you see before the video starts playing. -->
```
## Hint
```markdown
*   Start with `<video controls width="200" height="150" poster="poster.jpg">`.
*   Add the loading events: `onloadeddata`, `onloadedmetadata`, and `onprogress` with their `console.log` messages.
*   Include all the other specified playback events.
```

# Challenge 74
## Title
```text
Source Element for Video
```
## Description
The `<source>` element provides video files to a `<video>` element, allowing you to offer multiple formats for better browser compatibility. The `src` attribute points to the video file, while the `type` attribute tells the browser what kind of video file it is. For MP4 videos, the type is `video/mp4`.

Following the provided code example, create a `<source>` element with the `src` attribute set to 'video.mp4' and the `type` attribute set to 'video/mp4'.
## Page
```markdown
# Step 74: Providing the Video Source

Just like with audio, the `<video>` element needs a `<source>` tag to specify the video file to be played.

**Code Example:**
```html
<source src="Video Source URL" type="Video MIME Type">
```
Your task is to add a source for an MP4 video file.
```
## Response
```html
<source src="video.mp4" type="video/mp4">
```
## Language
```text
Html
```## Points
```
200
```
## Code
```html
...
<div class="service-card">
    <video ...>
        <!-- Add the source tag below -->
    </video>
</div>
...```
## Placeholder
```html
<!-- You can add multiple <source> tags for different video formats (e.g., .mp4, .webm, .ogg). -->
```
## Hint
```markdown
*   Use the self-closing `<source>` element with `src` and `type` attributes.
*   Set `src` to 'video.mp4'.
*   Set `type` to 'video/mp4' to identify this as an MP4 video format.
```

# Challenge 75
## Title
```text
H4 Heading Element
```## Description
The `<h4>` element is typically used for subsection titles. Multiple `<h4>` elements can appear throughout a webpage to maintain consistent structural hierarchy and improve accessibility for screen readers and search engines.

Following the provided code example, create a fourth-level heading `<h4>` element with the text content: 'Client-Centered Solutions'.
## Page
```markdown
# Step 75: A Title for the Video Card

Let's add a title to our second service card to describe the video content.

**Code Example:**
```html
<h4>Heading Text Here</h4>
```
Your task is to add an `<h4>` heading for the "Client-Centered Solutions" card.
```
## Response
```html
<h4>Client-Centered Solutions</h4>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="service-card">
    <video ...>
        <source ...>
    </video>
    <!-- Add the h4 heading below -->
</div>
...
```
## Placeholder
```html
<!-- A clear heading helps users understand the content of the card at a glance. -->
```
## Hint
```markdown
*   Use the `<h4>` opening tag for a fourth-level heading.
*   Add the exact text 'Client-Centered Solutions' between the `<h4>` tags.
*   Close with the `</h4>` tag.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 76
## Title
```text
Paragraph with Keyboard Input Element and Event Handler
```
## Description
The `<p>` element defines a paragraph, while the `<kbd>` element represents keyboard input or user input text, typically styled in a monospace font. The `onkeypress` event handler triggers when a key is pressed while the element has focus, allowing you to respond to keyboard interactions.

Following the provided code example, create a paragraph `<p>` containing: "We deliver tailored business strategies designed to " followed by a `<kbd>` element containing the word "drive" with an `onkeypress` event handler set to `console.log('Key pressed')`. Then continue with the text " growth." to complete the sentence.
## Page
```markdown
# Step 76: Describing Keyboard Input

To show text that represents user keyboard input, you can use the `<kbd>` tag. It semantically marks the text as a key or key combination.

**Code Example:**
```html
<p>Paragraph text with <kbd onkeypress="Key Press Handler">Keyboard Input</kbd> and more text.</p>
```
Your task is to create a descriptive paragraph for the video card that uses the `<kbd>` tag.
```
## Response
```html
<p>We deliver tailored business strategies designed to <kbd onkeypress="console.log('Key pressed')">drive</kbd> growth.</p>
```
## Language
```text
Html```
## Points
```
200
```
## Code
```html
...
<div class="service-card">
    <video ...>...</video>
    <h4>...</h4>
    <!-- Add the paragraph with kbd element below -->
</div>
...
```
## Placeholder
```html
<!-- The `<kbd>` tag makes it clear that "drive" represents a kind of input or action. -->
```
## Hint
```markdown
*   Start with the `<p>` tag and include the text "We deliver tailored business strategies designed to " before the `<kbd>` element.
*   Use `<kbd>` with `onkeypress="console.log('Key pressed')"` event handler around the word "drive".
*   Complete the sentence with " growth." and close the paragraph tag with `</p>`.
```

# Challenge 77
## Title
```text
Div Element with CSS Class (Third Instance)
```
## Description
The `<div>` element is a generic container used to group content and apply styling through CSS classes. The `class` attribute assigns one or more CSS class names to an element. Classes are reusable identifiers that can be applied to multiple elements, making them essential for consistent design and layout.

Following the provided code example, create a `<div>` element with the CSS `class` 'service-card'. Use the opening tag only.
## Page
```markdown
# Step 77: Creating the Third Service Card

Time to create the third and final card for our services grid. It will share the same `service-card` class for consistent styling.

**Code Example:**
```html
<div class="Same Class Name">
```
Your task is to add the opening `<div>` for the third service card.```
## Response
```html
<div class="service-card">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="services-grid">
    <div class="service-card">...</div>
    <div class="service-card">...</div>
    <!-- Add the opening div for the third service card below -->
</div>
...```
## Placeholder
```html
<!-- Reusing classes is a core concept of CSS and efficient web design. -->
```
## Hint
```markdown
*   Start with the `<div>` opening tag.
*   Add the `class` attribute with the value 'service-card' in quotes.
*   Remember this is just the opening tag.```

# Challenge 78
## Title
```text
SVG Graphics with Shapes and Text
```
## Description
SVG (Scalable Vector Graphics) allows you to create vector-based graphics directly in HTML. The `<svg>` element acts as a container for vector graphics, supporting shapes like `<rect>` for rectangles and `<text>` for text. The `viewBox` attribute defines the coordinate system.

Following the provided code example, create an `<svg>` element with `width="200"`, `height="100"`, `viewBox="0 0 200 100"`, and `onwheel="console.log('SVG wheel event')"`. Inside, add a blue rounded rectangle `<rect>` with `x="10"`, `y="10"`, `width="180"`, `height="80"`, `fill="#4A90E2"`, and `rx="10"`. Also add a centered white `<text>` element saying 'Brand Identity' with `x="100"`, `y="55"`, `text-anchor="middle"`, `fill="white"`, and `font-size="16"`.
## Page
```markdown
# Step 78: Drawing with SVG

SVG (Scalable Vector Graphics) is a powerful way to create graphics that look sharp at any size. You write them directly in your HTML.

**Code Example:**
```html
<svg width="200" height="100">
  <rect x="10" y="10" width="180" height="80" fill="blue" />
  <text x="100" y="55" fill="white">Hello</text>
</svg>
```
Your task is to create an SVG graphic for the third service card.
```
## Response```html
<svg width="200" height="100" viewBox="0 0 200 100" onwheel="console.log('SVG wheel event')"><rect x="10" y="10" width="180" height="80" fill="#4A90E2" rx="10"/><text x="100" y="55" text-anchor="middle" fill="white" font-size="16">Brand Identity</text></svg>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<div class="services-grid">
    ...
    <div class="service-card">
        <!-- Add the svg element below -->
    </div>
</div>
...
```
## Placeholder
```html
<!-- Unlike raster images (JPG, PNG), SVGs are just code and scale perfectly. -->
```
## Hint
```markdown
*   Start with `<svg>` element including `width`, `height`, `viewBox`, and `onwheel` attributes.
*   Add a `<rect>` element with position (x,y), dimensions, blue fill color, and rounded corners (`rx`).
*   Include a `<text>` element with center positioning, white color, and the specified text content.
```

# Challenge 79
## Title
```text
Heading Level 4
```
## Description
The `<h4>` element creates a fourth-level heading in HTML's hierarchical heading structure. `h4` is typically used for sub-subsection headings.

Following the provided code example, create a fourth-level heading `<h4>` element containing the exact text: 'Strategic Visual Solutions'.
## Page
```markdown
# Step 79: A Title for the SVG Card

Our third card needs a title, just like the others. An `<h4>` is appropriate here.

**Code Example:**```html
<h4>Heading Text Here</h4>
```
Your task is to add an `<h4>` heading for the "Strategic Visual Solutions" card.
```
## Response
```html
<h4>Strategic Visual Solutions</h4>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="service-card">
    <svg ...>...</svg>
    <!-- Add the h4 heading below -->
</div>
...
```
## Placeholder
```html
<!-- This heading gives context to the SVG graphic you just created. -->
```
## Hint
```markdown
*   Start with the opening `<h4>` tag.
*   Add the exact text 'Strategic Visual Solutions' between the tags.
*   End with the closing `</h4>` tag.
```

# Challenge 80
## Title
```text
Paragraph Element```
## Description
The `<p>` element is one of the most fundamental HTML tags, used to define paragraphs of text content. It automatically adds spacing before and after the text block, making it perfect for body text and descriptions.

Following the provided code example, create a paragraph `<p>` element containing the exact text: "Precision-designed graphics to elevate your corporate brand".
## Page
```markdown
# Step 80: A Description for the SVG Card

Finally, let's add a descriptive paragraph to our third service card to explain what it's about.

**Code Example:**
```html
<p>Your Paragraph Text Goes Here</p>
```
Your task is to add a descriptive paragraph for the card.
```
## Response
```html
<p>Precision-designed graphics to elevate your corporate brand</p>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="service-card">
    <svg ...>...</svg>
    <h4>...</h4>
    <!-- Add the paragraph below -->
</div>
...
```## Placeholder
```html
<!-- Short, descriptive paragraphs are great for scannable cards. -->
```
## Hint
```markdown
*   Start with the opening `<p>` tag.
*   Add the exact text: "Precision-designed graphics to elevate your corporate brand".
*   End with the closing `</p>` tag.
```

# Challenge 81
## Title
```text
Div Element with Class
```
## Description
The `<div>` element is a generic container used to group content. The `class` attribute assigns CSS classes to elements, allowing you to target specific elements for styling or scripting. The class name 'legacy-demo' suggests this container is used for demonstrating older HTML features.

Following the provided code example, create an opening `<div>` tag with a `class` attribute set to 'legacy-demo'.
## Page
```markdown
# Step 81: A Container for Legacy Demos

For the next few challenges, we'll look at some older, "deprecated" HTML tags. It's good to recognize them, even if you shouldn't use them in new projects. Let's create a container for them.

**Code Example:**
```html
<div class="Class Name">
```
Your task is to add the opening `<div>` for our legacy demos.
```
## Response
```html
<div class="legacy-demo">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<section id="services">
    ...
    <div class="services-grid">...</div>
    <!-- Add the opening div tag below -->
</section>
...
```
## Placeholder
```html
<!-- We'll put some old-school HTML tags in here for demonstration. -->
```
## Hint
```markdown
*   Start with the `<div` opening tag.
*   Add the `class` attribute with the value 'legacy-demo' in quotes.
*   Close the opening tag with `>` but don't include the closing `</div>` tag.
```

# Challenge 82
## Title
```text
Center Element with Class Attribute
```
## Description
The `<center>` element was historically used to center-align content. It is deprecated in modern HTML in favor of CSS `text-align` or flexbox. The `class` attribute allows you to assign CSS classes for styling.

Following the provided code example, create an opening `<center>` tag with a `class` attribute set to 'legacy-styling'.
## Page```markdown
# Step 82: The Deprecated Center Tag

The `<center>` tag was a simple way to center content. Today, you should use CSS for alignment (`text-align: center`, flexbox, etc.), but let's see how it worked.

**Code Example:**
```html
<center class="Class Name">
```
Your task is to add the opening `<center>` tag.
```
## Response
```html
<center class="legacy-styling">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<section id="services">
    ...
    <div class="legacy-demo">
        <!-- Add the opening center tag below -->
    </div>
</section>
...```
## Placeholder
```html
<!-- This tag is a classic example of mixing structure (HTML) and presentation (CSS). -->
```
## Hint
```markdown
*   Start with the opening angle bracket `<` followed by 'center'.
*   Add a space, then 'class=' followed by the value in double quotes.
*   The `class` value should be 'legacy-styling' and end with the closing bracket `>`.
```

# Challenge 83
## Title
```text
Font Element with Styling Attributes
```
## Description
The `<font>` element is a legacy HTML tag used to control text appearance before CSS became standard. While deprecated, it's seen in older code. It supports attributes like `color`, `size` (on a 1-7 scale), and `bgcolor`.

Following the provided code example, create an opening `<font>` tag with `color="#333"`, `size="3"`, and `bgcolor="#ffffff"`.
## Page
```markdown
# Step 83: The Deprecated Font Tag

Before CSS, the `<font>` tag was used to style text directly in HTML. This is another deprecated tag you should avoid in modern code.

**Code Example:**
```html
<font color="Text Color" size="Font Size" bgcolor="Background Color">
```
Your task is to add the opening `<font>` tag with several styling attributes.
```
## Response
```html
<font color="#333" size="3" bgcolor="#ffffff">```
## Language
```text
Html
```
## Points
```
100
```## Code
```html
...
<div class="legacy-demo">
    <center class="legacy-styling">
        <!-- Add the opening font tag below -->
    </center>
</div>
...
```
## Placeholder
```html
<!-- Another example of styling that now belongs in a CSS file. -->
```
## Hint
```markdown
*   Start with `<font` and add three attributes separated by spaces.
*   Use `color="#333"` for dark gray text, and `size="3"` for medium font size.
*   Add `bgcolor="#ffffff"` for white background, and then close with `>`.
```

# Challenge 84
## Title
```text
Strike-through Elements
```
## Description
The `<strike>` and `<s>` elements both display text with a line through it. However, `<strike>` is deprecated in HTML5. The `<s>` element is the current standard for strike-through text, representing content that is no longer accurate or relevant.

Following the provided code example, create nested strike-through elements by wrapping the text 'Outdated Practices' first with an `<s>` tag, then wrap that entire element with a `<strike>` tag.
## Page
```markdown
# Step 84: Strikethrough Text

There are two tags for strikethrough text: `<s>` and the deprecated `<strike>`. The modern `<s>` tag indicates that text is no longer correct.

**Code Example:**
```html
<strike><s>Irrelevant Text</s></strike>
```
Your task is to nest both tags to demonstrate the effect.
```
## Response
```html
<strike><s>Outdated Practices</s></strike>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<div class="legacy-demo">
    <center ...>
        <font ...>
            <!-- Add the nested strikethrough elements below -->
        </font>
    </center>
</div>
...
```
## Placeholder
```html
<!-- Today, you'd use `<s>` for semantic meaning or CSS `text-decoration: line-through` for styling. -->
```
## Hint
```markdown
*   Start with the outer `<strike>` tag, then add the inner `<s>` tag.
*   Place the text 'Outdated Practices' between the `<s>` and `</s>` tags.
*   Close the inner `</s>` tag first, then close the outer `</strike>` tag.
```

# Challenge 85
## Title
```text
Underline Text Element
```
## Description
The `<u>` element represents text that should be stylistically different from normal text, typically displayed with an underline. In HTML5 it's meant for text that has a non-textual annotation, such as misspelled words. However, it's still commonly used for visual underlining.

Following the provided code example, create an underlined text element containing the exact text 'Enhanced Solutions' using the `<u>` tag.
## Page
```markdown
# Step 85: The Underline Tag

The `<u>` tag underlines text. You should use it with caution, as users often mistake underlined text for a hyperlink. It's semantically meant for things like marking a word as misspelled.

**Code Example:**
```html
<u>Underlined Text Here</u>
```
Your task is to create a `<u>` element.
```
## Response
```html
<u>Enhanced Solutions</u>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="legacy-demo">
    <center ...>
        <font ...>
            <strike><s>...</s></strike>
            <!-- Add the underline element below -->
        </font>
    </center>
</div>
...
```
## Placeholder
```html
<!-- For purely stylistic underlines, CSS `text-decoration: underline` is better. -->
```
## Hint
```markdown
*   Start with the opening `<u>` tag.
*   Add the text 'Enhanced Solutions' between the tags.
*   Close with the `</u>` tag.
```

I will continue generating the rest of the challenges in this format.
I will now generate the rest of the challenges in this format.

# Challenge 86
## Title
```text
Big Text Element
```
## Description
The `<big>` element was used in older HTML to display text in a larger font size. It is deprecated in HTML5 in favor of CSS `font-size`. It's still recognized by browsers for backward compatibility.

Following the provided code example, create a big text element containing the exact text: 'Strategic Innovation'.
## Page
```markdown
# Step 86: The Deprecated Big Tag

The `<big>` tag was a simple, non-semantic way to make text one size larger. Like `<font>`, this is now done with CSS.

**Code Example:**
```html
<big>Larger Text Content Here</big>```
Your task is to create a `<big>` element.
```
## Response
```html
<big>Strategic Innovation</big>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="legacy-demo">
    <center ...>
        <font ...>
            ...
            <u>...</u>
            <!-- Add the big element below -->
        </font>
    </center>
</div>
...
```
## Placeholder
```html
<!-- You can nest `<big>` tags to make text even bigger! But please don't. Use CSS. -->
```
## Hint
```markdown
*   Start with the `<big>` opening tag.
*   Add the exact text 'Strategic Innovation' between the tags.
*   Close with the `</big>` tag.
```

# Challenge 87
## Title```text
Base Font Element
```
## Description
The `<basefont>` element was used in older HTML to set a default font size for the entire document. This element is deprecated in HTML5 and should not be used in modern web development, as CSS is the preferred method for styling text.

Following the provided code example, create a `<basefont>` element with the `size` attribute set to '2'.
## Page
```markdown
# Step 87: The Deprecated Basefont Tag

The `<basefont>` tag was used to set a default font size for all text on a page. This is another deprecated tag that has been replaced by CSS.

**Code Example:**
```html
<basefont size="Font Size Value">
```
Your task is to create a `<basefont>` element.
```
## Response```html
<basefont size="2">
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
...
<div class="legacy-demo">
    <center ...>
        <font ...>
            ...
            <!-- Add the basefont element below -->
        </font>
    </center>
</div>
...
```
## Placeholder
```html
<!-- This tag would affect all the text that comes after it on the page. -->
```
## Hint
```markdown
*   Start with the `<basefont` opening tag.
*   Add the `size` attribute with a value of '2' in quotes.
*   Use the opening tag format without a closing tag.
```

# Challenge 88
## Title
```text
Table with Border Attribute
```
## Description
The `<table>` element creates structured data in rows and columns. The `border` attribute adds visible borders around table cells. While CSS is preferred for modern styling, the `border` attribute provides a quick way to add basic table borders.

Following the provided code example, create an opening `<table>` tag with a `border` attribute set to the value '1'.
## Page
```markdown
# Step 88: Creating a Table

Tables are used to display data in rows and columns. Let's start by creating the main `<table>` container. The `border` attribute is a quick (though old-fashioned) way to see the table's structure.

**Code Example:**
```html
<table border="Border Value">
```
Your task is to add the opening `<table>` tag.
```
## Response
```html
<table border="1">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="legacy-demo">
    ...
    <!-- Add the opening table tag below -->
</div>
...
```
## Placeholder
```html
<!-- This is the container for all your table rows, headers, and cells. -->
```
## Hint
```markdown
*   Start with the opening `<table>` tag.
*   Add the `border` attribute inside the opening tag.
*   Set the `border` value to '1' using quotes.
```

# Challenge 89
## Title
```text
Table Caption Element
```
## Description
The `<caption>` element provides a title or description for an HTML table. It must be placed immediately after the opening `<table>` tag. The `<caption>` helps users understand what the table contains and is important for accessibility.

Following the provided code example, create a table `<caption>` element with the exact text: 'Service Comparison'.
## Page
```markdown
# Step 89: Adding a Table Caption

A `<caption>` provides a title for your table. It's important for accessibility and should be the first thing inside your `<table>`.

**Code Example:**
```html
<caption>Caption Text Here</caption>
```
Your task is to add a caption to your table.```
## Response
```html
<caption>Service Comparison</caption>
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
...
<div class="legacy-demo">
    ...
    <table border="1">
        <!-- Add the caption below -->
    </table>
</div>
...
```
## Placeholder
```html
<!-- A good caption explains what the table data represents. -->
```
## Hint
```markdown
*   Start with the opening `<caption>` tag.
*   Add the exact text 'Service Comparison' between the opening and closing tags.
*   End with the closing `</caption>` tag.
```

# Challenge 90
## Title
```text
Column Group Element
```
## Description
The `<colgroup>` element is used within HTML tables to group columns together for styling. It must be placed after any `<caption>` element and before any `<thead>`, `<tbody>`, `<tfoot>`, or `<tr>` elements. This element allows you to apply styles to entire columns at once.

Using the provided code example, create a column group element using the opening `<colgroup>` tag only.
## Page
```markdown
# Step 90: Grouping Table Columns

The `<colgroup>` element is a container for one or more `<col>` elements, which are used to specify properties for each column within a table.

**Code Example:**
```html
<colgroup>
```
Your task is to add the opening `<colgroup>` tag to your table.
```
## Response
```html
<colgroup>
```
## Language```text
Html
```
## Points
```
200
```
## Code
```html
...
<table border="1">
    <caption>...</caption>
    <!-- Add the opening colgroup tag below -->
</table>
...
```
## Placeholder
```html
<!-- This is where you'll define styles for your table's columns. -->
```
## Hint
```markdown
*   Start with the opening angle bracket `<`.
*   Type 'colgroup' as the element name.
*   Close with the closing angle bracket `>` - no attributes needed.
```

# Challenge 91
## Title
```text
Table Column Element
```
## Description
The `<col>` element defines properties for table columns within a `<colgroup>`. It's a self-closing element. The `style` attribute allows inline CSS styling, while the `span` attribute specifies how many consecutive columns the element affects.

Following the provided code example, create a `<col>` element with a light gray background color (`#f0f0f0`) that spans 1 column. Do this by including the `style` attribute with `background-color: #f0f0f0;` and the `span` attribute set to '1'.
## Page
```markdown
# Step 91: Styling the First Column

Inside the `<colgroup>`, you can use `<col>` tags to style entire columns. The `span` attribute can specify how many columns a style applies to.

**Code Example:**
```html
<col style="background-color: lightblue;" span="1">
```
Your task is to style the first column of your table.
```
## Response
```html
<col style="background-color: #f0f0f0;" span="1">
```
## Language
```text
Html
```## Points
```
200
```
## Code
```html
...
<table border="1">
    <caption>...</caption>
    <colgroup>
        <!-- Add the col tag below -->
    </colgroup>
</table>
...
```
## Placeholder
```html
<!-- This will give the entire first column a light gray background. -->
```
## Hint
```markdown
*   Start with the self-closing `<col>` tag.
*   Add the `style` attribute with `background-color: #f0f0f0;`.
*   Include the `span` attribute with value set to '1' to affect one column.
```

# Challenge 92
## Title
```text
Table Column Element (Second Instance)
```
## Description
The `<col>` element defines column properties. The `span` attribute allows you to apply styling to multiple consecutive columns at once. When combined with inline styles, you can control background colors, widths, and other visual properties.

Following the provided code example, create a second column element with a light blue background color (`#e8f4f8`) that spans across 2 columns using the `span` attribute.
## Page
```markdown
# Step 92: Styling the Next Two Columns

Let's style the next two columns with a different background color. We can do this with a single `<col>` tag by using `span="2"`.

**Code Example:**
```html
<col style="background-color: lightgreen;" span="2">
```
Your task is to style the second and third columns of your table.
```
## Response
```html
<col style="background-color: #e8f4f8;" span="2">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<table border="1">
    <caption>...</caption>
    <colgroup>
        <col style="background-color: #f0f0f0;" span="1">
        <!-- Add the second col tag below -->
    </colgroup>
</table>
...
```## Placeholder
```html
<!-- Now the next two columns will have a light blue background. -->
```
## Hint
```markdown
*   Use the `<col>` tag with a `style` attribute for `background-color`.
*   Set the `background-color` to `#e8f4f8` in the `style` attribute.
*   Add `span="2"` to make this column definition apply to 2 columns.
```

# Challenge 93
## Title
```text
Table Head Element
```
## Description
The `<thead>` element defines the header section of a table, grouping header content separately from the table body. It contains one or more `<tr>` elements with header cells (`<th>`) that describe the columns.

Using the provided code example, create the opening tag for a table head section. Write only the `<thead>` opening tag.
## Page
```markdown
# Step 93: Creating the Table Head

A table should have a header section, defined by `<thead>`. This is where your column titles will go.

**Code Example:**
```html
<thead>
```
Your task is to add the opening `<thead>` tag to your table, after the `<colgroup>`.
```
## Response
```html
<thead>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<table border="1">
    <caption>...</caption>
    <colgroup>...</colgroup>
    <!-- Add the opening thead tag below -->
</table>
...
```
## Placeholder
```html
<!-- `<thead>`, `<tbody>`, and `<tfoot>` give your table a strong semantic structure. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'thead' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 94
## Title
```text
Table Row Element
```
## Description
The `<tr>` element defines a table row, acting as a container for table cells. Each `<tr>` represents a horizontal row and contains one or more header cells (`<th>`) or data cells (`<td>`).

Using the provided code example, create the opening tag for a table row. Write only the `<tr>` opening tag.
## Page
```markdown
# Step 94: Adding a Row to the Table Head

Inside the `<thead>`, you need at least one `<tr>` (table row) to hold the header cells.

**Code Example:**
```html
<tr>
```
Your task is to add the opening `<tr>` tag inside your `<thead>`.
```
## Response
```html
<tr>
```## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<table border="1">
    ...
    <thead>
        <!-- Add the opening tr tag below -->
    </thead>
</table>
...
```
## Placeholder
```html
<!-- This row will contain the titles for our columns. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'tr' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 95
## Title
```text
Table Header Cell with Accessibility Attributes
```
## Description
The `<th>` element creates a header cell. Two important accessibility attributes are `scope`, which tells screen readers whether the header applies to a column ('col') or row ('row'), and `headers`, which creates explicit relationships by referencing the ID of related header cells.

Following the provided code example, create a table header cell `<th>` with the text: 'Service'. Add a `scope` attribute set to 'col' and a `headers` attribute set to 'service-header'.
## Page
```markdown
# Step 95: Creating a Header Cell

Inside the table row, you create header cells with `<th>` (table header). The `scope` attribute is crucial for accessibility, telling screen readers what the header is for.

**Code Example:**
```html
<th scope="col" headers="Header ID">Column Header Text</th>
```
Your task is to create the first header cell for your table.
```
## Response
```html
<th scope="col" headers="service-header">Service</th>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<thead>
    <tr>
        <!-- Add the table header cell below -->
    </tr>
</thead>
...
```
## Placeholder
```html
<!-- `scope="col"` tells assistive tech that this is a header for the column below it. -->
```
## Hint
```markdown
*   Start with `<th>` and include both `scope` and `headers` attributes.
*   Set `scope="col"` to indicate this is a column header.
*   Set `headers="service-header"`, and add the text 'Service' between the tags.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 96
## Title
```text
Table Header Cell with Column Scope
```
## Description
The `<th>` element creates header cells. The `scope` attribute is crucial for accessibility. When set to 'col', it indicates that this header applies to all cells in the column below it. Column headers are automatically styled with bold text and center alignment by browsers.

Following the provided code example, create a table header cell `<th>` containing the text: 'Basic'. Add the `scope` attribute and set its value to 'col'.
## Page
```markdown
# Step 96: The Second Header Cell

Let's add the next header cell for our "Basic" service package. It also needs a `scope` attribute.

**Code Example:**
```html
<th scope="col">Second Column Header Text</th>
```
Your task is to create the "Basic" header cell.
```
## Response
```html
<th scope="col">Basic</th>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<thead>
    <tr>
        <th scope="col" headers="service-header">Service</th>
        <!-- Add the "Basic" header cell below -->
    </tr>
</thead>
...
```
## Placeholder
```html
<!-- This is the title for the second column. -->
```
## Hint
```markdown
*   Start with the `<th>` opening tag.
*   Add `scope="col"` attribute inside the opening tag.
*   Place the text 'Basic' between the opening and closing tags.
```

# Challenge 97
## Title
```text
Additional Table Header Cell with Column Scope
```
## Description
When building table headers, you often need multiple `<th>` elements in the same row. Each header cell should include the `scope="col"` attribute to maintain proper accessibility standards. This creates a clear semantic relationship between each header and its corresponding column data.

Following the provided code example, create another table header cell `<th>` containing the text: 'Premium'. Add the `scope` attribute and set its value to 'col'.
## Page
```markdown
# Step 97: The Third Header Cell

Finally, let's add the header cell for our "Premium" service package to complete the header row.

**Code Example:**
```html
<th scope="col">Third Column Header Text</th>
```
Your task is to create the "Premium" header cell.
```
## Response
```html
<th scope="col">Premium</th>
```
## Language
```text
Html
```
## Points
```
100```
## Code
```html
...
<thead>
    <tr>
        <th ...>Service</th>
        <th scope="col">Basic</th>
        <!-- Add the "Premium" header cell below -->
    </tr>
</thead>
...
```
## Placeholder
```html
<!-- Now our table has three columns, each with a clear, accessible header. -->```
## Hint
```markdown
*   Start with the `<th>` opening tag.
*   Add `scope="col"` attribute inside the opening tag.
*   Place the text 'Premium' between the opening and closing tags.
```

# Challenge 98
## Title
```text
Table Body Element
```
## Description
The `<tbody>` element defines the main content section of an HTML table, containing the actual data rows that appear below the header section. It works alongside `<thead>` to create a clear semantic structure that separates header content from data content.

Using the provided code example, create the opening tag for a table body section. Write only the `<tbody>` opening tag.
## Page
```markdown
# Step 98: Creating the Table Body

After the table head (`<thead>`), the main data of the table goes inside the `<tbody>` (table body) element.

**Code Example:**
```html
<tbody>```
Your task is to add the opening `<tbody>` tag after the `<thead>`.
```
## Response
```html
<tbody>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<table ...>
    ...
    <thead>...</thead>
    <!-- Add the opening tbody tag below -->
</table>
...
```
## Placeholder
```html
<!-- All your rows of data will go inside here. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'tbody' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 99
## Title
```text
Table Row Element in Body Section
```## Description
The `<tr>` element creates table rows. While `<tr>` elements in the `<thead>` contain header cells (`<th>`), the `<tr>` elements inside `<tbody>` contain data cells (`<td>`). Each row in the table body represents one record or entry of your data.

Using the provided code example, create the opening tag for a table row inside the table body section. Write only the `<tr>` opening tag.
## Page
```markdown
# Step 99: Adding a Data Row

Inside the `<tbody>`, each `<tr>` (table row) will hold the data for one entry in your table.

**Code Example:**
```html
<tr>
```
Your task is to add the opening `<tr>` tag for your first row of data.
```
## Response
```html
<tr>
```## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<table ...>
    ...
    <tbody>
        <!-- Add the opening tr tag below -->
    </tbody>
</table>
...
```
## Placeholder
```html
<!-- This row will contain the data cells (`<td>`) that align with the headers above. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'tr' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 100
## Title
```text
Table Data Cell with ID and Bold Text
```## Description
The `<td>` element creates data cells within table rows. The `id` attribute provides a unique identifier that can be referenced by other elements, particularly useful for accessibility when combined with the `headers` attribute in table headers. The `<b>` element applies bold formatting to text.

Following the provided code example, create a table data `<td>` cell with an `id` attribute set to 'service-header'. Inside this `<td>` cell, add the text 'Business Development' wrapped in bold `<b>` tags.
## Page
```markdown
# Step 100: Adding a Data Cell

Inside a data row (`<tr>`), you add the actual data in `<td>` (table data) cells. Let's add the first cell, which will act as the "header" for this row.

**Code Example:**
```html
<td id="Table Cell ID"><b>Bold Text Here</b></td>
```
Your task is to create the first data cell for the "Business Development" row.
```
## Response
```html
<td id="service-header"><b>Business Development</b></td>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<tbody>
    <tr>
        <!-- Add the table data cell below -->
    </tr>
</tbody>
...
```
## Placeholder
```html
<!-- This `id` matches the `headers` attribute from our `<th>`, creating a strong accessible link. -->
```
## Hint```markdown
*   Start with `<td>` and include the `id` attribute set to 'service-header'.
*   Add `<b>` tags around the text for bold formatting.
*   Place 'Business Development' between the `<b>` and `</b>` tags.
```

# Challenge 101
## Title
```text
Table Data Cell with Check Mark Symbol
```
## Description
The `<td>` element creates individual data cells. When building comparison tables, symbols like check marks (✓) are commonly used to indicate availability or inclusion. The check mark character (✓) is a Unicode symbol that displays consistently across browsers.

Following the provided code example, create a table data `<td>` cell containing a check mark symbol.
## Page
```markdown
# Step 101: A Cell with a Checkmark

For "yes/no" or "included/not included" data, a simple checkmark is very effective. You can just type the symbol directly into a `<td>`.

**Code Example:**
```html
<td>✓</td>
```
Your task is to add a data cell with a checkmark for the "Basic" plan.
```
## Response
```html
<td>✓</td>
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
...
<tbody>
    <tr>
        <td id="service-header"><b>Business Development</b></td>
        <!-- Add the checkmark cell below -->
    </tr>
</tbody>
...
```
## Placeholder
```html
<!-- A simple, visual way to show "Yes". -->
```
## Hint
```markdown
*   Start with the `<td>` opening tag.
*   Add the check mark symbol '✓' between the tags.
*   Close with the `</td>` tag.```

# Challenge 102
## Title
```text
Table Data Cell with Row Span
```## Description
The `rowspan` attribute allows a table cell to extend vertically across multiple rows, creating merged cells. When you set `rowspan="2"`, the cell occupies the space of two rows. This is useful where certain information applies to multiple rows. You must remember to omit the corresponding cell in the next row.

Following the provided code example, create a table data `<td>` cell that spans 2 rows vertically using the `rowspan` attribute. Set the `rowspan` value to "2" and include the text "✓ Plus Advanced Features" inside the cell.
## Page
```markdown
# Step 102: A Cell Spanning Multiple Rows

Sometimes a single data cell applies to more than one row. You can use the `rowspan` attribute to make a cell stretch downwards across multiple rows.

**Code Example:**
```html
<td rowspan="2">This cell spans two rows.</td>
```
Your task is to create a cell for the "Premium" plan that spans two rows.
```
## Response
```html
<td rowspan="2">✓ Plus Advanced Features</td>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<tr>
    <td id="service-header"><b>...</b></td>
    <td>✓</td>
    <!-- Add the rowspan cell below -->
</tr>
...
```
## Placeholder```html
<!-- Because this cell spans 2 rows, the next `<tr>` will need one less `<td>`. -->```
## Hint
```markdown
*   Start with `<td>` and add the `rowspan` attribute.
*   Set `rowspan="2"` to make the cell span 2 rows.
*   Add the text "✓ Plus Advanced Features" between the opening and closing tags.
```

# Challenge 103
## Title```text
Second Table Row in Body Section
```
## Description
When creating multiple rows in a `<tbody>`, each `<tr>` element represents a separate horizontal row of data. If a cell in the row above spans multiple rows (like `rowspan="2"`), that cell occupies space in this row as well, meaning you'll need fewer `<td>` elements in this row to maintain proper table alignment.

Using the provided code example, create the opening tag for a second table row inside the table body section.
## Page
```markdown
# Step 103: The Second Data Row

Let's add the second row of data to our table. Remember the `rowspan` from the previous step!

**Code Example:**
```html
<tr>
```
Your task is to add the opening `<tr>` tag for the second data row.```
## Response
```html
<tr>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<tbody>
    <tr>...</tr>
    <!-- Add the opening tr tag for the second row below -->
</tbody>
...
```
## Placeholder
```html
<!-- This row will have one less cell than the first row. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'tr' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 104
## Title
```text
Table Data Cell with Bold Service Name
```
## Description
Table data cells `<td>` often contain service names or features that benefit from bold formatting. The `<b>` element provides simple bold formatting. Unlike header cells (`<th>`) which are automatically bold, data cells (`<td>`) require explicit formatting elements like `<b>`.

Following the provided code example, create a table data cell `<td>` containing the text 'Digital Marketing' formatted in bold.
## Page
```markdown
# Step 104: The First Cell of the Second Row

This row will represent our "Digital Marketing" service. We'll add a `<td>` with bold text to act as the row's label.

**Code Example:**```html
<td><b>Text Content Here</b></td>
```
Your task is to create the first data cell for the "Digital Marketing" row.
```
## Response
```html
<td><b>Digital Marketing</b></td>
```
## Language```text
Html
```
## Points
```
100
```
## Code
```html
...
<tbody>
    ...
    <tr>
        <!-- Add the data cell below -->
    </tr>
</tbody>
...
```
## Placeholder
```html
<!-- Using `<b>` here is for visual styling, but in a real project, you might use a class and CSS. -->
```
## Hint
```markdown
*   Start with the `<td>` opening tag.
*   Add `<b>` tags around the text for bold formatting.
*   Place 'Digital Marketing' between the `<b>` and `</b>` tags.
```

# Challenge 105
## Title
```text
Table Data Cell in Row with Rowspan Consideration
```
## Description
When working with table rows that follow a row containing cells with `rowspan` attributes, you must carefully count how many cells to include. If the previous row had a cell with `rowspan="2"`, that cell extends down and occupies one column position in the current row. This means the current row needs one fewer `<td>` element than it would normally have.

Following the provided code example, create a table data cell `<td>` containing the text: 'Basic'.
## Page
```markdown
# Step 105: The Final Cell of the Second Row

Our table has three columns. The first cell of this row is for "Digital Marketing". The third column's space is already taken by the `rowspan` cell from the row above. So, we only need to add one more cell for the "Basic" column.

**Code Example:**
```html
<td>Cell Content Here</td>
```
Your task is to add the data cell for the "Basic" plan in this row.
```
## Response
```html
<td>Basic</td>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<tr>
    <td><b>Digital Marketing</b></td>
    <!-- Add the "Basic" data cell below -->
</tr>
...
```
## Placeholder
```html
<!-- Notice how this cell lines up under the "Basic" header, and the table stays aligned. -->
```
## Hint
```markdown
*   Start with the `<td>` opening tag.
*   Add the text 'Basic' between the opening and closing tags.
*   Don't forget the closing `</td>` tag.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 106
## Title
```text
Table Footer Element
```
## Description
The `<tfoot>` element defines the footer section of an HTML table, typically containing summary information or totals. It works alongside `<thead>` and `<tbody>` to create a complete semantic table structure. The `<tfoot>` should appear after the `<tbody>` in your code.

Using the provided code example, create the opening tag for a table footer section. Write only the `<tfoot>` opening tag.
## Page
```markdown
# Step 106: Creating the Table Footer

Just like a header, a table can also have a footer section, defined by `<tfoot>`. This is the place for summary rows.

**Code Example:**```html
<tfoot>
```
Your task is to add the opening `<tfoot>` tag after the `<tbody>`.
```
## Response
```html
<tfoot>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<table ...>
    ...
    <tbody>...</tbody>
    <!-- Add the opening tfoot tag below -->
</table>
...
```
## Placeholder
```html
<!-- The footer is a great place to put totals or summary notes. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'tfoot' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 107
## Title
```text
Table Row Element in Footer Section
```
## Description
The `<tr>` element creates table rows. When placed inside the `<tfoot>` section, the `<tr>` element creates a footer row that typically contains summary information. Footer rows often span the full width of the table.

Using the provided code example, create the opening tag for a table row inside the table footer section. Write only the `<tr>` opening tag.
## Page
```markdown
# Step 107: Adding a Row to the Footer

Inside the `<tfoot>`, you need a `<tr>` to hold the footer cells.

**Code Example:**
```html
<tr>
```
Your task is to add the opening `<tr>` tag inside your `<tfoot>`.
```
## Response```html
<tr>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<table ...>
    ...
    <tfoot>
        <!-- Add the opening tr tag below -->
    </tfoot>
</table>
...
```
## Placeholder
```html
<!-- This row will contain our summary cell. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'tr' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 108
## Title
```text
Table Data Cell with Column Span and Small Text
```
## Description
The `colspan` attribute allows a table cell to extend horizontally across multiple columns. When you set `colspan="3"`, the cell occupies the space of three columns. The `<small>` element reduces text size, typically used for fine print or disclaimers.

Following the provided code example, create a table data `<td>` cell that spans 3 columns horizontally. Set the `colspan` value to "3" and include the text `*All packages include 24/7 support` wrapped in `<small>` tags.
## Page
```markdown
# Step 108: A Cell Spanning Multiple Columns

For a summary note in the footer that applies to all columns, you can make a single cell span the entire width of the table using the `colspan` attribute.

**Code Example:**
```html
<td colspan="3"><small>Small Text Here</small></td>
```
Your task is to create the footer cell that spans all three columns.
```
## Response
```html
<td colspan="3"><small>*All packages include 24/7 support</small></td>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<tfoot>
    <tr>
        <!-- Add the colspan cell below -->
    </tr>
</tfoot>
...
```
## Placeholder
```html
<!-- `colspan` is the horizontal equivalent of `rowspan`. -->
```
## Hint
```markdown
*   Start with `<td>` and add the `colspan` attribute set to "3".
*   Use `<small>` tags around the text to make it smaller.
*   Place "*All packages include 24/7 support" between the `<small>` and `</small>` tags.
```

# Challenge 109
## Title
```text
Search Element
```
## Description
The `<search>` element is a semantic HTML5 element that represents a section containing search functionality. It provides meaningful structure to search areas, helping screen readers and other assistive technologies identify search regions.

Using the provided code example, create the opening tag for a search section element. Write only the `<search>` opening tag.
## Page```markdown
# Step 109: The Search Element

For sections of your site dedicated to searching, you can use the semantic `<search>` tag. This helps define the structure of your page for assistive technologies.

**Code Example:**
```html
<search>
```
Your task is to add the opening `<search>` tag.
```
## Response
```html
<search>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>
    ...
    <!-- Add the opening search tag below -->
</main>
...
```
## Placeholder
```html
<!-- You'd typically put a search form inside this element. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'search' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 110
## Title
```text
Form Element with Multiple Attributes and Event Handlers
```
## Description
The `<form>` element creates interactive forms that collect user input. It supports numerous attributes: `id`, `method` (how data is sent), `action` (destination URL), `enctype` (for file uploads), and `novalidate` (disables browser validation). Event handlers like `onsubmit`, `onreset`, and `oninvalid` execute JavaScript during form interactions.

Following the provided code example, create a `<form>` element with: `id`="contact", `method`="post", `action`="/submit", `enctype`="multipart/form-data", the `novalidate` attribute, and three event handlers for `onsubmit`, `onreset`, and `oninvalid` that log messages to the console.
## Page
```markdown
# Step 110: Creating a Form

The `<form>` element is the container for all your input fields, buttons, and labels. It has several important attributes that control how it behaves.

**Code Example:**
```html
<form id="Form ID" method="post" action="/submit-url" onsubmit="console.log('Submitting')">
```
Your task is to add the opening `<form>` tag with all its attributes.
```
## Response
```html
<form id="contact" method="post" action="/submit" enctype="multipart/form-data" novalidate onsubmit="console.log('Form submitted'); return false;" onreset="console.log('Form reset')" oninvalid="console.log('Form invalid')">
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<search>
    <!-- Add the opening form tag below -->
</search>
...
```
## Placeholder
```html
<!-- `enctype="multipart/form-data"` is required if your form allows file uploads. -->
```
## Hint
```markdown
*   Start with `<form>` and add `id="contact"`, `method="post"`, and `action="/submit"`.
*   Add `enctype="multipart/form-data"` and the `novalidate` attribute.
*   Include the three event handlers: `onsubmit`, `onreset`, and `oninvalid` with their `console.log` statements.
```

# Challenge 111
## Title
```text
Fieldset Element
```
## Description
The `<fieldset>` element groups related form controls together, creating a visual and semantic boundary. It automatically draws a border around its contents and can include a `<legend>` element to provide a title for the grouped fields.

Using the provided code example, create the opening tag for a fieldset element inside the form. Write only the `<fieldset>` opening tag.
## Page
```markdown
# Step 111: Grouping Form Fields with Fieldset

To group related controls within a form, you can use the `<fieldset>` element. This improves organization and accessibility.

**Code Example:**```html
<fieldset>
```
Your task is to add the opening `<fieldset>` tag inside your form.
```
## Response
```html
<fieldset>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<form id="contact" ...>
    <!-- Add the opening fieldset tag below -->
</form>
...
```
## Placeholder
```html
<!-- This will create a box around a group of form inputs. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'fieldset' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 112
## Title
```text
Legend Element
```
## Description
The `<legend>` element provides a caption or title for a `<fieldset>` element, describing the purpose of the grouped form controls. It must be the first child element within a `<fieldset>` and creates a visible label that appears integrated with the fieldset's border.

Following the provided code example, create a `<legend>` element containing the text 'Contact Information' inside, to serve as the title for the fieldset group.
## Page
```markdown
# Step 112: Adding a Legend to the Fieldset

A `<fieldset>` should have a `<legend>` element as its first child. The legend acts as a caption for the group of fields.

**Code Example:**
```html
<legend>Title Text</legend>
```
Your task is to add a legend to your fieldset.
```
## Response
```html
<legend>Contact Information</legend>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<form ...>
    <fieldset>
        <!-- Add the legend tag below -->
    </fieldset>
</form>
...```
## Placeholder
```html
<!-- The browser places this text right on the border of the fieldset. -->
```
## Hint
```markdown
*   Start with the `<legend>` opening tag.
*   Add the text 'Contact Information' between the tags.
*   Close with the `</legend>` tag.
```

# Challenge 113
## Title
```text
Label Element with For Attribute
```
## Description
The `<label>` element creates a caption for form controls. The `for` attribute establishes a connection between the label and a specific form control by referencing the control's `id` attribute. This is crucial for accessibility: clicking the label focuses the input, and screen readers announce the label for the input.

Following the provided code example, create a `<label>` element with the text 'Full Name:' inside. Connect it to an input field using the `for` attribute set to 'name'.
## Page
```markdown
# Step 113: Labeling Your Inputs

Every form input needs a `<label>`. This tells users what the input is for and is critical for accessibility. The `for` attribute links the label to the input via its `id`.

**Code Example:**
```html
<label for="Input ID">Label Text</label>```
Your task is to create the label for the "Full Name" input field.
```
## Response
```html
<label for="name">Full Name:</label>
```
## Language
```text
Html```
## Points
```
100
```
## Code
```html
...
<fieldset>
    <legend>...</legend>
    <!-- Add the label for the name input below -->
</fieldset>
...
```
## Placeholder
```html
<!-- Clicking on this label in the preview will focus the input field (once we add it). -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="name"` to connect with an input that has `id="name"`.
*   Add the text 'Full Name:' between the opening and closing tags.
```

# Challenge 114
## Title
```text
Comprehensive Text Input Element with Multiple Attributes and Event Handlers
```
## Description
The `<input type="text">` creates a single-line text field with extensive customization options. Key attributes include `id` and `name` for identification, `required` for validation, `autofocus` to focus on page load, `autocomplete`, `placeholder`, `maxlength`, `pattern` for regex validation, and many more. Event handlers like `onblur`, `onfocus`, `onchange`, etc., provide JavaScript interaction.

Following the provided code example, create an `<input>` element with `type="text"`, `id` and `name` set to "name", `required`, `autofocus`, and a dozen other specified attributes and event handlers for a fully-featured text field.
## Page```markdown
# Step 114: A Fully-Featured Text Input

Now, let's add the text input that our label is `for`. `<input>` elements have a huge number of attributes to control their behavior and provide a better user experience.

**Code Example:**
```html
<input type="text" id="user-id" name="username" required autofocus autocomplete="username" placeholder="Enter username">
```
Your task is to create a comprehensive text input for the user's name, with many attributes and event handlers.
```
## Response
```html
<input type="text" id="name" name="name" required autofocus autocomplete="name" placeholder="Enter your full name" maxlength="50" pattern="[A-Za-z\s]+" spellcheck="false" dirname="name.dir" inputmode="text" enterkeyhint="next" onblur="console.log('Name field blurred')" onfocus="console.log('Name field focused')" onchange="console.log('Name changed')" oninput="console.log('Name input')" onselect="console.log('Name text selected')" oncut="console.log('Text cut')" oncopy="console.log('Text copied')" onpaste="console.log('Text pasted')" ondblclick="console.log('Name double clicked')">
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<fieldset>
    <legend>...</legend>
    <label for="name">Full Name:</label>
    <!-- Add the input element below -->
</fieldset>
...```
## Placeholder
```html
<!-- Interact with this input and watch the console to see all the events fire. -->
```
## Hint
```markdown
*   Start with `<input type="text">` and add `id="name"`, `name="name"`, `required`, and `autofocus`.
*   Add `autocomplete`, `placeholder`, `maxlength`, `pattern`, `spellcheck`, `dirname`, `inputmode`, and `enterkeyhint` attributes.
*   Include all nine event handlers with `console.log` statements for debugging.
```

# Challenge 115
## Title
```text
Label Element for Email Input Field
```
## Description
Creating multiple labels in a form follows the same pattern, but each must connect to a different form control using a unique `for` attribute. The `<label>` element with `for="email"` creates an accessible connection to an email input field, enabling users to click on the label text to focus the associated input.

Following the provided code example, create a `<label>` element with the text "Email:" and connect it to an email input field using the `for` attribute set to "email".
## Page
```markdown
# Step 115: The Email Label

Next, we'll add an email field. First, we need its label.

**Code Example:**
```html
<label for="Input ID">Label Text</label>
```
Your task is to create the label for the "Email" input field.
```
## Response
```html
<label for="email">Email:</label>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<fieldset>
    ...
    <label for="name">...</label>
    <input id="name" ...>
    <!-- Add the label for the email input below -->
</fieldset>
...
```
## Placeholder
```html
<!-- A clear label for one of the most important form fields. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="email"` to connect with an input that has `id="email"`.
*   Add the text "Email:" between the opening and closing tags.
```

I will continue generating the rest of the challenges in this format.

I will continue generating the rest of the challenges in this format.

# Challenge 116
## Title
```text
Email Input Element with Validation and Autocomplete
```
## Description
The `<input type="email">` creates a specialized input field for email addresses, providing built-in validation and enhanced user experience on mobile devices (email-specific keyboards). `required` makes the field mandatory, `autocomplete="email"` enables browser auto-fill, `placeholder` shows example text, and `enterkeyhint` customizes the Enter key label.

Following the provided code example, create an `<input>` element with `type`, `id` and `name` set to "email". Include the `required` attribute, set `autocomplete` to "email", `placeholder` to "youremail@example.com", and `enterkeyhint` to "next".
## Page
```markdown
# Step 116: The Email Input

Now, let's add the input for the email address. Using `type="email"` gives us automatic browser validation and a better keyboard on mobile devices.

**Code Example:**
```html
<input type="email" id="Input ID" name="Input Name" required autocomplete="email" placeholder="Placeholder Text">
```
Your task is to create the email input field.
```
## Response
```html
<input type="email" id="email" name="email" required autocomplete="email" placeholder="youremail@example.com" enterkeyhint="next">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <input id="name" ...>
    <label for="email">Email:</label>
    <!-- Add the email input element below -->
</fieldset>
...
```
## Placeholder
```html
<!-- Try typing an invalid email in the preview and submitting the form to see the browser's warning. -->
```
## Hint
```markdown
*   Start with `<input type="email">` for email-specific validation.
*   Add `id="email"`, `name="email"`, and the `required` attribute.
*   Include `autocomplete`, `placeholder` with example email, and `enterkeyhint` attributes.
```

# Challenge 117
## Title
```text
Label Element for Phone Input Field
```
## Description
Each `input` field in your form needs its own dedicated label with a unique `for` attribute. The `<label>` element with `for="phone"` creates the connection between the label text and a phone number input field, enabling users to click on the label to focus the input.

Following the provided code example, create a `<label>` element with the text 'Phone:' and connect it to a phone input field using the `for` attribute set to 'phone'.
## Page
```markdown
# Step 117: The Phone Label

Let's add a field for a phone number. As always, we start with the label.

**Code Example:**```html
<label for="Input ID">Label Text</label>
```
Your task is to create the label for the "Phone" input field.
```
## Response
```html
<label for="phone">Phone:</label>```
## Language
```text
Html
```
## Points
```
100
```## Code
```html
...
<fieldset>
    ...
    <label for="email">...</label>
    <input id="email" ...>
    <!-- Add the label for the phone input below -->
</fieldset>
...```
## Placeholder
```html
<!-- Keeping your labels and inputs paired is key to accessible forms. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="phone"` to connect with an `<input>` that has `id="phone"`.
*   Add the text 'Phone:' between the opening and closing tags.
```

# Challenge 118
## Title```text
Telephone Input Element with Autocomplete and Placeholder
```
## Description
The `<input type="tel">` creates a specialized input field for telephone numbers. It provides an enhanced user experience on mobile devices by displaying numeric keypads. `autocomplete="tel"` enables browsers to auto-fill phone numbers, while `placeholder` provides a visual example of the expected format.

Following the provided code example, create an input element with `type` set to 'tel', `id` and `name` set to 'phone', `autocomplete` set to 'tel', `placeholder` set to '+1 (555) 123-4567', and `enterkeyhint` set to 'next'.
## Page
```markdown
# Step 118: The Telephone Input

Now for the phone number input. Using `type="tel"` is best, as it brings up a numeric-style keyboard on mobile devices.

**Code Example:**
```html
<input type="tel" id="Element ID" name="Element Name" autocomplete="tel" placeholder="Placeholder Text">
```
Your task is to create the telephone input field.
```
## Response
```html
<input type="tel" id="phone" name="phone" autocomplete="tel" placeholder="+1 (555) 123-4567" enterkeyhint="next">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <input id="email" ...>
    <label for="phone">Phone:</label>
    <!-- Add the telephone input element below -->
</fieldset>
...
```
## Placeholder```html
<!-- `type="tel"` doesn't validate the format, but it improves the user experience on mobile. -->
```
## Hint
```markdown
*   Start with `<input type="tel">` for telephone-specific input handling.
*   Add `id="phone"`, `name="phone"`, and `autocomplete="tel"` attributes.
*   Include `placeholder` with the example phone number format and `enterkeyhint="next"`.
```

# Challenge 119
## Title
```text
Label Element for File Upload Input Field
```
## Description
File upload fields require clear labeling. The `<label>` element with `for="file-upload"` creates an accessible connection between the label text and a file input field, enabling users to click on the label to trigger the file selection dialog.

Following the provided code example, create a `<label>` element with the text 'Resume Upload:' and connect it to a file upload input field using the `for` attribute set to 'file-upload'.
## Page
```markdown
# Step 119: The File Upload Label

Forms can also accept file uploads. Let's add a field for users to upload a resume. First, the label.

**Code Example:**
```html
<label for="Input ID">Label Text</label>
```
Your task is to create the label for the "Resume Upload" input field.
```
## Response
```html
<label for="file-upload">Resume Upload:</label>
```## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<fieldset>
    ...
    <label for="phone">...</label>
    <input id="phone" ...>
    <!-- Add the label for the file upload input below -->
</fieldset>
...
```
## Placeholder
```html
<!-- Clicking this label will open the file picker, which is great for usability. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="file-upload"` to connect with an `<input>` that has `id="file-upload"`.
*   Add the text 'Resume Upload:' between the opening and closing tags.
```

# Challenge 120
## Title
```text
File Upload Input Element with Accept and Multiple Attributes
```## Description
The `<input type="file">` creates a file upload field. The `accept` attribute specifies which file types are allowed, using MIME types or file extensions to filter the file selection dialog. The `multiple` attribute enables users to select more than one file at once.

Following the provided code example, create an `<input>` element with `type="file"`, `id` set to 'file-upload', `name` set to 'resume', `accept` set to '.pdf,.doc,.docx', and include the `multiple` attribute.
## Page
```markdown
# Step 120: The File Upload Input

Now for the file input itself. We can use the `accept` attribute to suggest which file types the user should select, and the `multiple` attribute to allow more than one file.

**Code Example:**
```html
<input type="file" id="File Input ID" name="Input Name" accept=".pdf,.jpg" multiple>
```
Your task is to create the file upload input field.
```
## Response```html
<input type="file" id="file-upload" name="resume" accept=".pdf,.doc,.docx" multiple>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <input id="phone" ...>
    <label for="file-upload">Resume Upload:</label>
    <!-- Add the file input element below -->
</fieldset>
...
```
## Placeholder
```html
<!-- This `input` looks different in every browser, but it always opens a file picker. -->
```
## Hint
```markdown
*   Start with `<input type="file">` and add the `id="file-upload"` attribute.
*   Set `name="resume"` and `accept=".pdf,.doc,.docx"` to restrict file types.
*   Add the `multiple` attribute to allow selecting multiple files.
```

# Challenge 121
## Title
```text
Anchor Element with Download Attribute
```
## Description
The `<a>` element creates hyperlinks. When the `download` attribute is present, it instructs the browser to download the linked resource instead of navigating to it. The `href` attribute specifies the path to the file.

Following the provided code example, create an `<a>` element with `href` set to "/sample-resume.pdf", `download` set to "sample-resume.pdf", and the text "Download Sample Resume".
## Page
```markdown
# Step 121: Creating a Download Link

It's helpful to provide users with a sample or template. You can create a download link using an anchor `<a>` tag with the `download` attribute.

**Code Example:**
```html
<a href="path/to/file.pdf" download="suggested-filename.pdf">Link Text</a>
```
Your task is to create a link to download a sample resume.
```
## Response
```html
<a href="/sample-resume.pdf" download="sample-resume.pdf">Download Sample Resume</a>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <label for="file-upload">...</label>
    <input id="file-upload" ...>
    <!-- Add the download link below -->
</fieldset>
...
```
## Placeholder
```html
<!-- Clicking this link will start a file download instead of opening a new page. -->
```
## Hint
```markdown
*   Start with `<a>` and include the `href="/sample-resume.pdf"` attribute.
*   Add the `download="sample-resume.pdf"` attribute to specify the download filename.
*   Place the text 'Download Sample Resume' between the opening and closing `<a>` tags.
```

# Challenge 122
## Title
```text
Label Element for Country Select Field
```
## Description
Labels also work with dropdown `<select>` elements. The `<label>` element with `for="country"` creates an accessible connection between the label text and a country selection dropdown, enabling users to click on the label to open the dropdown menu.

Following the provided code example, create a `<label>` element with the text 'Country:' and connect it to a country select field using the `for` attribute set to 'country'.
## Page
```markdown
# Step 122: The Country Select Label

Next, let's add a dropdown menu for selecting a country. We'll start with its label.

**Code Example:**
```html
<label for="Input ID">Label Text</label>
```
Your task is to create the label for the "Country" select field.
```
## Response
```html
<label for="country">Country:</label>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<fieldset>
    ...
    <a href="..." ...>...</a>
    <!-- Add the label for the country select below -->
</fieldset>
...
```
## Placeholder```html
<!-- This label will be associated with a dropdown menu. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="country"` to connect with a `<select>` that has `id="country"`.
*   Add the text 'Country:' between the opening and closing tags.
```

# Challenge 123
## Title
```text
Select Element with Form Association
```
## Description
The `<select>` element creates a dropdown menu. It uses `id` and `name` attributes for accessibility and form submission. The `form` attribute is useful when the select element is outside the `<form>` tags but still needs to be associated with a specific form. It references the form's `id`.

Following the provided code example, create a `<select>` element opening tag with `id` and `name` set to 'country', and `form` attribute set to 'contact'.
## Page
```markdown
# Step 123: The Select Dropdown Element

A dropdown menu is created with the `<select>` element. It acts as a container for all the `<option>` elements.

**Code Example:**
```html
<select id="ID Value" name="Name Value" form="Form ID">
```
Your task is to add the opening `<select>` tag for your country dropdown.
```
## Response
```html
<select id="country" name="country" form="contact">
```## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <a ...>...</a>
    <label for="country">Country:</label>
    <!-- Add the opening select tag below -->
</fieldset>
...
```
## Placeholder
```html
<!-- The `form` attribute lets you place this `<select>` anywhere on the page and still have it be part of the form with id="contact". -->
```
## Hint
```markdown
*   Start with `<select>` and include the `id` attribute set to 'country'.
*   Add the `name` attribute set to 'country' for form submission.
*   Include the `form` attribute set to 'contact' to associate with your contact form.
```

# Challenge 124
## Title
```text
Optgroup Element for Select Dropdown Organization
```
## Description
The `<optgroup>` element organizes `<option>` elements within a `<select>` dropdown into logical groups with visible category headers. The `label` attribute provides the text that appears as a non-selectable group header, helping users navigate long lists of options.

Following the provided code example, create an `<optgroup>` element inside the country select dropdown with the `label` attribute set to 'North America'.
## Page
```markdown
# Step 124: Grouping Dropdown Options

For long dropdown lists, you can group related options together using `<optgroup>`. The `label` for the optgroup will appear as a non-selectable heading in the list.

**Code Example:**
```html
<optgroup label="Group Name">
```
Your task is to create an option group for "North America".
```
## Response
```html
<optgroup label="North America">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <label for="country">...</label>
    <select id="country" ...>
        <!-- Add the opening optgroup tag below -->
    </select>
</fieldset>
...
```
## Placeholder
```html
<!-- This helps make long dropdowns much easier to navigate. -->
```
## Hint
```markdown
*   Start with the `<optgroup>` opening tag.
*   Add the `label` attribute and set its value to 'North America'.
*   You'll add `<option>` elements inside this group later.
```

# Challenge 125
## Title
```text
Option Element with Value and Selected Attributes
```
## Description
The `<option>` element creates individual choices within a `<select>` dropdown. The `value` attribute defines what data gets sent to the server, while the text content is what users see. The `selected` attribute makes this option the default choice when the page loads.

Following the provided code example, create an `<option>` element with the `value` attribute set to 'us', include the `selected` attribute, and display 'United States' as the visible text.
## Page
```markdown
# Step 125: Adding an Option to the Dropdown

Each choice in a dropdown is an `<option>` element. The `value` attribute is what gets submitted with the form, and the text between the tags is what the user sees.

**Code Example:**```html
<option value="Value" selected>Option Text</option>
```
Your task is to add "United States" as the default selected option.
```
## Response
```html
<option value="us" selected>United States</option>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<select id="country" ...>
    <optgroup label="North America">
        <!-- Add the option element below -->
    </optgroup>
</select>
...
```
## Placeholder
```html
<!-- The `selected` attribute makes this the default option when the page loads. -->
```
## Hint
```markdown
*   Start with `<option>` and include the `value` attribute set to 'us'.
*   Add the `selected` attribute to make this the default choice.
*   Place 'United States' as the text content between the opening and closing tags.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 126
## Title
```text
Additional Option Element in Optgroup
```
## Description
When building grouped dropdowns, you typically include multiple `<option>` elements within each `<optgroup>`. Each `<option>` shares the visual grouping but has its own unique `value` attribute and display text.

Following the provided code example, create an `<option>` element with `value` set to 'ca', and the display text: 'Canada'.
## Page
```markdown
# Step 126: Adding Another Option

Let's add another country to our "North America" group.

**Code Example:**```html
<option value="Second Value">Second Option Text</option>
```
Your task is to add "Canada" as an option.
```
## Response
```html
<option value="ca">Canada</option>
```
## Language
```text
Html
```
## Points
```
100
```
## Code```html
...
<select ...>
    <optgroup label="North America">
        <option value="us" selected>United States</option>
        <!-- Add the "Canada" option below -->
    </optgroup>
</select>
...
```
## Placeholder
```html
<!-- This option will appear right below "United States" in the same group. -->
```
## Hint
```markdown
*   Start with the `<option>` opening tag and include the `value` attribute.
*   Set `value="ca"` to use the country code for Canada.
*   Add the text 'Canada' between the opening and closing tags.
```

# Challenge 127
## Title
```text
Second Optgroup Element
```
## Description
When you have multiple `<optgroup>` elements in the same select menu, each creates a separate section with its own heading. The `label` attribute provides the visible heading for each group.

Following the provided code example, create a second `<optgroup>` element inside your select dropdown. Set the `label` attribute to 'Europe'.
## Page
```markdown
# Step 127: Creating a Second Option Group

You can have multiple `<optgroup>` elements in a single dropdown. Let's create another one for European countries.

**Code Example:**
```html
<optgroup label="Second Group Name">
```
Your task is to add a new option group for "Europe".
```
## Response
```html
<optgroup label="Europe">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<select ...>
    <optgroup label="North America">...</optgroup>
    <!-- Add the opening "Europe" optgroup tag below -->
</select>
...
```
## Placeholder
```html
<!-- This will create a new, non-selectable heading in your dropdown list. -->
```
## Hint
```markdown
*   Start with the `<optgroup>` opening tag.
*   Include the `label` attribute and set its value to 'Europe'.
*   This is the second `<optgroup>` in your select element, creating another grouped section.
```

# Challenge 128
## Title
```text
Option Element within Optgroup
```
## Description
The `<option>` element creates individual selectable choices. When placed inside an `<optgroup>`, these options become part of a labeled group. The `value` attribute defines what gets submitted, while the text content is what users see.

Following the provided code example, create an `<option>` element with the `value` attribute set to 'uk', and the display text: 'United Kingdom'.
## Page
```markdown
# Step 128: Adding an Option to the New Group

Now, let's add the first country to our "Europe" group.

**Code Example:**
```html
<option value="Option Value">Option Text</option>
```
Your task is to add "United Kingdom" as an option.```
## Response
```html
<option value="uk">United Kingdom</option>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<select ...>
    ...
    <optgroup label="Europe">
        <!-- Add the "United Kingdom" option below -->
    </optgroup>
</select>
...
```
## Placeholder
```html
<!-- This option will appear indented under the "Europe" heading. -->
```
## Hint
```markdown
*   Start with `<option>` and include the `value` attribute.
*   Set `value="uk"` for the form submission value.
*   Add 'United Kingdom' as the display text between the opening and closing tags.
```

# Challenge 129
## Title
```text
Second Option Element within Optgroup
```
## Description
The `<option>` element creates individual selectable choices within a dropdown. When placed inside an `<optgroup>`, options are visually grouped. The `value` specifies what data is sent to the server, while the text content is what users see.

Following the provided code example, create an `<option>` element with the `value` set to 'de', and the display text: 'Germany'.
## Page
```markdown
# Step 129: Adding Another European Option

Let's add one more country to our "Europe" group to complete it.

**Code Example:**
```html
<option value="Second Value">Second Option Text</option>
```
Your task is to add "Germany" as an option.
```
## Response
```html
<option value="de">Germany</option>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<select ...>
    ...
    <optgroup label="Europe">
        <option value="uk">United Kingdom</option>
        <!-- Add the "Germany" option below -->
    </optgroup>
</select>
...
```
## Placeholder
```html
<!-- Your dropdown is now nicely organized by continent. -->
```
## Hint
```markdown
*   Start with the `<option>` opening tag and include the `value` attribute.
*   Set `value="de"` to use the country code for Germany.
*   Add the text 'Germany' between the opening and closing tags for the display name.
```

# Challenge 130
## Title
```text
Label Element for Services Selection Input
```
## Description
When creating labels for specialized input elements like datalist-enabled fields, the `<label>` element follows the same accessibility principles. The `for` attribute creates the connection between the label text and an input field that will use a datalist for autocomplete suggestions.

Following the provided code example, create a `<label>` element with the text 'Interested Services:' and connect it to a services input field using the `for` attribute set to 'services-list'.
## Page
```markdown
# Step 130: The Label for a Datalist Input

Next, we'll create an input field that gives users suggestions as they type. This is done with an `<input>` and a `<datalist>`. First, we need the label.

**Code Example:**
```html
<label for="Form Element ID">Label Text</label>
```
Your task is to create the label for the "Interested Services" input.
```
## Response
```html
<label for="services-list">Interested Services:</label>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<fieldset>
    ...
    <select ...>...</select>
    <!-- Add the label for the services list below -->
</fieldset>
...
```
## Placeholder
```html
<!-- This label will connect to an input field with a list of suggestions. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="services-list"` to connect with an `<input>` that has `id="services-list"`.
*   Add the text 'Interested Services:' between the opening and closing tags.
```

# Challenge 131
## Title
```text
Input Element with Datalist Connection and Search Event
```
## Description
The `<input>` element can be enhanced with a `list` attribute that connects it to a `<datalist>` element, creating a searchable dropdown with predefined options. The `list` attribute references the `id` of a datalist. The `onsearch` event handler triggers when users perform search actions.

Following the provided code example, create an `<input>` element with the `list` attribute set to 'services-data', `id` set to 'services-list', `name` set to 'services', and `onsearch` event handler set to "console.log('Search performed')".
## Page
```markdown
# Step 131: The Datalist Input

This is the input field that will be connected to our datalist. The `list` attribute's value must match the `id` of the `<datalist>` element we'll create next.

**Code Example:**
```html
<input list="Data List ID" id="Input ID" name="Input Name" onsearch="Search Handler">
```
Your task is to create the input element that will use a datalist.
```
## Response
```html
<input list="services-data" id="services-list" name="services" onsearch="console.log('Search performed')">
```
## Language
```text
Html
```## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <select ...>...</select>
    <label for="services-list">...</label>
    <!-- Add the input element below -->
</fieldset>
...
```
## Placeholder
```html
<!-- This looks like a normal text box, but it will have autocomplete suggestions. -->
```
## Hint
```markdown
*   Start with `<input>` and add the `list` attribute set to 'services-data'.
*   Include `id="services-list"` and `name="services"` for identification.
*   Add `onsearch="console.log('Search performed')"` for the search event handler.
```

# Challenge 132
## Title
```text
Datalist Element with Service Options
```
## Description
The `<datalist>` element provides a list of predefined suggestions for an `<input>` element, while still allowing users to type their own input. The datalist contains multiple `<option>` elements, each with a `value` attribute that appears as a suggestion. The datalist's `id` must match the input's `list` attribute.

Following the provided code example, create a `<datalist>` element with the `id` attribute set to 'services-data'. It should contain three service `<option>` elements with the values: 'Business Development', 'Digital Marketing', and 'Web Development'.
## Page
```markdown
# Step 132: Creating the Datalist

The `<datalist>` element provides the suggestions for our input field. It's invisible on its own and is linked to an `<input>` by its `id`.

**Code Example:**
```html
<datalist id="Datalist ID">
  <option value="Option Value 1">
  <option value="Option Value 2">
</datalist>
```
Your task is to create the `<datalist>` with three service options.
```
## Response
```html
<datalist id="services-data"><option value="Business Development"><option value="Digital Marketing"><option value="Web Development"></datalist>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<fieldset>
    ...
    <label for="services-list">...</label>
    <input list="services-data" ...>
    <!-- Add the datalist element below -->
</fieldset>
...```
## Placeholder
```html
<!-- Now try typing in the "Interested Services" input in the preview! -->
```
## Hint
```markdown
*   Start with `<datalist id="services-data">` to create the container with the required ID.
*   Add three `<option>` elements, each with a `value` attribute containing the service names.
*   Close the datalist with `</datalist>`. Note that `<option>` elements in a datalist don't need closing tags.
```

# Challenge 133
## Title
```text
Label Element for Message Textarea Field
```
## Description
The `<label>` element with `for="message"` creates the essential connection between the label text and a message input area, typically a `<textarea>` element where users can write longer content.

Following the provided code example, create a `<label>` element with the text 'Message:' and connect it to a message textarea field using the `for` attribute set to 'message'.
## Page
```markdown
# Step 133: The Label for the Message Box

Every good contact form has a multi-line text area for users to write their message. Let's add the label for it first.

**Code Example:**
```html
<label for="Input ID">Label Text</label>
```
Your task is to create the label for the "Message" textarea.
```
## Response
```html
<label for="message">Message:</label>
```
## Language
```text
Html
```
## Points
```
100
```
## Code```html
...
<fieldset>
    ...
    <datalist ...>...</datalist>
    <!-- Add the label for the message textarea below -->
</fieldset>
...
```
## Placeholder
```html
<!-- This label will connect to a `<textarea>` element. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="message"` to connect with a `<textarea>` that has `id="message"`.
*   Add the text 'Message:' between the opening and closing tags.
```

# Challenge 134
## Title
```text
Textarea Element with Multiple Attributes and Event Handlers
```
## Description
The `<textarea>` element is designed for multi-line text entry. The `rows` and `cols` attributes define the visible dimensions, `placeholder` provides guidance text, `wrap="soft"` controls text wrapping, and `readonly` prevents user editing. It can also include drag-and-drop event handlers like `ondragenter`, `ondragleave`, `ondragover`, and `ondrop`.

Following the provided code example, create a `<textarea>` element with `id="message"`, `name="message"`, `rows="4"`, `cols="50"`, `placeholder="Tell us about your project..."`, `wrap="soft"`, `readonly`, and four specified drag-and-drop event handlers for console logging.
## Page
```markdown
# Step 134: The Textarea Element

The `<textarea>` element creates a multi-line text input box. It has its own set of attributes for controlling size and behavior.

**Code Example:**
```html
<textarea id="ID Value" name="Name Value" rows="4" cols="50" placeholder="Placeholder Text" readonly></textarea>
```
Your task is to create a comprehensive `<textarea>` element with drag-and-drop events.
```## Response
```html
<textarea id="message" name="message" rows="4" cols="50" placeholder="Tell us about your project..." wrap="soft" readonly ondragenter="console.log('Drag entered textarea')" ondragleave="console.log('Drag left textarea')" ondragover="event.preventDefault(); console.log('Drag over textarea')" ondrop="event.preventDefault(); console.log('Dropped on textarea')"></textarea>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<fieldset>
    ...
    <datalist ...>...</datalist>
    <label for="message">Message:</label>
    <!-- Add the textarea element below -->
</fieldset>
...
```
## Placeholder
```html
<!-- The `readonly` attribute means you can't type in this box, but you can see its other features. -->
```
## Hint
```markdown
*   Start with `<textarea>` and add the basic attributes: `id`, `name`, `rows`, and `cols`.
*   Add the remaining attributes: `placeholder`, `wrap`, and `readonly`.
*   Include all four drag event handlers, remembering to use `event.preventDefault()` in the `ondragover` and `ondrop` handlers.
```

# Challenge 135
## Title
```text
Label Element for Budget Range Field
```
## Description
The `<label>` element with `for="budget"` creates the necessary connection between the label text and a budget input field, which could be a select dropdown, range slider, or text input.

Following the provided code example, create a `<label>` element with the text 'Budget Range:' and connect it to a budget input field using the `for` attribute set to 'budget'.
## Page
```markdown
# Step 135: The Label for a Budget Slider

Let's add a range slider to let users indicate their budget. First, we'll create its label.

**Code Example:**
```html
<label for="Input ID">Label Text</label>
```
Your task is to create the label for the "Budget Range" slider.
```
## Response
```html
<label for="budget">Budget Range:</label>
```## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<fieldset>
    ...
    <textarea ...>...</textarea>
    <!-- Add the label for the budget range below -->
</fieldset>
...
```
## Placeholder
```html
<!-- This label will connect to an `<input type="range">`. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="budget"` to connect with an input element that has `id="budget"`.
*   Add the text 'Budget Range:' between the opening and closing tags.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 136
## Title
```text
Range Input Element with Min, Max, and Step Attributes
```
## Description
The `<input type="range">` creates a slider control. This is perfect for selecting values like budgets where users choose from a range. The `min` and `max` attributes define the lowest and highest values, while the `step` attribute determines the increments between valid values.

Following the provided code example, create an `<input>` element with `type="range"`, `id` and `name` set to 'budget', `min` to '1000', `max` to '50000', and `step` to '1000'.
## Page
```markdown
# Step 136: The Range Slider Input

Now, let's create the slider itself using `<input type="range">`. We can set the minimum, maximum, and step values.

**Code Example:**
```html
<input type="range" id="Input ID" name="Input Name" min="0" max="100" step="10">
```
Your task is to create the budget range slider.
```
## Response
```html
<input type="range" id="budget" name="budget" min="1000" max="50000" step="1000">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    ...
    <textarea ...>...</textarea>
    <label for="budget">Budget Range:</label>
    <!-- Add the range input below -->
</fieldset>
...
```
## Placeholder
```html
<!-- Drag the slider in the preview to see it work. -->
```
## Hint
```markdown
*   Start with `<input type="range">` to create a slider control.
*   Add `id="budget"` and `name="budget"` to connect with the label.
*   Set `min="1000"`, `max="50000"`, and `step="1000"` for budget increments.
```

# Challenge 137
## Title
```text
Output Element for Range Input Display
```
## Description
The `<output>` element represents the result of a calculation or user action, commonly used to display the current value of a range input. The `for` attribute creates a relationship between the output and the form control that influences its value. The `id` attribute allows JavaScript to easily update the displayed value.

Following the provided code example, create an `<output>` element. Set the `for` attribute to 'budget', the `id` to 'budgetOutput', and display the initial value '$25,000' between the tags.
## Page
```markdown
# Step 137: Displaying the Slider's Value

A range slider doesn't show its current value by default. We can use an `<output>` element to display it, and later use JavaScript to update it as the slider moves.

**Code Example:**
```html
<output for="For Attribute Value" id="Element ID">Output Value</output>
```
Your task is to add an output element to show the selected budget.
```
## Response
```html
<output for="budget" id="budgetOutput">$25,000</output>
```
## Language
```text
Html
```
## Points```
200
```
## Code
```html
...
<fieldset>
    ...
    <label for="budget">...</label>
    <input type="range" id="budget" ...>
    <!-- Add the output element below -->
</fieldset>
...
```
## Placeholder
```html
<!-- The `for` attribute semantically links this output to the slider. -->
```
## Hint
```markdown
*   Start with `<output>` and include both `for` and `id` attributes.
*   Set `for="budget"` to connect with the range input and `id="budgetOutput"` for JavaScript access.
*   Place the text '$25,000' between the opening and closing `<output>` tags.
```

# Challenge 138
## Title
```text
Second Fieldset Element for Form Organization
```
## Description
Forms often require multiple `<fieldset>` elements to organize related groups of form controls into logical sections. Each `<fieldset>` creates its own visual boundary with a border and semantic grouping for accessibility.

Using the provided code example, create the opening tag for a second `<fieldset>` element to create another grouping section in your form.
## Page
```markdown
# Step 138: A Second Group of Fields

Large forms are easier to manage when broken into multiple fieldsets. Let's create a new one for contact preferences.

**Code Example:**
```html
<fieldset>
```
Your task is to add the opening tag for a second `<fieldset>`.
```
## Response
```html
<fieldset>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<form ...>
    <fieldset>
        <!-- First group of fields -->
    </fieldset>
    <!-- Add the opening tag for the second fieldset below -->
</form>
...
```
## Placeholder
```html
<!-- This will create another bordered box in your form. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'fieldset' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 139
## Title
```text
Legend Element for Second Fieldset Group```
## Description
Each `<fieldset>` should begin with a `<legend>` element that describes the purpose of that particular group. The `<legend>` must be the first child within each `<fieldset>` and provides a visible title integrated with the fieldset's border.

Following the provided code example, create a `<legend>` element containing the text 'Preferred Contact Method'.
## Page
```markdown
# Step 139: A Legend for the Second Fieldset

Our new fieldset also needs a `<legend>` to describe its purpose.

**Code Example:**
```html
<legend>Section Title</legend>
```
Your task is to add a legend for the "Preferred Contact Method" section.
```
## Response
```html
<legend>Preferred Contact Method</legend>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<form ...>
    <fieldset>...</fieldset>
    <fieldset>
        <!-- Add the legend tag below -->
    </fieldset>
</form>
...
```
## Placeholder
```html
<!-- A clear legend makes your form much easier to understand. -->
```
## Hint
```markdown
*   Start with the `<legend>` opening tag.
*   Add the text 'Preferred Contact Method' between the opening and closing tags.
*   Close with the `</legend>` tag.
```

# Challenge 140
## Title
```text
Radio Button Input with Event Handler
```
## Description
The `<input type="radio">` creates radio buttons that allow users to select one option from a group. Radio buttons with the same `name` attribute form a group where only one can be selected. Key attributes are `id`, `name`, `value`, and event handlers like `onmousewheel`.

Following the provided code example, create a radio button input with `type="radio"`, `id="contact-email"`, `name="contact-method"`, `value="email"`, and `onmousewheel="console.log('Radio wheel event')"`.
## Page
```markdown
# Step 140: Creating a Radio Button

Radio buttons are used when a user must choose only one option from a set. All radio buttons in a group share the same `name` attribute.

**Code Example:**
```html
<input type="radio" id="Element ID" name="Name Value" value="Radio Value">
```
Your task is to create the first radio button for the "Email" option.
```
## Response
```html
<input type="radio" id="contact-email" name="contact-method" value="email" onmousewheel="console.log('Radio wheel event')">
```## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    <legend>Preferred Contact Method</legend>
    <!-- Add the radio button input below -->
</fieldset>
...
```
## Placeholder
```html
<!-- We'll add a label for this in the next step to make it clickable. -->
```
## Hint
```markdown
*   Start with `<input type="radio">` to create a radio button.
*   Add `id="contact-email"`, `name="contact-method"`, and `value="email"` attributes.
*   Include `onmousewheel="console.log('Radio wheel event')"` for the event handler.
```

# Challenge 141
## Title
```text
Label Element for Radio Button Input
```
## Description
The `<label>` element is crucial for radio buttons. It creates clickable text that allows users to select options by clicking either the radio button or its label. The `for` attribute connects to the radio input's `id`.

Following the provided code example, create a `<label>` element with the text 'Email' and connect it to the radio button using the `for` attribute set to 'contact-email'.
## Page
```markdown
# Step 141: Labeling the Radio Button

A radio button's text should be in a `<label>` linked to it with the `for` attribute. This makes the text clickable, which is a huge usability improvement.

**Code Example:**
```html
<label for="Input ID">Label Text</label>
```
Your task is to add the label for the "Email" radio button.
```
## Response
```html
<label for="contact-email">Email</label>
```
## Language```text
Html
```
## Points
```
100
```
## Code
```html
...
<fieldset>
    <legend>...</legend>
    <input type="radio" id="contact-email" ...>
    <!-- Add the label for the radio button below -->
</fieldset>
...```
## Placeholder
```html
<!-- Now you can click the word "Email" to select the radio button. -->
```
## Hint
```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="contact-email"` to connect with the radio input that has `id="contact-email"`.
*   Add the text 'Email' between the opening and closing tags.
```

# Challenge 142
## Title
```text
Radio Button Input for Contact Method Selection
```
## Description
Radio buttons allow users to select one option from a group. They work together when they share the same `name` attribute. Each radio button needs a unique `id` for label association and a `value` that will be submitted with the form.

Following the provided code example, create a radio button input with `type="radio"`, `id` to 'contact-phone', `name` to 'contact-method', and `value` to 'phone'.
## Page
```markdown
# Step 142: The Second Radio Button

Let's add the second option to our contact method group. It needs the same `name` as the first one to ensure only one can be selected.

**Code Example:**
```html
<input type="radio" id="Input ID" name="Input Name" value="Input Value">
```
Your task is to create the radio button for the "Phone" option.
```
## Response
```html
<input type="radio" id="contact-phone" name="contact-method" value="phone">
```
## Language```text
Html
```
## Points
```
200
```
## Code
```html
...
<fieldset>
    <legend>...</legend>
    <input type="radio" id="contact-email" ...>
    <label for="contact-email">Email</label>
    <!-- Add the second radio button below -->
</fieldset>
...
```
## Placeholder
```html
<!-- Because this has the same `name`, selecting it will deselect the "Email" option. -->
```
## Hint
```markdown
*   Start with `<input type="radio">` to create a radio button.
*   Add `id="contact-phone"` for unique identification.
*   Include `name="contact-method"` and `value="phone"` attributes.
```

# Challenge 143
## Title
```text
Label Element for Second Radio Button Input
```
## Description
The `<label>` element for a radio button provides clickable text that allows users to select the option by clicking on the label itself. The `for` attribute connects the label to a specific radio button using the radio button's `id`.

Following the provided code example, create a `<label>` element with the text 'Phone' and connect it to the radio button using the `for` attribute set to 'contact-phone'.
## Page
```markdown
# Step 143: Labeling the Second Radio Button

Our second radio button also needs a clickable label.

**Code Example:**
```html
<label for="Input ID">Second Label Text</label>
```
Your task is to create the label for the "Phone" radio button.
```
## Response
```html
<label for="contact-phone">Phone</label>
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
...
<fieldset>
    ...
    <label for="contact-email">Email</label>
    <input type="radio" id="contact-phone" ...>
    <!-- Add the label for the phone radio button below -->
</fieldset>
...
```
## Placeholder
```html
<!-- A consistent user experience is important in forms. -->
```
## Hint```markdown
*   Start with `<label>` and include the `for` attribute.
*   Set `for="contact-phone"` to connect with the radio button that has `id="contact-phone"`.
*   Add the text 'Phone' between the opening and closing tags.
```

# Challenge 144
## Title
```text
Label Element with Embedded Checkbox Input
```
## Description
A `<label>` can contain form controls directly inside it, creating an implicit association without needing the `for` attribute. This is common with checkboxes (`<input type="checkbox">`). The `disabled` attribute makes the checkbox non-interactive. The `oncontextmenu` event handler responds to right-click actions.

Following the provided code example, create a `<label>` element that contains a checkbox input with `type="checkbox"`, `name="newsletter"`, the `disabled` attribute, and `oncontextmenu` set to "console.log('Context menu on checkbox'); return false;". Include the label text 'Subscribe to our newsletter (Currently disabled)' after the input.
## Page
```markdown
# Step 144: An Embedded Checkbox

Checkboxes are for options that can be turned on or off. A common pattern is to wrap the `<input type="checkbox">` and its text inside the `<label>` tag. This links them implicitly without needing `for` and `id`.

**Code Example:**
```html
<label>
  <input type="checkbox" name="Checkbox Name" disabled>
  Label Text
</label>
```
Your task is to create a disabled checkbox for a newsletter subscription.
```
## Response
```html
<label><input type="checkbox" name="newsletter" disabled oncontextmenu="console.log('Context menu on checkbox'); return false;">Subscribe to our newsletter (Currently disabled)</label>
```
## Language
```text
Html
```
## Points
```
200
```
## Code```html
...
<fieldset>
    <!-- Your fieldset content -->
</fieldset>
<!-- Add the label with embedded checkbox below the fieldset -->
```
## Placeholder
```html
<!-- Because it's `disabled`, you can't click this checkbox. -->
```
## Hint
```markdown
*   Start with `<label>` and embed the `<input>` inside it.
*   Set `type="checkbox"`, `name="newsletter"`, and add the `disabled` attribute.
*   Add the `oncontextmenu` event, followed by the label text, and then close the `</label>`.
```

# Challenge 145
## Title
```text
Progress Element with Value and Maximum
```
## Description
The `<progress>` element represents the completion progress of a task, displaying a visual progress bar. The `value` attribute specifies the current progress, while the `max` attribute defines the maximum value. Progress elements are used to show form completion status or file upload progress. The `id` attribute allows JavaScript to dynamically update the value.

Following the provided code example, create a `<progress>` element with `value` set to '0', `max` set to '100', and `id` set to 'form-progress'. Include the text '0%' as the fallback content.
## Page
```markdown
# Step 145: Showing Form Progress

The `<progress>` element is a great way to show the user how far they've gone in a task, like filling out a form.

**Code Example:**
```html
<progress value="70" max="100" id="Element ID">70%</progress>
```
Your task is to add a progress bar to your form, starting at 0.
```
## Response
```html
<progress value="0" max="100" id="form-progress">0%</progress>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<form ...>
    ...
    <!-- Add the progress element below, perhaps after the fieldsets -->
</form>
...
```
## Placeholder
```html
<!-- In a real app, you would use JavaScript to update the `value` of this progress bar. -->
```
## Hint
```markdown
*   Start with `<progress>` and include the `value`, `max`, and `id` attributes.
*   Set `value="0"`, `max="100"`, and `id="form-progress"`.
*   Add '0%' as the text content between the opening and closing tags.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 146
## Title
```text
Submit Button with Form Action and Window Event Handlers
```
## Description
The `<button type="submit">` creates a form submission button. The `formaction` attribute can override the form's default `action` URL. Window event handlers like `onafterprint`, `onbeforeprint`, `onhashchange`, etc., respond to browser-level events rather than element-specific interactions.

Following the provided code example, create a `<button>` element with `type="submit"`, `formaction` set to '/submit-contact', and seven specified window event handlers for console logging. The button text should be: 'Send Message'.
## Page
```markdown
# Step 146: The Submit Button

Every form needs a way to be submitted. The `<button type="submit">` is the standard way to do this. We can add many event handlers to it, including some that listen for browser-level events.

**Code Example:**
```html
<button type="submit" formaction="/different-url.php">Button Text</button>
```
Your task is to create a submit button with several window event handlers.
```
## Response
```html
<button type="submit" formaction="/submit-contact" onafterprint="console.log('After print')" onbeforeprint="console.log('Before print')" onhashchange="console.log('Hash changed')" onpagehide="console.log('Page hide')" onpageshow="console.log('Page show')" onpopstate="console.log('Pop state')" onstorage="console.log('Storage changed')">Send Message</button>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<form ...>
    ...
    <progress ...>...</progress>
    <!-- Add the submit button below -->
</form>
...
```
## Placeholder
```html
<!-- The `formaction` attribute on this button will override the one on the main `<form>` tag. -->
```
## Hint
```markdown
*   Start with `<button type="submit">` and add `formaction="/submit-contact"`.
*   Add all seven specified window event handlers.
*   Include appropriate `console.log` messages and add 'Send Message' as the button text.
```

# Challenge 147
## Title
```text
Reset Button for Clearing Form Data
```
## Description
A `<button type="reset">` creates a button that automatically clears all entered data in a form and returns fields to their default values, without needing any JavaScript.

Following the provided code example, create a `<button>` element with `type="reset"` and the text 'Clear Form'.
## Page
```markdown
# Step 147: The Reset Button

Forms can also have a reset button, which clears all the user's input. This is done with `<button type="reset">`.

**Code Example:**
```html
<button type="reset">Button Text</button>
```
Your task is to create a reset button for your form.
```
## Response
```html
<button type="reset">Clear Form</button>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<form ...>
    ...
    <button type="submit" ...>Send Message</button>
    <!-- Add the reset button below -->
</form>
...
```
## Placeholder
```html
<!-- Type something in the form fields and click this button to see it work. -->
```
## Hint
```markdown
*   Start with the `<button>` opening tag and include the `type` attribute.
*   Set `type="reset"` to make the button clear form data.
*   Add the text 'Clear Form' between `<button>` and `</button>` tags.
```

# Challenge 148
## Title
```text
Section Element with CSS Class
```
## Description
The `<section>` element represents a distinct section of content. It's a semantic HTML5 element that helps organize content into logical blocks. The `class` attribute allows you to assign CSS classes for styling. The class `"tech-demo"` suggests this section will contain technology demonstration content.

Following the provided code example, create a `<section>` element opening tag with a `class` attribute set to 'tech-demo'.
## Page
```markdown
# Step 148: A New Section for Tech Demos

Let's create one final section on our page to demonstrate a few more interesting HTML tags.

**Code Example:**
```html
<section class="Class Name">
```
Your task is to add the opening tag for the "tech-demo" section.
```
## Response```html
<section class="tech-demo">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<main>
    ...
    <search>...</search>
    <!-- Add the opening section tag below -->
</main>
...
```## Placeholder
```html
<!-- We'll put some advanced and interesting elements in this section. -->
```
## Hint
```markdown
*   Start with the `<section>` opening tag.
*   Add the `class` attribute inside the opening tag.
*   Set `class="tech-demo"` to assign the CSS class name.
```

# Challenge 149
## Title
```text
Heading Level 4 Element
```
## Description
Proper heading structure is crucial for accessibility and SEO. The `<h4>` element provides semantic meaning that indicates this is a subsection heading.

Following the provided code example, create an `<h4>` heading element containing the text 'Our Expertise'.
## Page
```markdown
# Step 149: A Heading for the Tech Demo Section

Our new section needs a title. Let's use an `<h4>`.

**Code Example:**
```html
<h4>Heading Text</h4>
```
Your task is to add a heading for the "Our Expertise" section.
```
## Response
```html
<h4>Our Expertise</h4>
```
## Language
```text
Html
```
## Points
```
100```
## Code
```html
...
<main>
    ...
    <section class="tech-demo">
        <!-- Add the h4 heading below -->
    </section>
</main>
...
```## Placeholder
```html
<!-- A clear heading introduces the content that follows. -->
```
## Hint
```markdown
*   Start with the `<h4>` opening tag.
*   Add the text 'Our Expertise' between the opening and closing tags.
*   Close with the `</h4>` tag.
```

# Challenge 150
## Title
```text
Div Element with CSS Grid Class
```
## Description
The `<div>` element is a generic container that groups content. When combined with CSS classes, divs become powerful layout tools. Class names like 'expertise-grid' typically indicate the container will use CSS Grid to arrange child elements in rows and columns.

Following the provided code example, create a `<div>` element with the class attribute set to 'expertise-grid'.
## Page
```markdown
# Step 150: A Grid Container for Expertise Items

We'll display our "expertise" items in a grid. We need a container `<div>` with a specific class to apply the grid styles.

**Code Example:**
```html
<div class="Class Name">
```
Your task is to add the opening `<div>` for the expertise grid.
```
## Response
```html
<div class="expertise-grid">
```
## Language```text
Html
```
## Points
```
100
```
## Code
```html
...
<section class="tech-demo">
    <h4>Our Expertise</h4>
    <!-- Add the opening div tag below -->
</section>
...
```
## Placeholder
```html
<!-- The CSS for `.expertise-grid` will arrange all the `<div>`s inside it into a grid. -->
```
## Hint
```markdown
*   Start with the `<div>` opening tag.
*   Add the `class` attribute inside the opening tag.
*   Set `class="expertise-grid"` to apply grid-based styling.
```

# Challenge 151
## Title
```text
Div Element for Layout Structure
```
## Description
The `<div>` element is a generic container used to group content and create layout structures. When nested inside a parent container like `<div class="expertise-grid">`, the child div often serves as an individual item within that larger layout.

Using the provided code example, create a `<div>` opening tag with no attributes or content inside.
## Page
```markdown
# Step 151: The First Grid Item Container

Inside our grid container, each item will also be a `<div>`. This is a common pattern for creating card-based layouts.

**Code Example:**
```html
<div>
```
Your task is to add the opening `<div>` for the first item in the grid.
```
## Response
```html
<div>
```
## Language```text
Html
```
## Points
```
100
```
## Code
```html
...
<section class="tech-demo">
    <h4>...</h4>
    <div class="expertise-grid">
        <!-- Add the opening div tag below -->
    </div>
</section>
...
```
## Placeholder
```html
<!-- This `div` is a "grid item". -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'div' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 152
## Title
```text
Heading Level 5
```
## Description
The `<h5>` element creates a fifth-level heading, representing a sub-subsection or minor heading. Screen readers use heading levels to create a document outline, allowing users to navigate quickly.

Following the provided code example, create an `<h5>` heading element containing the text: 'Data Representation'.
## Page
```markdown
# Step 152: A Title for the First Grid Item

Each item in our grid needs a title. An `<h5>` is a good level for a title within a small card or item.

**Code Example:**
```html
<h5>Section Title</h5>
```
Your task is to add the title for the "Data Representation" item.
```
## Response
```html
<h5>Data Representation</h5>
```
## Language
```text
Html```
## Points
```
100
```
## Code
```html
...
<div class="expertise-grid">
    <div>
        <!-- Add the h5 heading below -->
    </div>
</div>
...
```
## Placeholder
```html
<!-- This heading describes the content of this specific grid item. -->
```
## Hint
```markdown
*   Start with the `<h5>` opening tag.
*   Add the text 'Data Representation' between the opening and closing tags.
*   Close with the `</h5>` tag.
```

# Challenge 153
## Title
```text
Another Paragraph Element
```
## Description
The `<p>` element represents a paragraph of text, creating a semantic block-level container. It's essential for readability and document structure, automatically adding spacing above and below.

Using the provided code example, create the opening tag for a paragraph element. Write only the `<p>` opening tag.
## Page
```markdown
# Step 153: A Paragraph for the First Grid Item

Let's add some descriptive text to our first grid item.

**Code Example:**
```html
<p>
```
Your task is to add the opening `<p>` tag.
```
## Response
```html
<p>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="expertise-grid">
    <div>
        <h5>Data Representation</h5>
        <!-- Add the opening p tag below -->
    </div>
</div>
...
```
## Placeholder```html
<!-- We'll add some interesting formatted text inside this paragraph. -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'p' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 154
## Title```text
Span Element with Superscript Text and Line Break
```
## Description
The `<span>` element is a generic inline container. The `<sup>` element creates superscript text that appears raised above the normal text baseline, used for exponents or footnotes. The `<br>` element creates a line break.

Following the provided code example, create a `<span>` element containing the text "Mathematical formula: E=mc" followed by a superscript '2' using `<sup>`. Then add a line break `<br>` after the closing `</span>` tag.
## Page
```markdown
# Step 154: Superscript Text for Formulas

To write mathematical formulas like E=mc², you need superscript text. The `<sup>` tag is used for this. We'll also add a `<br>` tag to create a line break.

**Code Example:**
```html
<span>Text with <sup>Superscript</sup></span><br>
```
Your task is to write out the formula for mass-energy equivalence.
```
## Response
```html
<span>Mathematical formula: E=mc<sup>2</sup></span><br>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div>
    <h5>...</h5>
    <p>
        <!-- Add the span with superscript below -->
    </p>
</div>
...
```
## Placeholder
```html
<!-- `sup` is for superscript, and `sub` is for subscript. -->
```
## Hint
```markdown
*   Start with `<span>` and add the text 'Mathematical formula: E=mc'.
*   Use `<sup>2</sup>` to make the '2' appear as a superscript.
*   Close the span with `</span>` and add `<br>` for a line break.
```

# Challenge 155
## Title
```text
Span Element with Subscript and Line Break
```
## Description
The `<span>` element is a generic inline container. The `<sub>` element creates subscript text that appears below the baseline, used in chemical formulas or mathematical expressions. The `<br>` element creates a line break.

Following the provided code example, create a `<span>` element containing the text "Chemical formula: O" followed by the number '2' in subscript `<sub>` format. Then add a line break `<br>` element.
## Page
```markdown
# Step 155: Subscript Text for Formulas

Now let's try subscript text, which appears slightly below the normal line. The `<sub>` tag is perfect for chemical formulas like O₂.

**Code Example:**
```html
<span>Text with <sub>Subscript</sub></span><br>
```
Your task is to write out the chemical formula for an oxygen molecule.
```
## Response
```html
<span>Chemical formula: O<sub>2</sub></span><br>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<p>
    <span>...<sup>...</sup></span><br>
    <!-- Add the span with subscript below -->
</p>
...
```
## Placeholder
```html
<!-- Essential for writing scientific notation correctly in HTML. -->
```
## Hint
```markdown
*   Start with `<span>` and add the text "Chemical formula: O".
*   Use `<sub>2</sub>` to make the number '2' appear as subscript.
*   Close the span with `</span>` and add `<br>` for a line break.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 156
## Title
```text
Span Element with Sample Code and Line Break
```
## Description
The `<samp>` element represents sample output from a computer program, typically displaying it in a monospace font. This is commonly used when displaying code examples inline with explanatory text.

Following the provided code example, create a `<span>` element containing the text "Computer code: ", followed by a `<samp>` element with the JavaScript code: `console.log('Hello World');`. Then, add a `<br>` element for a line break.
## Page
```markdown
# Step 156: Showing Sample Output

To display sample output from a computer program, you should use the semantic `<samp>` tag. It's usually rendered in a monospace font.

**Code Example:**
```html
<span>Text: <samp>Sample Code</samp></span><br>
```
Your task is to show a sample line of JavaScript code.
```
## Response
```html
<span>Computer code: <samp>console.log('Hello World');</samp></span><br>
```
## Language
```text
Html
```
## Points
```
200
```
## Code```html
...
<p>
    ...<br>
    <span>...<sub>...</sub></span><br>
    <!-- Add the span with sample code below -->
</p>
...
```
## Placeholder
```html
<!-- This is semantically different from `<code>` (code fragment) or `<kbd>` (user input). -->```
## Hint
```markdown
*   Start with `<span>` and add the text: "Computer code: "
*   Add `<samp>` tags around the JavaScript code: `console.log('Hello World');`
*   Close the span element with `</span>` and add `<br>` for a line break.
```

# Challenge 157
## Title
```text
Variable Element in Mathematical Expression
```
## Description
The `<var>` element is a semantic tag designed to represent variables in mathematical expressions or programming code. It typically renders in italics, but its primary value is its semantic meaning, which helps screen readers and search engines understand the content.

Following the provided code example, create a `<span>` element containing the text "Variable: ", followed by a `<var>` element with the variable name "x", then continue with " = 10". After the closing `</span>` tag, add a `<br>` element.
## Page
```markdown
# Step 157: Marking Up a Variable

When you are writing about a variable in a mathematical or programming context, you should wrap it in a `<var>` tag.

**Code Example:**
```html
<span>Variable: <var>Variable Name</var> = Value</span><br>
```
Your task is to show a simple variable assignment.
```
## Response
```html
<span>Variable: <var>x</var> = 10</span><br>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<p>
    ...<br>
    <span>...<samp>...</samp></span><br>
    <!-- Add the span with a variable below -->
</p>
...
```
## Placeholder
```html
<!-- The `<var>` tag makes it clear that 'x' is a placeholder or variable. -->
```
## Hint
```markdown
*   Start with `<span>` and include the text "Variable: " before the `<var>` element.
*   Use `<var>x</var>` to semantically mark "x" as a variable.
*   Complete the span with " = 10" and close with `</span>`. Finally, add `<br>` for the line break.
```

# Challenge 158
## Title
```text
Keyboard Input Element for Shortcuts
```
## Description
The `<kbd>` element is a semantic tag designed to represent keyboard input, including individual keys, key combinations, and shortcuts. It typically renders in a monospace font and helps screen readers announce keyboard shortcuts appropriately.

Following the provided code example, create a `<span>` element containing the text "Keyboard shortcut: ", followed by a `<kbd>` element with the key combination: **Ctrl+C**.
## Page
```markdown
# Step 158: Showing Keyboard Shortcuts

We've seen the `<kbd>` tag before. It's the correct way to show keyboard commands or shortcuts that the user should press.

**Code Example:**
```html
<span>Keyboard Shortcut: <kbd>Key Combination</kbd></span>
```
Your task is to show the keyboard shortcut for "Copy".
```
## Response
```html
<span>Keyboard Shortcut: <kbd>Ctrl+C</kbd></span>
```## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<p>
    ...<br>
    <span>...<var>...</var></span><br>
    <!-- Add the span with keyboard shortcut below -->
</p>
...
```
## Placeholder
```html
<!-- The default styling for `<kbd>` makes it look like a key on a keyboard. -->
```
## Hint
```markdown
*   Start with `<span>` and include the text "Keyboard shortcut: " before the `<kbd>` element.
*   Use `<kbd>Ctrl+C</kbd>` to semantically mark **Ctrl+C** as a keyboard input.
*   Close the span with `</span>` after the `<kbd>` element.
```

# Challenge 159
## Title
```text
Nested Div Element Inside Tech Grid Container
```
## Description
Nested `<div>` elements are fundamental to creating complex layouts. When you nest a div inside a parent container like `<div class="expertise-grid">`, the child div can inherit styling while also having its own unique styles. This parent-child relationship is crucial for CSS grid and flexbox layouts.

Using the provided code example, create a simple `<div>` opening tag without any attributes or closing tag. This will be the second div element nested inside your `<div class="expertise-grid">` container.
## Page
```markdown
# Step 159: The Second Grid Item Container

Let's start the second item in our expertise grid. It will be another `<div>` placed directly inside the `.expertise-grid` container.

**Code Example:**
```html
<div>
```
Your task is to add the opening `<div>` for the second item in the grid.
```
## Response
```html
<div>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="expertise-grid">
    <div>
        <!-- First grid item content -->
    </div>
    <!-- Add the opening div for the second grid item below -->
</div>
...
```
## Placeholder
```html
<!-- This `div` will be the second "card" in our grid. -->
```
## Hint
```markdown
*   Simply type `<div>` - this is just a basic div opening tag with no attributes.
*   Remember this is the opening tag only.
*   No class attribute is needed for this particular div element.
```

# Challenge 160
## Title
```text
Level 5 Heading for Grid Item Content
```
## Description
In grid-based layouts, `<h5>` elements are commonly used as titles for individual grid items. They provide semantic meaning that helps screen readers understand the content hierarchy while being visually sized appropriately for smaller content sections.

Following the provided code example, create an `<h5>` heading element with the text: "Global Communication".
## Page
```markdown
# Step 160: A Title for the Second Grid Item

Our second grid item also needs a title. We'll use an `<h5>` again for consistency.

**Code Example:**
```html
<h5>Heading Text</h5>
```
Your task is to add the title for the "Global Communication" item.
```
## Response
```html
<h5>Global Communication</h5>
```## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="expertise-grid">
    <div>...</div>
    <div>
        <!-- Add the h5 heading below -->
    </div>
</div>
...
```
## Placeholder
```html
<!-- A consistent heading structure makes your layout easy to scan. -->
```
## Hint
```markdown
*   Start with the opening `<h5>` tag.
*   Add the text "Global Communication" between the opening and closing tags.
*   Close with the `</h5>` tag to complete the heading element.
```

# Challenge 161
## Title
```text
Paragraph Element Following Heading Content
```
## Description
The `<p>` element is the fundamental building block for text content in HTML. When following a heading like `<h5>`, it creates a natural hierarchy where the heading introduces a topic and the paragraph provides supporting details.

Using the provided code example, create an opening `<p>` tag.
## Page
```markdown
# Step 161: A Paragraph for the Second Grid Item

Now for the descriptive text for our second grid item.

**Code Example:**
```html
<p>
```
Your task is to add the opening `<p>` tag.
```
## Response
```html
<p>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="expertise-grid">
    ...
    <div>
        <h5>Global Communication</h5>
        <!-- Add the opening p tag below -->
    </div>
</div>
...
```
## Placeholder
```html
<!-- We'll put some text with different writing directions in here. -->
```
## Hint
```markdown
*   Simply type `<p>` - this is just the opening tag for a paragraph element.
*   Remember this is only the opening tag.
*   No attributes are needed for this basic paragraph opening tag.
```

# Challenge 162
## Title
```text
BDI Element for Bidirectional Text Isolation
```
## Description
The `<bdi>` (Bidirectional Isolate) element isolates a span of text that might be formatted in a different direction (e.g., right-to-left like Arabic) from the text around it. This prevents bidirectional text algorithm issues. It's useful when displaying user-generated content or names from different languages.

Following the provided code example, create a `<span>` element that contains a `<bdi>` element with the text "مرحبا بكم" inside. After the closing `</bdi>` tag, include the text: " (Arabic: Welcome)". After the closing `</span>` tag, add a `<br>` element.
## Page
```markdown
# Step 162: Handling Different Text Directions

When you mix languages with different writing directions (like English and Arabic), things can get messy. The `<bdi>` (Bidirectional Isolate) tag helps the browser render it correctly by isolating the foreign text.

**Code Example:**
```html
<span><bdi>Text Content</bdi> (Language: Description)</span><br>
```
Your task is to display a welcome message in Arabic.
```
## Response
```html
<span><bdi>مرحبا بكم</bdi> (Arabic: Welcome)</span><br>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<div>
    <h5>...</h5>
    <p>
        <!-- Add the span with bdi element below -->
    </p>
</div>
...
```
## Placeholder
```html
<!-- `<bdi>` is important for internationalization and displaying user-generated content safely. -->
```
## Hint
```markdown
*   Start with a `<span>`.
*   Inside, create a `<bdi>` element containing "مرحبا بكم". Then, add " (Arabic: Welcome)" after the closing `</bdi>`.
*   Close the span with `</span>`. Then, add a `<br>` element.
```

# Challenge 163
## Title
```text
BDO Element for Bidirectional Text Override```
## Description
The `<bdo>` (Bidirectional Override) element provides explicit control over text direction, forcing text to be displayed in a specific direction. The `dir` attribute is required and accepts "ltr" (left-to-right) or "rtl" (right-to-left), which reverses the character order.

Following the provided code example, create a `<bdo>` element with the text "This text is right-to-left" and the `dir` attribute set to `"rtl"`. After the closing `</bdo>` tag, add a `<br>` element.
## Page
```markdown
# Step 163: Overriding Text Direction

Unlike `<bdi>`, the `<bdo>` (Bidirectional Override) tag *forces* a specific text direction. Using `dir="rtl"` will make left-to-right text render backwards.

**Code Example:**
```html
<bdo dir="Text Direction">Text Content</bdo><br>
```
Your task is to demonstrate the `<bdo>` tag's override effect.
```
## Response
```html
<bdo dir="rtl">This text is right-to-left</bdo><br>
```## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<p>
    <span><bdi>...</bdi>...</span><br>
    <!-- Add the bdo element below -->
</p>
...
```
## Placeholder
```html
<!-- Watch the text in the preview render in reverse! -->
```
## Hint
```markdown
*   Start with `<bdo>` and include the required `dir` attribute.
*   Set `dir="rtl"` to force right-to-left display.
*   Add the text: "This text is right-to-left". Then, close with `</bdo><br>`.
```

# Challenge 164
## Title
```text
Ruby Annotations for East Asian Typography
```
## Description
The `<ruby>` element shows pronunciation guides for East Asian characters. It's essential for displaying furigana in Japanese or pinyin in Chinese. The system uses `<ruby>` as the container, `<rt>` (ruby text) for the annotation, and `<rp>` (ruby parentheses) for fallback parentheses in browsers that don't support ruby.

Following the provided code example, create a `<ruby>` annotation for the Japanese character '漢' with the pronunciation 'kan'. Inside the `<ruby>` element, place '漢', followed by `<rp>(</rp><rt>kan</rt><rp>)</rp>`.
## Page
```markdown
# Step 164: Adding Ruby Annotations

Ruby annotations are used to show pronunciation of East Asian characters. They appear as small text above the character. The structure involves `<ruby>`, `<rt>`, and `<rp>` tags.

**Code Example:**
```html
<ruby>Base Character <rp>(</rp><rt>Pronunciation</rt><rp>)</rp></ruby>
```
Your task is to create a ruby annotation for a Japanese Kanji character.
```
## Response
```html
<ruby>漢 <rp>(</rp><rt>kan</rt><rp>)</rp></ruby>
```
## Language
```text
Html```
## Points
```
350
```
## Code
```html
...
<p>
    ...<br>
    <bdo ...>...</bdo><br>
    <!-- Add the ruby element below -->
</p>
...
```
## Placeholder
```html
<!-- In supporting browsers, you'll see "kan" above the character. In others, you'll see "(kan)". -->
```
## Hint
```markdown
*   Start with `<ruby>` then add the base character '漢' followed by a space.
*   Add the ruby annotation markup: `<rp>(</rp><rt>kan</rt><rp>)</rp>`.
*   Close the ruby element: `</ruby>`.
```

# Challenge 165
## Title
```text
Third Nested Div Element
```
## Description
You're adding a third nested `<div>` element inside the `<div class="expertise-grid">` container. Nested divs are fundamental for building organized, hierarchical document structures where each div serves a specific purpose.

Using the provided code example, create a simple `<div>` opening tag without any attributes or closing tag.
## Page
```markdown
# Step 165: The Third Grid Item Container

Let's start the third and final item for our expertise grid.

**Code Example:**
```html
<div>
```
Your task is to add the opening `<div>` for the third item in the grid.
```
## Response
```html
<div>
```
## Language
```text
Html
```
## Points
```
100```
## Code
```html
...
<div class="expertise-grid">
    <div>...</div>
    <div>...</div>
    <!-- Add the opening div for the third grid item below -->
</div>
...
```
## Placeholder
```html
<!-- This will be the third and final card in our grid. -->
```
## Hint```markdown
*   Simply type `<div>`.
*   This is just the opening tag.
*   No class or other attributes are needed.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 166
## Title
```text
H5 Heading Element for Section Title
```
## Description
In grid-based layouts, `<h5>` elements are commonly used as titles for individual grid items. They provide semantic meaning that helps screen readers understand the content hierarchy while being visually sized appropriately for smaller content sections.

Following the provided code example, create an `<h5>` heading element containing the text: "Interactive Solutions".
## Page
```markdown
# Step 166: A Title for the Third Grid Item

Our third grid item needs its title. We will use an `<h5>` once more.

**Code Example:**
```html
<h5>Heading Text</h5>
```
Your task is to add the title for the "Interactive Solutions" item.
```## Response
```html
<h5>Interactive Solutions</h5>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="expertise-grid">
    ...
    <div>
        <!-- Add the h5 heading below -->
    </div>
</div>
...
```
## Placeholder
```html
<!-- This heading introduces our final grid item's content. -->
```
## Hint
```markdown
*   Start with the opening `<h5>` tag.
*   Add the text 'Interactive Solutions' between the opening and closing tags.
*   Close with the `</h5>` tag.
```

# Challenge 167
## Title
```text
Dialog Element with Popover Functionality
```
## Description
The `<dialog>` element represents a dialog box. When combined with the `popover="manual"` attribute, it creates interactive overlays that must be explicitly opened and closed via JavaScript or popover API methods. The dialog contains content and a close button that uses `onclick` events and popover attributes like `popovertarget` and `popovertargetaction`.

Following the provided code example, create a `<dialog>` element with `id="demo-dialog"` and `popover="manual"`. Inside, add a `<p>` with the text "This is a dialog box!", followed by a `<button>` with `onclick="document.getElementById('demo-dialog').close()"`, `popovertarget="demo-dialog"`, and `popovertargetaction="hide"`. The button text should be 'Close'.
## Page
```markdown
# Step 167: Creating a Dialog Box

The `<dialog>` element lets you create pop-up dialogs, modals, and windows. We'll use it with the modern `popover` API for better control.

**Code Example:**
```html
<dialog id="Dialog ID" popover="manual">
  <p>Dialog Content Here</p>
  <button popovertarget="Dialog ID" popovertargetaction="hide">Close</button>
</dialog>
```
Your task is to create the dialog box element. It will be hidden until we create a button to open it.```
## Response
```html
<dialog id="demo-dialog" popover="manual"><p>This is a dialog box!</p><button onclick="document.getElementById('demo-dialog').close()" popovertarget="demo-dialog" popovertargetaction="hide">Close</button></dialog>
```
## Language
```text
Html```
## Points
```
350
```
## Code
```html
...
<div>
    <h5>Interactive Solutions</h5>
    <!-- Add the dialog element below -->
</div>
...
```
## Placeholder
```html
<!-- This content is hidden by default. We need another element to trigger it. -->
```
## Hint
```markdown
*   Start with `<dialog id="demo-dialog" popover="manual">`.
*   Add `<p>This is a dialog box!</p>` for the content.
*   Create the close `<button>` with all three attributes: `onclick`, `popovertarget`, and `popovertargetaction`.
```

# Challenge 168
## Title
```text
Dialog Trigger Button with Popover Controls
```
## Description
To open a `<dialog>`, you need a trigger button. This button uses `showModal()` to display the dialog as a modal overlay. It implements dual interaction patterns: `onclick` for direct JavaScript control and `popovertarget` / `popovertargetaction` which leverage the declarative Popover API for enhanced accessibility.

Following the provided code example, create a `<button>` element with `onclick` set to `"document.getElementById('demo-dialog').showModal()"`, `popovertarget` to `"demo-dialog"`, and `popovertargetaction` to `"show"`. The button text should be: 'Open Dialog'.
## Page
```markdown
# Step 168: A Button to Open the Dialog

Now we need a button that will open the dialog we just created. This button will target the dialog's `id`.

**Code Example:**
```html
<button onclick="document.getElementById('Target ID').showModal()" popovertarget="Target ID" popovertargetaction="show">Button Text</button>
```
Your task is to create the button that opens our dialog.
```
## Response
```html
<button onclick="document.getElementById('demo-dialog').showModal()" popovertarget="demo-dialog" popovertargetaction="show">Open Dialog</button>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<div>
    <h5>Interactive Solutions</h5>
    <dialog ...>...</dialog>
    <!-- Add the button to open the dialog below -->
</div>
...
```
## Placeholder
```html
<!-- Click this button in the preview to see your dialog appear! -->
```
## Hint
```markdown
*   Start with `<button>` and add the `onclick` attribute with the `showModal()` method.
*   Add the popover attributes: `popovertarget="demo-dialog"` and `popovertargetaction="show"`.
*   Include the button text 'Open Dialog' between the opening and closing tags.
```

# Challenge 169
## Title
```text
Map Element for Image Map Creation
```
## Description
The `<map>` element defines an image map, which allows you to create clickable areas within a single image. The `name` attribute is essential as it creates the connection between the map and an associated image through the image's `usemap` attribute.

Following the provided code example, create a `<map>` element with the `name` attribute set to `"office-map"`.
## Page
```markdown
# Step 169: Creating an Image Map

An image map lets you define clickable areas on an image. First, you create the `<map>` element container and give it a `name`.

**Code Example:**
```html
<map name="Map Name">
```
Your task is to create the opening tag for our image map.
```
## Response
```html
<map name="office-map">
```
## Language
```text
Html
```## Points
```
200
```
## Code
```html
...
<div class="expertise-grid">
    ...
    <div>...</div>
    <!-- Add the opening map tag below -->
</div>
...
```
## Placeholder
```html
<!-- We'll define the clickable areas and link an image to this map next. -->
```
## Hint
```markdown
*   Start with the opening `<map>` tag.
*   Add the `name` attribute with the value `"office-map"`.
*   Remember this is just the opening tag.
```

# Challenge 170
## Title
```text
Area Element for Image Map Hotspots
```
## Description
The `<area>` element defines clickable regions (hotspots) within an image map. The `shape` attribute determines the clickable region type, while `coords` provides the pixel coordinates that define its boundaries. For `shape="rect"`, `coords="x1,y1,x2,y2"` represents the top-left and bottom-right corners. The `href` attribute specifies the destination URL, while `alt` provides accessibility text.

Following the provided code example, create an `<area>` element with `shape="rect"`, `coords="0,0,100,50"`, `href="https://www.google.com/maps"`, and `alt="Office Location"`.
## Page
```markdown
# Step 170: Defining a Clickable Area

Inside the `<map>`, you define each clickable hotspot with an `<area>` tag. You need to specify its shape, coordinates, link, and alt text.

**Code Example:**
```html
<area shape="rect" coords="x1,y1,x2,y2" href="Link URL" alt="Alternative Text">
```
Your task is to define a rectangular clickable area in the top-left corner of the image.
```
## Response
```html
<area shape="rect" coords="0,0,100,50" href="https://www.google.com/maps" alt="Office Location">
```
## Language
```text
Html
```
## Points
```
350```
## Code
```html
...
<div class="expertise-grid">
    ...
    <map name="office-map">
        <!-- Add the area element below -->
    </map>
</div>
...
```
## Placeholder
```html
<!-- This defines an invisible clickable rectangle from pixel (0,0) to (100,50). -->
```
## Hint
```markdown
*   Start with `<area>` and add the `shape="rect"` attribute.
*   Add `coords="0,0,100,50"` and `href="https://www.google.com/maps"`.
*   Include the `alt="Office Location"` attribute for accessibility and close the self-closing tag.
```

# Challenge 171
## Title
```text
Image Element with Usemap Connection
```
## Description
The `<img usemap="...">` attribute completes your image map system by connecting the visual image to the clickable areas you defined in your `<map>` element. The `usemap` attribute references the map's `name` with a hash symbol (`#`) prefix.

Following the provided code example, create an `<img>` element with `src="office-map.png"`, `usemap="#office-map"`, and `alt="Interactive office map"`.
## Page
```markdown
# Step 171: Connecting the Image to the Map

Finally, to make the image map work, you need an `<img>` tag that uses it. The `usemap` attribute on the image must match the `name` of the map (prefixed with a `#`).

**Code Example:**
```html
<img src="Image Source" usemap="#Map Name" alt="Image Description">
```
Your task is to display the image and connect it to your `office-map`.
```
## Response
```html
<img src="office-map.png" usemap="#office-map" alt="Interactive office map">
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<div class="expertise-grid">
    ...
    <map name="office-map">
        <area ...>
    </map>
    <!-- Add the image element below the map -->
</div>
...
```
## Placeholder
```html
<!-- Now, if you click the top-left of the image (if it were visible), it would be a link. -->```
## Hint
```markdown
*   Start with `<img>` and add the `src="office-map.png"` attribute.
*   Add `usemap="#office-map"` to connect with your map element - remember the hash symbol prefix.
*   Include `alt="Interactive office map"` for accessibility and close the self-closing tag.
```

# Challenge 172
## Title
```text
Line Break Element for Content Spacing
```
## Description
Adding a line break after an element helps separate it from subsequent content, ensuring clean visual hierarchy. The `<br>` element requires no attributes and no closing tag, making it one of the simplest HTML elements for controlling layout.

Using the provided code example, create a simple `<br>` element to add a line break.
## Page
```markdown
# Step 172: Adding a Line Break

The `<br>` tag inserts a single line break. It's a simple way to force content onto the next line without starting a new paragraph.

**Code Example:**
```html
<br>
```
Your task is to add a line break for spacing.
```
## Response
```html
<br>
```## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="expertise-grid">
    ...
    <img usemap="#office-map" ...>
    <!-- Add the line break element below -->
</div>
...
```
## Placeholder
```html
<!-- A simple but useful tag for controlling text flow. -->
```
## Hint
```markdown
*   Type the opening `<br>` tag.
*   The `<br>` element is self-closing and needs no attributes.
*   No closing tag is required.
```

# Challenge 173
## Title
```text
Word Break Opportunity Element```
## Description
The `<wbr>` (Word Break Opportunity) element represents a position within text where the browser may optionally break a line if needed. Unlike `<br>` which forces a line break, `<wbr>` suggests where a break could occur if the text doesn't fit, providing intelligent text wrapping control.

Using the provided code example, create a simple `<wbr>` element to insert a word break opportunity.
## Page
```markdown
# Step 173: Suggesting a Word Break

Sometimes you have a very long word or URL that might break your layout on small screens. The `<wbr>` tag suggests a place where the browser *can* break the word if it needs to.

**Code Example:**
```html
<wbr>
```
Your task is to add a `<wbr>` tag. You would place it inside a long word, like `Super<wbr>califragilistic<wbr>expialidocious`.
```
## Response
```html
<wbr>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<div class="expertise-grid">
    ...
    <img ...><br>
    <!-- Add the wbr element below (in a real scenario, it would be inside text) -->
</div>
...
```
## Placeholder
```html
<!-- This tag is invisible unless the browser needs to use it to wrap a long line of text. -->
```
## Hint
```markdown
*   Type the opening `<wbr>` tag.
*   The `<wbr>` element is self-closing and needs no attributes.
*   No closing tag is required.
```

# Challenge 174
## Title
```text
Pre and Code Elements for JavaScript Display
```
## Description
The `<pre>` element preserves whitespace and line breaks exactly as written, making it perfect for displaying code snippets. The `<code>` element semantically identifies its content as computer code. Combined, `<pre><code>` creates the ideal structure for displaying code blocks with proper formatting and semantic meaning.

Following the provided code example, create a `<pre>` element containing a `<code>` element. Inside, add this exact JavaScript: `window.onload = function() { console.log('Code is working'); };`
## Page
```markdown
# Step 174: Displaying Preformatted Code

To display a block of code exactly as it's typed, including spaces and line breaks, you should wrap it in a `<pre>` (preformatted text) tag. For semantic correctness, you should then also wrap it in a `<code>` tag.

**Code Example:**
```html
<pre><code>Your code here</code></pre>
```
Your task is to display a block of JavaScript code.
```
## Response
```html
<pre><code>window.onload = function() { console.log('Code is working'); }; </code></pre>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<section class="tech-demo">
    ...
    <div class="expertise-grid">...</div>
    <!-- Add the pre and code elements below -->
</section>
...
```
## Placeholder
```html
<!-- The `<pre>` tag is essential for showing code with indentation. -->
```
## Hint
```markdown
*   Start with `<pre>` then immediately add `<code>` inside it.
*   Add the exact JavaScript next.
*   Close with `</code></pre>` in the correct order.
```

# Challenge 175
## Title
```text
Paragraph with Inserted Text Element
```
## Description
The `<ins>` element represents text that has been inserted or added to a document. It's useful for showing updates or additions. Browsers typically display inserted text with an underline.

Following the provided code example, create a `<p>` element containing 'Updated: ' followed by an `<ins>` element with the text 'New services added'.
## Page
```markdown
# Step 175: Showing Inserted Text

When editing a document, you can semantically mark text that has been added using the `<ins>` (inserted) tag. It's usually displayed as underlined.

**Code Example:**
```html
<p>Status: <ins>Content added</ins></p>
```
Your task is to create a paragraph showing an update.
```
## Response
```html
<p>Updated: <ins>New services added</ins></p>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<section class="tech-demo">
    ...
    <pre><code>...</code></pre>
    <!-- Add the paragraph with inserted text below -->
</section>
...
```
## Placeholder
```html
<!-- This is the semantic opposite of the `<del>` tag. -->
```
## Hint
```markdown
*   Start with `<p>` and add the text 'Updated: '.
*   Add an `<ins>` element containing 'New services added'.
*   Close both elements with `</ins></p>`.
```

I will continue generating the rest of the challenges in this format.

I will continue generating the rest of the challenges in this format.

# Challenge 176
## Title
```text
Paragraph with Deleted Text Element
```
## Description
The `<del>` element represents text that has been deleted or removed from a document. It pairs with the `<ins>` element to show document revisions. Browsers typically render `<del>` text with a strikethrough line.

Following the provided code example, create a `<p>` element containing 'Deprecated: ' followed by a `<del>` element with the text 'Old price removed' inside it.
## Page
```markdown
# Step 176: Showing Deleted Text

To semantically mark text that has been removed from a document, you can use the `<del>` (deleted) tag. It's usually displayed with a strikethrough.

**Code Example:**
```html
<p>Status: <del>Removed content</del></p>
```
Your task is to create a paragraph showing a removed item.
```
## Response
```html
<p>Deprecated: <del>Old price removed</del></p>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<section class="tech-demo">
    ...
    <p>Updated: <ins>...</ins></p>
    <!-- Add the paragraph with deleted text below -->
</section>
...
```
## Placeholder
```html
<!-- `<del>` is for text that has been removed. `<s>` is for text that is no longer correct. -->```
## Hint
```markdown
*   Start with a `<p>` element and add the text 'Deprecated: '.
*   Add a `<del>` element after the 'Deprecated: ' text.
*   Place the text 'Old price removed' between the `<del>` and `</del>` tags. Don't forget the closing `</p>` tag.
```

# Challenge 177
## Title
```text
Template Element with Card Content
```
## Description
The `<template>` element defines reusable HTML content that is not rendered when the page loads but can be activated and cloned using JavaScript. It's perfect for creating content templates that need to be duplicated, like cards or list items. The `id` attribute provides a unique identifier for JavaScript to reference.

Following the provided code example, create a `<template>` element with an `id` attribute set to 'card-template'. Inside the template, include a `<div>` element with a `class` attribute set to 'card'.
## Page
```markdown
# Step 177: Creating a Reusable Template

The `<template>` tag holds HTML content that isn't rendered immediately. You can then use JavaScript to grab this template and reuse it to create new elements on the page.

**Code Example:**
```html
<template id="Template ID">
  <div class="Class Name"></div>
</template>
```
Your task is to create a template for a generic "card" element.
```
## Response
```html
<template id="card-template"><div class="card"></div></template>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<section class="tech-demo">
    ...
    <p>Deprecated: <del>...</del></p>
    <!-- Add the template element below -->
</section>
...
```
## Placeholder
```html
<!-- This content is not visible on the page, but it exists in the HTML for JavaScript to use. -->
```
## Hint
```markdown
*   Start with `<template>` and include the `id` attribute set to 'card-template'.
*   Inside the template, add a `<div>` element with `class="card"`.
*   Don't forget the closing tags: `</div>` and `</template>`.
```

# Challenge 178
## Title
```text
Div Element with CSS Class
```
## Description
The `<div>` element is a generic container that groups HTML elements for styling and layout. The `class` attribute assigns CSS class names, enabling targeted styling. The class name "frame-demo" suggests this container is designed to showcase content within a frame-like structure.

Following the provided code example, create a `<div>` opening tag with the CSS class 'frame-demo'.
## Page
```markdown
# Step 178: A Container for Framed Content

For our next demos, we'll need another container. This one will hold elements that embed external content, like `<iframe>`.

**Code Example:**
```html
<div class="Class Name">```
Your task is to add the opening `<div>` for the frame demo.
```
## Response
```html
<div class="frame-demo">
```
## Language
```text
Html
```## Points
```
100
```
## Code
```html
...
<section class="tech-demo">
    ...
    <template ...>...</template>
    <!-- Add the opening div tag below -->
</section>
...
```
## Placeholder
```html
<!-- This `div` will help us style the embedded content that follows. -->
```
## Hint
```markdown
*   Start with the `<div>` opening tag.
*   Add the `class` attribute inside the opening tag.
*   Set the class value to `"frame-demo"` exactly as specified.
```

# Challenge 179
## Title
```text
Heading Level 5 Element
```
## Description
The `<h5>` element creates a fifth-level heading. Headings from `<h1>` to `<h6>` represent a content hierarchy. `<h5>` represents a subsection heading typically used for detailed categorization.

Following the provided code example, create an `<h5>` element containing the text 'External Content'.
## Page
```markdown
# Step 179: A Heading for External Content

Our new section needs a title to explain what it's for.

**Code Example:**
```html
<h5>Section Title</h5>
```
Your task is to add an `<h5>` heading for the "External Content" section.
```
## Response
```html
<h5>External Content</h5>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<section class="tech-demo">
    ...
    <div class="frame-demo">
        <!-- Add the h5 heading below -->
    </div>
</section>
...
```## Placeholder
```html
<!-- This title introduces the `<iframe>` and `<object>` we're about to add. -->
```
## Hint
```markdown
*   Start with the `<h5>` opening tag.
*   Add the text 'External Content' between the opening and closing tags.
*   Close with the `</h5>` tag.
```

# Challenge 180
## Title
```text
Iframe Element with Security and Accessibility Features
```
## Description
The `<iframe>` element embeds external content. `src` specifies the URL. The `sandbox` attribute provides security by restricting what the embedded content can do (`allow-scripts` permits JavaScript, `allow-same-origin` allows same-origin requests). `title` improves accessibility by describing the content, and `srcdoc` provides fallback HTML if the source fails to load.

Following the provided code example, create an `<iframe>` element that embeds an OpenStreetMap with the specified `src`, `width`, `height`, `title`, `sandbox`, and `srcdoc` attributes.
## Page```markdown
# Step 180: Embedding an Iframe

An `<iframe>` is used to embed another HTML document within the current one. It's often used for maps, videos, or ads. Security and accessibility are important!

**Code Example:**
```html
<iframe src="Iframe Source URL" width="300" height="200" title="Iframe Title" sandbox="allow-scripts" srcdoc="<p>Fallback</p>"></iframe>
```
Your task is to create a secure and accessible iframe to embed a map.
```
## Response
```html
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C51.5%2C0.1%2C51.6" width="300" height="200" title="Map" sandbox="allow-scripts allow-same-origin" srcdoc="The map couldn't be loaded"></iframe>
```
## Language
```text
Html
```## Points
```
350
```
## Code
```html
...
<div class="frame-demo">
    <h5>External Content</h5>
    <!-- Add the iframe element below -->
</div>
...
```
## Placeholder
```html
<!-- The `sandbox` attribute is a critical security feature for `<iframe>`s. -->
```
## Hint```markdown
*   Start with `<iframe>` and include the `src` attribute with the OpenStreetMap URL.
*   Add `width="300"`, `height="200"`, `title="Map"`, and `sandbox="allow-scripts allow-same-origin"`.
*   Include `srcdoc` with the fallback content and close with `</iframe>`.
```

# Challenge 181
## Title
```text
Object Element with PDF Embedding and Fallback
```
## Description
The `<object>` element embeds external content like PDFs. It uses `data` for the URL and `type` for the MIME type (`application/pdf`). The `<param>` element passes parameters to the embedded content, while `<embed>` can serve as a fallback for older browsers.

Following the provided code example, create an `<object>` element that embeds "/sample-resume.pdf" with `type="application/pdf"`, `width="200"`, and `height="100"`. Inside, add a `<param>` with `name="toolbar"` and `value="false"`, followed by an `<embed>` fallback with the same `src`, `type`, and dimensions.
## Page
```markdown
# Step 181: Embedding a PDF with Object

The `<object>` tag is a more general-purpose embed tag than `<iframe>`. It can be used for various media types, including PDFs. It also has a built-in fallback mechanism.

**Code Example:**
```html
<object data="file.pdf" type="application/pdf" width="200" height="100">
  <embed src="file.pdf" type="application/pdf" width="200" height="100">
</object>
```
Your task is to embed a sample PDF.
```
## Response
```html
<object data="/sample-resume.pdf" type="application/pdf" width="200" height="100"><param name="toolbar" value="false"><embed src="/sample-resume.pdf" type="application/pdf" width="200" height="100"></object>
```
## Language
```text
Html```
## Points
```
350
```
## Code
```html
...
<div class="frame-demo">
    ...
    <iframe ...></iframe>
    <!-- Add the object element below -->
</div>
...
```
## Placeholder
```html
<!-- If the browser can't render the `<object>`, it will try to render the content inside it, like the `<embed>` tag. -->
```
## Hint
```markdown
*   Start with `<object>` and include `data`, `type`, `width`, and `height` attributes.
*   Add a `<param>` element with `name="toolbar"` and `value="false"`.
*   Include an `<embed>` element as fallback with matching `src`, `type`, and dimensions.
```

# Challenge 182
## Title
```text
Div Element with Class and Inline Style
```
## Description
A `<div>` supports both `class` attributes for external CSS and `style` attributes for inline CSS. The `style` attribute applies CSS properties directly to the element, with `display: none;` being a common property that completely hides the element from view.

Following the provided code example, create a `<div>` opening tag with `class="deprecated-demo"` and `style="display: none;"`.
## Page
```markdown
# Step 182: A Hidden Container for Deprecated Demos

Let's create one last container. This one will hold some more deprecated tags for educational purposes, but we'll hide the whole container with an inline style.

**Code Example:**
```html
<div class="Class Name" style="property: value;">
```
Your task is to add the opening `<div>` tag for our hidden, deprecated demos.
```
## Response
```html
<div class="deprecated-demo" style="display: none;">
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<section class="tech-demo">
    ...
    <div class="frame-demo">...</div>
    <!-- Add the opening div tag below -->
</section>
...```
## Placeholder
```html
<!-- `style="display: none;"` makes the element and all its children invisible. -->
```
## Hint
```markdown
*   Start with `<div>` and include both `class` and `style` attributes.
*   Set `class="deprecated-demo"` to assign the CSS class name.
*   Add `style="display: none;"` to hide the element completely.
```

# Challenge 183
## Title
```text
Applet Element with Parameters
```
## Description
The `<applet>` element was used to embed Java applets but is now deprecated. It required `code` (the Java class file), `width`, and `height`. The `<param>` element passed parameters to the Java application. This is for historical knowledge.

Following the provided code example, create an `<applet>` element with `code='HelloWorld.class'`, `width='200'`, `height='100'`. Inside, add a `<param>` element with `name='message'` and `value='Hello World'`.
## Page
```markdown
# Step 183: The Deprecated Applet Tag

The `<applet>` tag was used to embed Java applets into web pages. This technology is now obsolete and not supported by modern browsers.

**Code Example:**
```html
<applet code="Applet.class" width="200" height="100">
  <param name="parameterName" value="parameterValue">
</applet>
```
Your task is to create an example `<applet>` tag.
```
## Response
```html
<applet code="HelloWorld.class" width="200" height="100"><param name="message" value="Hello World"></applet>
```
## Language
```text
Html
```
## Points```
200
```
## Code
```html
...
<section class="tech-demo">
    ...
    <div class="deprecated-demo" style="display: none;">
        <!-- Add the applet element below -->
    </div>
</section>
...
```
## Placeholder
```html
<!-- You won't see anything in the preview because browsers no longer run Java applets. -->
```
## Hint
```markdown
*   Start with `<applet>` and include `code="HelloWorld.class"`, `width="200"`, and `height="100"`.
*   Add a `<param>` element inside with `name="message"` and `value="Hello World"`.
*   Close the applet with `</applet>`.
```

# Challenge 184
## Title
```text
Deprecated Frameset Structure
```
## Description
The `<frameset>` element, deprecated in HTML5, was used to divide browser windows into multiple frames, each displaying a separate web page. `cols` defined column widths, `<frame>` specified individual frame sources, and `<noframes>` provided fallback content.

Following the provided code example, create a `<frameset>` with `cols="50%,50%"`. Include two `<frame>` elements: one for "https://wikipedia.org" named "frame1", and one for "https://www.wiktionary.org" named "frame2". Add a `<noframes>` section with the fallback text `<p>Your browser does not support frames.</p>`.
## Page
```markdown
# Step 184: The Deprecated Frameset

Before CSS layouts, `<frameset>` was used to split the browser window into multiple independent sections, each loading a different HTML page. This is heavily deprecated.

**Code Example:**
```html
<frameset cols="50%,50%">
  <frame src="page1.html" name="frame1">
  <frame src="page2.html" name="frame2">
  <noframes>
    <p>Your browser does not support frames.</p>
  </noframes>
</frameset>
```
Your task is to create an example `<frameset>`.
```
## Response
```html
<frameset cols="50%,50%"><frame src="https://wikipedia.org" name="frame1"><frame src="https://www.wiktionary.org" name="frame2"><noframes><p>Your browser does not support frames.</p></noframes></frameset>
```
## Language
```text
Html
```
## Points
```
350
```
## Code
```html
...
<div class="deprecated-demo" style="display: none;">
    <applet ...>...</applet>
    <!-- Add the frameset element below -->
</div>
...
```
## Placeholder
```html
<!-- A page with a `<frameset>` cannot have a `<body>` tag. Modern sites almost never use this. -->
```
## Hint
```markdown
*   Start with `<frameset cols="50%,50%">`.
*   Add two `<frame>` elements with `src` and `name` attributes for the Wikipedia URLs.
*   Include `<noframes>` with a paragraph containing fallback text.
```

# Challenge 185
## Title
```text
Deprecated DIR Element with List Items
```
## Description
The `<dir>` element is deprecated and was originally for directory listings. It has been obsolete since HTML 4.01. It functions like a `<ul>`, containing `<li>` elements.

Following the provided code example, create a `<dir>` element containing two `<li>` elements with the text "Directory item 1" and "Directory item 2".
## Page```markdown
# Step 185: The Deprecated Dir Tag

The `<dir>` tag was intended to be used for directory listings. It's deprecated and behaves just like a `<ul>` in modern browsers.

**Code Example:**
```html
<dir>
  <li>First List Item</li>
  <li>Second List Item</li>
</dir>
```
Your task is to create a `<dir>` list.
```
## Response
```html
<dir><li>Directory item 1</li><li>Directory item 2</li></dir>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<div class="deprecated-demo" style="display: none;">
    ...
    <!-- Add the dir element below -->
</div>
...
```
## Placeholder
```html
<!-- You should always use `<ul>` instead of this tag. -->
```
## Hint
```markdown
*   Start with the deprecated `<dir>` opening tag.
*   Add two `<li>` elements with the specified text content.
*   Close with the `</dir>` tag.
```

I will continue generating the rest of the challenges in this format.
I will continue generating the rest of the challenges in this format.

# Challenge 186
## Title
```text
Deprecated Teletype Text Element
```
## Description
The `<tt>` element was used in early HTML to display text in a monospace (teletype) font. This element is now deprecated in HTML5. Instead, developers should use semantic elements like `<code>`, `<kbd>`, `<samp>`, or CSS.

Following the provided code example, create a `<tt>` element containing the text: "Teletype text".
## Page
```markdown
# Step 186: The Deprecated Teletype Tag

The `<tt>` (teletype) tag was a presentational tag to render text in a monospace font. Like other presentational tags, it's been replaced by CSS.

**Code Example:**
```html
<tt>Text Content</tt>
```
Your task is to create a `<tt>` element.
```
## Response
```html
<tt>Teletype text</tt>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<div class="deprecated-demo" style="display: none;">
    ...
    <dir>...</dir>
    <!-- Add the tt element below -->
</div>
...
```
## Placeholder
```html
<!-- For code, use `<code>`. For keyboard input, use `<kbd>`. For generic monospace, use CSS. -->
```
## Hint
```markdown
*   Start with the `<tt>` opening tag.
*   Add the text "Teletype text" between the opening and closing tags.
*   Close with the `</tt>` tag.
```

# Challenge 187
## Title
```text
Footer Element
```
## Description
The `<footer>` element represents a footer for its nearest sectioning content or the entire document. It typically contains information about the author, copyright data, links, contact information, etc.

Using the provided code example, create the opening tag for a `<footer>` element.
## Page
```markdown
# Step 187: The Page Footer

Finally, at the end of your page content, you should have a `<footer>`. This semantic tag contains information like copyright notices, contact info, and related links.

**Code Example:**
```html
<footer>
```
Your task is to add the opening `<footer>` tag at the end of the `<body>`.
```
## Response
```html
<footer>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<body>
    <header>...</header>
    <main>...</main>
    <aside>...</aside>
    <!-- Add the opening footer tag below -->
</body>
...
```
## Placeholder
```html
<!-- The end of the page. You've almost built a full webpage structure! -->
```
## Hint
```markdown
*   Start with an opening angle bracket `<`.
*   Type 'footer' after the bracket.
*   Close with a closing angle bracket `>`.
```

# Challenge 188
## Title
```text
Address Element with Contact Information
```
## Description
The `<address>` element represents contact information for a person, organization, or document. It can contain physical addresses, email links (`<a href="mailto:...">`), and phone links (`<a href="tel:...">`).

Following the provided code example, create an `<address>` element containing a paragraph `<p>` with the address: "1234 Web Developer Lane, Code City, CC 12345". This should be followed by a line break `<br>` and clickable links for the email "info@efiwe.com" and phone number "+1234567890".
## Page
```markdown
# Step 188: Adding Contact Information

The `<footer>` is a great place for contact information. The semantic `<address>` tag is specifically for this purpose.

**Code Example:**
```html
<address>
  <p>
    Email: <a href="mailto:Email Address">Email Address</a><br>
    Phone: <a href="tel:Phone Number">Phone Number</a>
  </p>
</address>
```
Your task is to add a complete address block to your footer.
```
## Response
```html
<address><p>1234 Web Developer Lane, Code City, CC 12345<br>Email: <a href="mailto:info@efiwe.com">info@efiwe.com</a><br>Phone: <a href="tel:+1234567890">+1234567890</a></p></address>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<footer>
    <!-- Add the address element below -->
</footer>
...
```
## Placeholder
```html
<!-- Using `mailto:` and `tel:` links creates helpful shortcuts for users. -->
```
## Hint
```markdown
*   Start with `<address>` and include a `<p>` element inside.
*   Add the physical address, then use `<br>` tags for line breaks.
*   Create `<a href="mailto:info@efiwe.com">` and `<a href="tel:+1234567890">` links for interactive contact options.
```

# Challenge 189
## Title
```text
Copyright Paragraph in Footer Element
```
## Description
The `<p>` element is commonly used within `<footer>` elements to display copyright notices. Copyright statements typically include the copyright symbol (©), the year, the company name, and the rights declaration.

Following the provided code example, create a `<p>` element containing the copyright text: "© 2025 Efiwe AI. All rights reserved."
## Page
```markdown
# Step 189: The Copyright Notice

A copyright notice is a standard part of most website footers.

**Code Example:**
```html
<p>&copy; 2025 Company Name. All rights reserved.</p>```
Your task is to add a copyright paragraph to your footer. (`&copy;` is the HTML entity for the © symbol).
```
## Response
```html
<p>© 2025 Efiwe AI. All rights reserved.</p>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<footer>
    <address>...</address>
    <!-- Add the copyright paragraph below -->
</footer>
...
```
## Placeholder
```html
<!-- Every professional website should have a copyright notice. -->
```
## Hint
```markdown
*   Start with the `<p>` opening tag.
*   Add the exact text "© 2025 Efiwe AI. All rights reserved." between the tags.
*   Close with the `</p>` tag.
```

# Challenge 190
## Title
```text
Paragraph with Quotation Element
```
## Description
The `<q>` element represents short inline quotations, automatically adding quotation marks around the text. Unlike `<blockquote>` which is for longer, block-level quotes, `<q>` is designed for brief quotes that appear within paragraphs.

Following the provided code example, create a `<p>` element containing a `<q>` element with the text: "Creating innovative AI-powered solutions to revolutionize coding education."
## Page
```markdown
# Step 190: An Inline Quotation

For short, inline quotations, you should use the `<q>` tag. The browser will automatically add the quotation marks.

**Code Example:**
```html
<p>As the saying goes, <q>Your quoted text goes here</q>.</p>
```
Your task is to add a company motto or mission statement to your footer using a `<q>` tag.
```
## Response
```html
<p><q>Creating innovative AI-powered solutions to revolutionize coding education.</q></p>
```
## Language
```text
Html
```
## Points
```
100
```
## Code
```html
...
<footer>
    ...
    <p>© ...</p>
    <!-- Add the paragraph with the quotation below -->
</footer>
...
```
## Placeholder
```html
<!-- The `<q>` tag is semantic; it tells the browser this is a quote, not just text with quote marks. -->
```
## Hint
```markdown
*   Start with the `<p>` opening tag.
*   Add the `<q>` element inside the paragraph `<p>`.
*   Place the text "Creating innovative AI-powered solutions to revolutionize coding education." between the `<q>` and `</q>` tags.
```

# Challenge 191
## Title
```text
Script Element with Async, Defer, and Error Handling
```
## Description
The `<script>` element loads and executes JavaScript. `async` downloads the script in parallel and executes it as soon as it's ready. `defer` downloads in parallel but waits to execute until the HTML is fully parsed. `src` specifies the external script file. `onerror` provides error handling if the script fails to load. Placing scripts before the closing `</body>` tag is a performance best practice.

Following the provided code example, create a `<script>` element with `async`, `defer`, `src="scripts.js"`, and `onerror="console.log('Script error')"`.
## Page
```markdown
# Step 191: Linking a JavaScript File

Finally, to add interactivity to your page, you link to a JavaScript file with the `<script>` tag. For performance, it's best practice to place this right before the closing `</body>` tag.

**Code Example:**
```html
<script async defer src="Script URL" onerror="Error Handler"></script>
```
Your task is to add a `<script>` tag to load your site's JavaScript.
```
## Response
```html
<script async defer src="scripts.js" onerror="console.log('Script error')"></script>
```
## Language
```text
Html
```
## Points
```
200
```
## Code
```html
...
<body>
    ...
    <footer>...</footer>
    <!-- Add the script tag below -->
</body>
</html>
```
## Placeholder
```html
<!-- `defer` is usually the best choice for scripts that need the full DOM. It guarantees execution order. -->
```
## Hint
```markdown
*   Start with `<script>` and add both `async` and `defer` attributes.
*   Set `src="scripts.js"` to reference the external JavaScript file.
*   Add `onerror="console.log('Script error')"` for error handling and close with `</script>`.```
