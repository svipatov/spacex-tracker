Default

```jsx
  <Navigation-bar title="SpaceX"></Navigation-bar>
```

With links

```jsx
  <Navigation-bar title="SpaceX">
    <div slot="links">
      <a class="router-link link">Link1</a>
      <a class="router-link link">Link2</a>
      <a class="router-link link">Link3</a>
      <a class="router-link link">Link4</a>
    </div>
  </Navigation-bar>
```

With links and subnavbar

```jsx
  <Navigation-bar title="SpaceX">
    <div slot="links">
      <a class="router-link link">Link1</a>
      <a class="router-link link">Link2</a>
      <a class="router-link link">Link3</a>
      <a class="router-link link">Link4</a>
    </div>
    <div slot="view">
      <p>Subnavbar goes in here</p>
    </div>
  </Navigation-bar>
```