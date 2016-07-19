
# jsx 代码规范

## 一、 如何给组件传递 props

### 1. 传递 props 的基本方式

```
<Note {...{dispatch, resume, notes, interviews: resumeInterviews}} />
```

优先采用 ES6 中对象属性的简洁表示法，即在对象中只写属性名，不写属性值，此时，属性值等于属性名所代表的变量。

反映在 props 中：

```
// 不推荐
<Note a={a} b={b} c={c} />
<Note {...{a: a, b: b, c: c}} />

// 推荐
<Note {...{a, b, c}} />
```

### 2. props 少于3个时

此时用方式1和用传统方式区别不大，可以使用下面的传统写法：

```
<Note a=b />
<Note a={b} />
<Note a={b} c=d />
```

### 3. 用前两种方式一行写不下，太长时：

把 props 保存在一个变量中：

```
const props = {xxx}
<Note {...props} />
```

### 4. props 中含有函数时

如果函数已经保存在一个变量中，就按照方式1、2、3处理：

```
<Note a={b} fn={fn} />
<Note {...{a, b, fn}} />
```

如果函数是在传递 props 时才用匿名函数定义，就把函数单独放在外面，以方便区分：

```
<Note {...{a, b}} fn={v => xxxx} />

<Note {...{a, b, c, d, e}}
  fn={v => xxxx} />
```