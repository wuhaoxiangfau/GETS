import AbstractServiceInterface from "./AbstractServiceInterface";

export enum KeyBoard{
    A='A',
    B='B',
    C='C',
    D='D',
    F='F',
    Q='Q',
    W='W',
    E='E',
    R='R',
    T='T',
    Y='Y',
    U='U',
    I='I',
    O='O',
    P='P',
    S='S',
    G='G',
    H='G',
    J='J',
    K='K',
    L='L',
    Z='Z',
    X='X',
    V='V',
    N='N',
    M='M',
    q='q',
    w='w',
    e='e',
    r='r',
    t='t',
    y='y',
    u='u',
    i='i',
    o='o',
    p='p',
    a='a',
    s='s',
    d='d',
    f='f',
    g='g',
    h='h',
    j='j',
    k='k',
    l='l',
    z='z',
    x='x',
    c='c',
    v='v',
    b='b',
    n='n',
    m='m',
    SHIFT='Shift',
    LEFT='ArrowLeft',
    RIGHT='ArrowRight',
    UP='ArrowUp',
    DOWN='ArrowDown',
}

export default interface InputServiceInterface extends AbstractServiceInterface {

    keyDown(keyBoard: KeyBoard): boolean;

    keyUp(keyBoard: KeyBoard): boolean;

    isKeyDown(keyBoard: KeyBoard): boolean;

    isKeyUp(keyBoard: KeyBoard): boolean;

    onKeyDown(keyBoard: KeyBoard, fun: Function): void;

    onKeyUp( keyBoard:KeyBoard, fun: Function): void;

    updated():void;
}
