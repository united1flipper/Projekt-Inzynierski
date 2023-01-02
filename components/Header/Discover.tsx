import React from 'react'
import { Dropdown } from "flowbite-react";

const Discover = () => {
  return (
    <>
      <Dropdown label="Discover">
        <Dropdown.Item>All NFTs</Dropdown.Item>
        <Dropdown.Item>Art</Dropdown.Item>
        <Dropdown.Item>Music</Dropdown.Item>
        <Dropdown.Item>Sport</Dropdown.Item>
        <Dropdown.Item>Photography</Dropdown.Item>

      </Dropdown>
    </>
  )
}

export default Discover