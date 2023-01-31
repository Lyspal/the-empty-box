---
layout: base.njk
title: 11ty template
---

## This is an {{ title }}

This is a template for 11ty.

List of blog posts:

{% for post in collections.blog %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}

There is some internal data:

{% for name in people %}
- {{ name }}
{% endfor %}
