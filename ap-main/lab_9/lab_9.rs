fn factorial(n: u32) -> f64 {
    (1..=n).fold(1.0, |acc, x| acc * x as f64)
}

fn power_series(x: f64, n: usize) -> f64 {
    let mut sum = 1.0;
    let mut term = 1.0;

    for i in 1..=n {
        term *= 2.0 * x / i as f64;
        sum += term;
    }
    sum
}

fn power_series_with_precision(x: f64, epsilon: f64) -> f64 {
    let mut sum = 1.0;
    let mut term: f64 = 1.0;
    let mut i = 1;

    while term.abs() > epsilon {
        term *= 2.0 * x / i as f64;
        sum += term;
        i += 1;
    }
    sum
}

fn exact_value(x: f64) -> f64 {
    (2.0 * x).exp()
}

fn main() {
    let a = 0.0;
    let b = 1.0;
    let k = 10;
    let n = 5;
    let epsilon = 0.0001;

    let step = (b - a) / (k - 1) as f64;

    println!("{:<8} {:<15} {:<15} {:<15}", "x", "Exact", "Series (n)", "Series (ε)");
    for i in 0..k {
        let x = a + i as f64 * step;

        let exact = exact_value(x);
        let approx_n = power_series(x, n);
        let approx_epsilon = power_series_with_precision(x, epsilon);

        println!(
            "{:<8.4} {:<15.8} {:<15.8} {:<15.8}",
            x, exact, approx_n, approx_epsilon
        );
    }
}