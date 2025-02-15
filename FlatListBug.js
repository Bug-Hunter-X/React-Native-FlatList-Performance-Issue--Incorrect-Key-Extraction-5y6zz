In React Native, when working with FlatList or SectionList, a common performance issue arises when dealing with a large dataset.  Improperly handling key extraction can lead to significant performance degradation, resulting in slow rendering and scrolling. Using the index as a key is a frequent mistake.  For example:

```javascript
<FlatList
  data={myData}
  renderItem={({ item, index }) => <MyComponent item={item} />}
  keyExtractor={(item, index) => index} // Incorrect key extraction
/>
```

This approach causes FlatList to inefficiently update items.  Each time the data changes, even if only slightly, it re-renders all components due to the index-based key. This is because the index does not represent a unique identifier.