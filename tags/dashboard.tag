<admin-dashboard>
  <coect-h1>Admin Dashboard</coect-h1>

  <table class="table">
    <caption>Data types overview</caption>
    <tr>
      <th>Model</th>
      <th>Type</th>
      <th>Count</th>
      <th>Last record</th>
    </tr>

    <tr each={ row in state.stat }>
      <td><a href={ Site.urls.admin(row.model) }>{ row.model }</a></td>
      <td><a href={ rowUrl(row) }>{ row.type }</a></td>
      <td>{ row.count }</td>
      <td title={ row.last_created }>{ row.last_created && Site.coect.date.diff(row.last_created) }</td>
    </tr>
  </table>

  <script>
   var tag = this, site = tag.site
   debug('dashboard')
   tag.mixin('coect-admin')

   tag.rowUrl = function(row) {
     if (row.model == 'user') return tag.app.url('user')
     else return tag.app.url(row.model, row.type)
   }
   // fetch fresh copy of state even if we have cached one
   tag.app.api.getState(tag, 'dashboard')
  </script>
</admin-dashboard>
