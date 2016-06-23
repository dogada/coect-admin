<admin-entrylist>

  <coect-breadcrumbs if={ breadcrumbs.length } items={ breadcrumbs } />
  <umedia-entry-list />

  <script>
   this.mixin('coect-admin')
   var tag = this, params = tag.page.params
   tag.query = {type: params.type, model: params.model}

   tag.breadcrumbs =[ 
     {name: 'Dashboard', url: tag.app.url()},
     {name: params.model, url: tag.app.url(params.model)}
   ]
   if (params.type) tag.breadcrumbs.push({name: params.type})
  </script>

</admin-entrylist>
