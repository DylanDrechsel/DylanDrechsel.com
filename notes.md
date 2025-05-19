-----> Project Notes <-----
-----> Animation Notes <-----
    - I can use this formula for tracking the progress of all animations... (See StaticAnimation for implementation example)
        FORMULA --> (current_progress - segment_start) / (segment_end - segment_start)

-----> useRef Notes <-----
    - The value inside useRef stays the same between the components renders
    - Changing the value doesn't make the component re-render
    - It has a .current property
    