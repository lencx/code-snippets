# Mixin

## 清除浮动

```scss
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
```

## 文本省略

```scss
// 单行文本省略
@mixin single-text($width) {
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: $width;
}

// 多行文本省略
@mixin multi-text($width, $row) {
  max-width: $width;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $row;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
}
```
