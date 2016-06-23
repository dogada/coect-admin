<admin-tasklist>
  <ul>
    <li>
      <a rel="external" target="_blank" href={ app.url('webmentionio', 'check') }>Check webmention.io</a>
    </li>
    <li>
      <a rel="external" target="_blank" href={ app.url('error', 'exception') }>Test exception</a>
    </li>
    <li>
      <a rel="external" target="_blank" href={ app.url('error', 'error') }>Test error</a>
    </li>
  </ul>

  <script>
   debug('tasklist')
   this.mixin('coect-admin')
  </script>

</admin-tasklist>
