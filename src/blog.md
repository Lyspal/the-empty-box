---
layout: base.njk
title: Blog
---

This is a test for a very basic blog. Further posts will be added here, and the layout will be improved.

### Posts

{% for post in collections.blog %}
- [{{ post.data.title}}]({{ post.url }})
{% endfor %}
