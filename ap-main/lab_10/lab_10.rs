fn find_negative_extremes_and_sum_cubes(arr: &[f64]) -> Option<f64> {
    let mut min_neg_index = None;
    let mut max_neg_index = None;

    
    for (i, &val) in arr.iter().enumerate() {
        if val < 0.0 {
            if min_neg_index.is_none() || val < arr[min_neg_index.unwrap()] {
                min_neg_index = Some(i);
            }
            if max_neg_index.is_none() || val > arr[max_neg_index.unwrap()] {
                max_neg_index = Some(i);
            }
        }
    }

    if min_neg_index.is_none() || max_neg_index.is_none() {
        return None;
    }

    let min_index = min_neg_index.unwrap();
    let max_index = max_neg_index.unwrap();

   
    let (start, end) = if min_index < max_index {
        (min_index + 1, max_index)
    } else {
        (max_index + 1, min_index)
    };

    
    let sum_cubes: f64 = arr[start..end].iter().map(|&x| x.powi(3)).sum();
    Some(sum_cubes)
}

fn main() {

    let array: [f64; 43] = [-5.0, 3.2, -2.3, 1.4, -7.5, 0.0, 2.8, -4.1, 6.5, -1.9, 3.3, -9.0, 4.8, -6.2, 7.4, -3.3, 5.6,
        8.2, -10.1, 9.3, 0.5, -8.6, 4.9, -2.7, 3.6, -7.8, 2.1, -4.5, 6.9, -3.8, 1.1, 5.0, -9.2, 7.3,
        -1.2, 8.4, 3.5, -6.6, 9.0, 2.4, -7.1, 4.2, 5.3
    ];


    println!("Масив: {:?}", array);


    match find_negative_extremes_and_sum_cubes(&array) {
        Some(sum_cubes) => println!(
            "Сума кубів елементів між найбільшим і найменшим від'ємними елементами: {:.4}",
            sum_cubes
        ),
        None => println!("У масиві недостатньо від'ємних елементів."),
    }
}