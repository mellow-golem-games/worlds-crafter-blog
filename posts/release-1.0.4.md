---
title: "Release 1.0.4"
machineDate: "2023-06-26"
date: "June 26, 2023"
meta_desc: "Map Updates and Side Panels"
---

Hey everyone! We’re super excited to have the next release for Worlds Crafter out the door. This week, we started a big rework of the maps system as well as laid the groundwork for some larger changes. Our work on the maps isn’t quite done yet, but we felt this was a good place to cut a release as it encompasses the majority of the features. Let’s take a quick peek at what to expect.

## Right Click Context

First up, we’ve added a right-click context menu when working with maps. This was a usability improvement we’ve been thinking about for a while and finally got around to implementing. By adding this, it gives us more control over how to handle interactions without adding anything crazy to the UI.

![Right-click context menu](/images/context-menu.jpg)

Give it a shot, the right click will work on both the map as well as on the pins themselves to control editing and deleting. The work here also gives us more options in the future to add right-click context menus in other places in the app.

## The Entity Side Panel

The right-click menu mentioned above is important as we’ve added a completely new piece of functionality when clicking on a pin normally. Now, when you click a pin, it will open the slide-out side panel that will include that entity's details.

![Entity Side Panel](/images/side-panel.jpg)

This is a much cleaner way of displaying linked entities, so much we’ve reworked sessions as well to utilize this. This lets you see an entity without having to leave its page, perfect for when trying to view a map’s details or run a session!

We’re looking into ways to utilize this in other places in the app as well and may re-work most links to use it. Don’t worry, the side panel also includes a link to the full entity view, so you can still get there if you need to.

## Other Fixes

As always, there were a number of other fixes and improvements. Many of these were behind the scenes, fixing obscure errors, performance ect. Here’s the breakdown of the big ones that affect the UI.

**Scroll to top on page change:** Great for when you move between a long and short page so you don’t have to manually scroll back up.

**Added a sticky header on mobile:** Since the nav is tied to the header on smaller screen sizes this lets you navigate without having to scroll back up to the menu.

**Breadcrumbs:** You’ll notice breadcrumbs on all the entity pages. This is the first test in helping to ease navigation when working several levels deep. This only records the top level for now, but future changes will “remember” the path you took when navigating between entities so you can more easily get back to where you came from.

**Delete timeline entry:** Somehow this slipped through; you should now be able to delete timeline entries.

## What’s Coming Next

As we mentioned, the above side panel and context menus open a lot of doors for more functionality and we’re excited to explore it. We’re not 100% on the details yet, so stay tuned for more on that.

We also mentioned that the maps aren’t quite done yet, the main missing ingredient is the pins. Right now, you’re limited to a handful of pins which is a huge constraint. We’re deep in the work to add a ton of new options here with different pin types, colors, and customization options.

The other big item we’re working on is to add a more wiki type view. This will let you explore your world in a more literary-type format that doesn’t really exist in the application right now. We’re also going to be adding ways to share this wiki view with your friends if you so choose. This will be part of some larger privacy and permissions work we’re cooking up to allow more collaboration and multi-user worlds.

Don’t worry, that’s going to be opt-in, so if you want your world to be private it will remain so by default.

That's just a small taste of what we have planned. There’s much more on the horizon, and we’re beyond excited to keep churning out new improvements for all of you.

All the best,
The Worlds Crafter Team
