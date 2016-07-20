
# jsx rules

## pass props

### 1. basic way

```jsx
<Note {...{dispatch, resume, notes, interviews: resumeInterviews}} />
```

shorthand for `foo: foo` assignment is better:

```jsx
// not recommended
<Note a={a} b={b} c={c} />
<Note {...{a: a, b: b, c: c}} />

// recommended
<Note {...{a, b, c}} />
```

### 2. if props < 3

traditional way is also allowed:

```jsx
<Note a=b />
<Note a={b} />
<Note a={b} c=d />
```

### 3. if props are too long to write in one line

define props outside jsx:

```jsx
const props = {xxx}
<Note {...props} />
```

### 4. if props contain function

if fn has defined outside jsx:

```jsx
const fn = v => xxx

<Note a={b} fn={fn} />
<Note {...{a, b, fn}} />
```

if not, don't put it together with others：

```jsx
<Note {...{a, b}} fn={v => xxxx} />

<Note {...{a, b, c, d, e}}
  fn={v => xxxx} />
```

### 5. if there isn't associated variable for most props

traditional way is better:

```jsx
// not recommended
<Note {...{a: 'name', b: true, fn: v => xxx}} />

// recommended
<Note a='name' b={true} fn={v => xxx} />
```