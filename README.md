# React Artist Page
## Requirements:
- Setup React App using Vite
- Install required libraries
- Use components to render on the same page
- Must contain:
    - Their name, music type and intro paragraph
    - A list of their songs/albums, including name, release date and cover art
- Add a 'Like' feature
- Add a controlled form
- Style as you see fit

## Installation
- `mkdir artist-page`
- `cd artist-page`
- `npm create vite@latest . -- --template react`
- `npm install`
- `npm run dev`

## File Structure
```
components -- AlbumCard
           -- LikeButton
           
layout     -- Footer
           -- NavBar
           -- AboutPage
           -- AlbumPage
           -- Home
           -- Login
           -- NotFound
```


## useContext 

- `useContext` is a React Hook that lets you read and subscribe to context from your component.

- `Context` lets the parent compoenent make some information available to any component in the tree below it - *no matter how deep* - without passing it explicitly through props.

- `Provider` component accepts a value prop to be passed to consuming components that are descendants of this Provider.
    - One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
    - All consumers that are descendants of a Provider will re-render whenever the Provider's value prop changes.

```
import React, { useState, useContext, createContext } from "react";

const ___Context = createContext();

export const ___Provider = ({ children }) => {
    const [$$$, set$$$] = useState();

    return (
        <___Context.Provider value={{ $$$, set$$$ }}>
            {children}
        </___Context.Provider>
    );
};

export const use___ = () => useContext(___Context);
```

### Key
- `___` - `Auth`
- `$$$` - `user/User`
