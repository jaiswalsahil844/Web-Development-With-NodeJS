let a = {
    p: 10,
    q: 'sahil',
    r: true
};

let b = Object.create(a);
b.x = 123;
b.y = 'sumit';
b.z = false;

let c = Object.create(b);
c.l = 364;
c.m = 'deepak';
c.n = true;
