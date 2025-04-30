function rearrangeMatrix(matrix, mapping) {
    let n = matrix.length;
    let return_matrix = new Array(n);

    for (let i = 0; i < n; i++) {
        return_matrix[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            return_matrix[i][j] = matrix[mapping[i]][mapping[j]];
        }
    }

    return return_matrix;
}

function permutations(arr) {
    // Base case: single-element array has one permutation (itself)
    if (arr.length === 1) return [arr];

    // ... alternatively, an empty array has no permutations
    if (arr.length === 0) return [];

    let perms = permutations(arr.slice(1)); // Returns an array of permutations for subarray after first element
    let first_elem = arr[0];
    let result = [];

    // Insert first element into all possible insertion spots for all permutations of arr[1:]
    for (let i = 0; i < perms.length; i++) {
        let p = perms[i];

        for (let j = 0; j <= p.length; j++) {
            let to_push = [...p];

            to_push.splice(j, 0, first_elem);

            result.push(to_push);
        }
    }

    return result;
}

function matricesEqual(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] !== B[i][j]) return false;
        }
    }

    return true;
}


function are_isomorphic(graph1, graph2) {
    // Generate permutations of [0, 1, ..., n] (array of positions)
    let n = graph2.length;
    let array_to_permute = new Array(n)
    for (let i = 0; i < n; i++) {
        array_to_permute[i] = i;
    }
    let perms = permutations(array_to_permute);

    // Brute-force checking of all permutations (potential mappings) to second graph
    // If rearrangement results in being the same as first graph, they are isomorphic
    for (let i = 0; i < perms.length; i++) {
        let mapping = perms[i];
        let result = rearrangeMatrix(graph2, mapping);

        if (matricesEqual(result, graph1)) return true;
    }

    // If getting here, no match was found --> graphs aren't isomorphic
    return false;
}