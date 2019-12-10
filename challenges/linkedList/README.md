# Singly Linked List
Create classes Node and LinkedList

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
- Define a method called `insert` which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called `toString` which takes in no arguments and returns a string representing all the values in the Linked List.
- Define a method called `.append(value)` which adds a new node with the given value to the end of the list
- Define a method called `.insertBefore(value, newVal)` which add a new node with the given newValue immediately before the first value node
- Define a method called `.insertAfter(value, newVal)` which add a new node with the given newValue immediately after the first value node
- STRETCH GOAL: Define a method called `delete(value)` to delete a node with the given value from the linked list.

## Approach & Efficiency
For the approach I started each method by assigning current to head, then moving through the list until I found the specified result. This has a O(1n) efficiency because it directly correlates with the number of items in the list.

## API
- `insert(value)`: takes any value as an argument and adds a new node with that value to the head of the list.
- `includes(value)`: takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- `toString()`:  takes in no arguments and returns a string representing all the values in the Linked List.
- `.append(value)`: adds a new node with the given value to the end of the list
- `.insertBefore(value, newVal)`: adds a new node with the given newValue immediately before the first value node
- `.insertAfter(value, newVal)`: adds a new node with the given newValue immediately after the first value node
- `delete(value)`: deletes a node with the given value from the linked list.

## WHITEBOARD

![linked-lists-whiteboard](../../assets/linked-lists-whiteboard.JPG)