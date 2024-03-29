type Name = String;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name{
    if (typeof n === "string"){
        return n;
    }
    else{
        return n();
    }
}

type Container<T> = {value: T};

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;