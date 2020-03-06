# React Rating Component

### install: 
```
npm install ab-react-rating
```

### basic example:
```javascript
import React from "react";
import Rating from 'ab-react-rating';

function App() {
  return (
    <Rating />
  );
}
```

### example:
```javascript
import React from "react";
import { GiLoveMystery } from "react-icons/gi";
import Rating from 'ab-react-rating';

function App() {
  return (
    <Rating 
      value={3}
      minValue={1}
      maxValue={6}
      changed={(val)=>{console.log(val)}}
      theme="redText">
      <GiLoveMystery />
    </Rating>
  );
}
```

### docs:
#### `children`
if passed children will be displayed as rate symbol
###### type: string / instanceof React.Component / React.isValidElement
###### default: undefined
###### usage:
```javascript
<Rating theme="redText">
  <GiLoveMystery />
</Rating>
```

#### `value`
alow to set initial value for rating Component
###### type: number
###### default: 0
###### usage:
```javascript
<Rating value={2}/>
```

#### `minValue`
alow to set minimal value for rating Component
###### type: number
###### default: 0
###### usage:
```javascript
<Rating minValue={2}/>
```

#### `maxValue`
alow to set max value for rating Component
###### type: number
###### default: 5
###### usage:
```javascript
<Rating maxValue={6}/>
```

#### `changed`
this callback will be called on value change rating Component
###### type: function
###### default: undefined
###### usage:
```javascript
<Rating changed={(val)=>{console.log(val)}}/>
```

#### `allowUnselect`
determine if user will be able to unselect value of component
###### type: bool
###### default: true
###### usage:
```javascript
<Rating allowUnselect={false}/>
```

#### `readOnly`
determine if user will be able to change value of component
###### type: bool
###### default: false
###### usage:
```javascript
<Rating readOnly={true}/>
```

#### `theme`
set theme of component. available themes:
* blue - base color: `#6ea1ff`, active color: `#2857ad`
* gold - base color: `#fac552`, active color: `#ad7e17`
* aqua - base color: `#e0fffa`, active color: `#4a8077`
* red - base color: `#cca9a3`, active color: `#d5523e`
* green - base color: `#c9fbd1`, active color: `#63c773`
* yellow - base color: `#fbf1a8`, active color: `#c7a32f`
* blueText - text base color: `#6ea1ff`, active text color: `#2857ad`
* goldText - text base color: `#fac552`, active text color: `#ad7e17`
* aquaText - text base color: `#e0fffa`, active text color: `#4a8077`
* redText - text base color: `#cca9a3`, active text color: `#d5523e`
* greenText - text base color: `#c9fbd1`, active text color: `#63c773`
* yellowText - text base color: `#fbf1a8`, active text color: `#c7a32f`
###### type: string
###### default: gold
###### usage:
```javascript
<Rating theme="red"/>
```

#### `itemClass`
set item class to passed value
###### type: string
###### default: rating__item
###### usage:
```javascript
<Rating itemClass="itemClass" itemActiveClass="activeItemClass"/>
```

#### `itemActiveClass`
set active item class to passed value
###### type: string
###### default: rating__item--active
###### usage:
```javascript
<Rating itemClass="itemClass" itemActiveClass="activeItemClass"/>
```

#### `itemStyles`
set item inline styles to passed value
###### type: object
###### default: {}
###### usage:
```javascript
<Rating 
  itemStyles={{ color: "#61FFD0", background: "#20B387"}}
  itemActiveStyles={{color: "#FF977A", background: "#B34E32"}}
  />
```

#### `itemActiveStyles`
set active item inline styles to passed value
###### type: object
###### default: {}
###### usage:
```javascript
<Rating 
  itemStyles={{ color: "#61FFD0", background: "#20B387"}}
  itemActiveStyles={{color: "#FF977A", background: "#B34E32"}}
  />
```

#### `containerStyles`
set item container inline styles to passed value
###### type: object
###### default: {}
###### usage:
```javascript
<Rating 
  containerStyles={{ width: "20px", height: "20px"}}
  containerActiveStyles={{width: "20px", height: "20px"}}
  />
```

#### `containerActiveStyles`
set active item container inline styles to passed value
###### type: object
###### default: {}
###### usage:
```javascript
<Rating 
  containerStyles={{ width: "20px", height: "20px"}}
  containerActiveStyles={{width: "20px", height: "20px"}}
  />
```

### to do:
- [ ] allow to mark half of values
- [ ] add more themes
- [ ] add default icons/ marks ?