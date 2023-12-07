import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '.'

describe('NavBar component', () => {
  beforeEach(() =>{
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
  })

  afterEach(() => {
    cleanup()
  })
  

  it('displays a NavBar', () => {
    const nav = screen.getByRole('navigation')

    expect(nav).toBeInTheDocument()
  })
})
