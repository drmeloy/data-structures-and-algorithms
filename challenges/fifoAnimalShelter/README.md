# Challenge summary
Build off your queue with stacks.

## Challenge description
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
This code challenge was very similar to past code challenges so it felt quite achieveable. To find the node to dequeue by preference we followed the nodes by current.next.

## Solution
![animal-shelter-fifo-whiteboard](../../assets/fifo-queue-whiteboard.JPG)

## Example whiteboard layout
https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Whiteboard_Workflow.html