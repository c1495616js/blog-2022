---
to: content/posts/<%= h.getDateTime('yyyy-MM-dd') %>-<%=  h.changeCase.paramCase(title) %>.mdx
---

---
title: <%= title %>
description: ''
socialImage: ''
publishedAt: <%= h.getDateTime('yyyy-MM-dd') %>
tags: []
type: Post
isPublished: true
---