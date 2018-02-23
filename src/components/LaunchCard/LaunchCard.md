Full Launch Card

```jsx
  <Launch-card :launch="{
    id: 1,
    details: 'Details for launch',
    rocket: {
      name: 'Rocket name'
    },
    date: new Date().getTime()
  }">
  <a class="router-link link" slot="link">Custom Link</a>
  </Launch-card>
```

Launch card without link

```jsx
  <Launch-card :launch="{
    id: 1,
    details: 'Details for launch',
    rocket: {
      name: 'Rocket name'
    },
    date: new Date().getTime()
  }">
  </Launch-card>
```

Launch card without link & description

```jsx
  <Launch-card :launch="{
    id: 1,
    rocket: {
      name: 'Rocket name'
    },
    date: new Date().getTime()
  }">
  </Launch-card>
```