import {Component} from '@angular/core';

const LETTERS: Letters[] = [
    {
        "date": "27.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c18.234.445.445/s160x160/603183_109792849174770_89365760_n.jpg?oh=55c593ba0596d1042444e7952118acc8&oe=588848D8",
        "email": "aleksey_s.l@mail.ru",
        "msg": "С уважением, Алексей Линник, +37529-39-49-599..."
    },
    {
        "date": "26.10.2016",
        "avatar": "https://pp.vk.me/c626929/v626929171/2a8ec/DoHgDTWf-7o.jpg",
        "email": "sisyrinchium02@gmail.com",
        "msg": "я скачала в архиве ,но не вижу там какого-нибудь установочного файла..."
    },
    {
        "date": "25.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14292386_10207656969163298_8644833747012444966_n.jpg?oh=2c451f89b31bb0cf5cf52e64c0ddbbac&oe=588AD866",
        "email": "meliashkevich@gmail.com",
        "msg": "Вітаю Жэня! Вось Скайп Юрася Зянковіча: ziankovich..."
    },
    {
        "date": "14.10.2016",
        "avatar": "https://pp.vk.me/c837725/v837725529/96a/XnJKHMyeWyE.jpg",
        "email": "soldima@yandex.ru",
        "msg": "Папины справки для военкомата..."
    },
    {
        "date": "27.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c18.234.445.445/s160x160/603183_109792849174770_89365760_n.jpg?oh=55c593ba0596d1042444e7952118acc8&oe=588848D8",
        "email": "aleksey_s.l@mail.ru",
        "msg": "С уважением, Алексей Линник, +37529-39-49-599..."
    },
    {
        "date": "26.10.2016",
        "avatar": "https://pp.vk.me/c626929/v626929171/2a8ec/DoHgDTWf-7o.jpg",
        "email": "sisyrinchium02@gmail.com",
        "msg": "я скачала в архиве ,но не вижу там какого-нибудь установочного файла..."
    },
    {
        "date": "25.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14292386_10207656969163298_8644833747012444966_n.jpg?oh=2c451f89b31bb0cf5cf52e64c0ddbbac&oe=588AD866",
        "email": "meliashkevich@gmail.com",
        "msg": "Вітаю Жэня! Вось Скайп Юрася Зянковіча: ziankovich..."
    },
    {
        "date": "14.10.2016",
        "avatar": "https://pp.vk.me/c837725/v837725529/96a/XnJKHMyeWyE.jpg",
        "email": "soldima@yandex.ru",
        "msg": "Папины справки для военкомата..."
    },
    {
        "date": "27.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c18.234.445.445/s160x160/603183_109792849174770_89365760_n.jpg?oh=55c593ba0596d1042444e7952118acc8&oe=588848D8",
        "email": "aleksey_s.l@mail.ru",
        "msg": "С уважением, Алексей Линник, +37529-39-49-599..."
    },
    {
        "date": "26.10.2016",
        "avatar": "https://pp.vk.me/c626929/v626929171/2a8ec/DoHgDTWf-7o.jpg",
        "email": "sisyrinchium02@gmail.com",
        "msg": "я скачала в архиве ,но не вижу там какого-нибудь установочного файла..."
    },
    {
        "date": "25.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14292386_10207656969163298_8644833747012444966_n.jpg?oh=2c451f89b31bb0cf5cf52e64c0ddbbac&oe=588AD866",
        "email": "meliashkevich@gmail.com",
        "msg": "Вітаю Жэня! Вось Скайп Юрася Зянковіча: ziankovich..."
    },
    {
        "date": "14.10.2016",
        "avatar": "https://pp.vk.me/c837725/v837725529/96a/XnJKHMyeWyE.jpg",
        "email": "soldima@yandex.ru",
        "msg": "Папины справки для военкомата..."
    },
    {
        "date": "27.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c18.234.445.445/s160x160/603183_109792849174770_89365760_n.jpg?oh=55c593ba0596d1042444e7952118acc8&oe=588848D8",
        "email": "aleksey_s.l@mail.ru",
        "msg": "С уважением, Алексей Линник, +37529-39-49-599..."
    },
    {
        "date": "26.10.2016",
        "avatar": "https://pp.vk.me/c626929/v626929171/2a8ec/DoHgDTWf-7o.jpg",
        "email": "sisyrinchium02@gmail.com",
        "msg": "я скачала в архиве ,но не вижу там какого-нибудь установочного файла..."
    },
    {
        "date": "25.10.2016",
        "avatar": "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14292386_10207656969163298_8644833747012444966_n.jpg?oh=2c451f89b31bb0cf5cf52e64c0ddbbac&oe=588AD866",
        "email": "meliashkevich@gmail.com",
        "msg": "Вітаю Жэня! Вось Скайп Юрася Зянковіча: ziankovich..."
    },
    {
        "date": "14.10.2016",
        "avatar": "https://pp.vk.me/c837725/v837725529/96a/XnJKHMyeWyE.jpg",
        "email": "soldima@yandex.ru",
        "msg": "Папины справки для военкомата..."
    }
];

export class Letters {
    date: string;
    avatar: string;
    email: string;
    msg: string;
}

@Component({
    selector: 'mail-body',
    templateUrl: './app/tpl/mail-body.html'
})

export class MailBodyComponent {
    letters = LETTERS;
}