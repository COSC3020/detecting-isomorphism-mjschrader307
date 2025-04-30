# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

---

Answer:

I did a lot of research on this problem, since I did a lot of pondering and could not come up with a good idea for it. The general consensus seemed to be that there is no good-size-fits-all solution to detecting isomorphism in two graphs. The most reliable solution I thought of was to use a brute force approach:

- Create an array similar to the `range(n)` iterator in Python ($\Theta(|V|)$)
- Create an array of permutations of that array ($\Theta(|V|!)$)
- Each permutation represents a pair of transformations (the same transformation twice) to the second graph:
  - `perm[i]` represents both H's new row position and column position.
  - This should result in a copy of the first graph if there exists a "perfect" permutation (indicator of isomorphism)
    - The only differences at that point would be the labeling of vertices
  - Rearranging of matrix elements happens in $\Theta(|V|^2)$ time, and this happens once per permuation of vertex arrangement in the adjacency matrix

Therefore, I have this for the runtime complexity: $\Theta(|V| + |V|^2|V|!)$

That results in a final runtime complexity of $\Theta(|V|^2|V|!)$

This algorithm for detecting isomorphism, though it is guaranteed to find the correct answer, is quite inefficient. It actually gets to be horribly inefficient for even medium-sized graphs. When graphs increase in size, this algorithm gets to be infeasible because of the factorial complexity of generating permutations of vertex arrangements for the adjacency matrix.

---

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**
