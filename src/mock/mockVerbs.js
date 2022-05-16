import {shuffle} from "../utils/utils";

export const regularVerbs = [
  {"": ""},
  {"arrive": ["[əˈraɪv]", "прибывать, прибыть", ]},
  {"ascend": ["[əˈsend]", "восходить, подниматься", ]},
  {"avoid": ["[əˈvɔɪd]", "избегать, избежание", ]},
  {"brake": ["[breɪk]", "тормозить, тормоз, тормозной", ]},
  // {"catch up": ["[kætʃ", "догонять", ]},
  {"climb": [ "[klaɪm]", "взбираться,, подъем",]},
  {"cross": ["[krɒs]", "пересекать,, крест, кросс", ]},
  {"descend": ["[dɪˈsend]", "спускаться", ]},
  {"drop": ["[drɒp]", "ронять, падать", ]},
  {"drown": ["[draʊn]", "тонуть", ]},
  {"emerge": ["[ɪˈmɜːdʒ]", "всплывать,, появляться", ]},
  {"enter": ["[ˈentə]", "входить, вводить", ]},
  {"escape": ["[ɪˈskeɪp]", "убежать,, побег", ]},
  {"float": [ "[fləʊt]", "держаться на поверхности воды, не тонуть,, плавать, плавающий, поплавок",]},
  {"flow": ["[fləʊ]", "течь,, поток, протекать", ]},
  // {"fly": ["[flaɪ]", "лететь,, муха", ]},
  {"follow": ["[ˈfɒləʊ]", "следовать", ]},
  {"hurry": ["[ˈhʌri]", "спешить,, спешка", ]},
  {"lower": ["[ˈləʊə]", "опускать,, понизить, ниже", ]},
  {"move": ["[muːv]", "двигать(ся)", ]},
  {"pass": ["[pɑːs]", "проходить,, пасс, пас, передача, пропуск", ]},
  {"plunge": ["[plʌndʒ]", "нырять, окунаться", ]},
  {"pursue": ["[pəˈsjuː]", "преследовать", ]},
  {"lift": ["поднимать"]},
  {"reach, attain": ["[riːtʃ,", "достигать", ]},
  {"return": ["[rɪˈtɜːn]", "возвращаться", ]},
  {"roll": ["[rəʊl]", "катить(ся),, рулон, рулет", ]},
  {"rotate": ["[rəʊˈteɪt]", "вращаться", ]},
  {"row": ["[rəʊ]", "грести,, ряд", ]},
  // {"sail": ["[seɪl]", "идти под парусом", ]},
  {"skate": ["[skeɪt]", "кататься на коньках", ]},
  {"ski": ["[skiː]", "кататься на лыжах", ]},
  {"stop": ["[stɒp]", "останавливать(ся), прекращать,, остановка", ]},
  {"surpass": ["[səˈpɑːs]", "превосходить", ]},
  {"turn": ["[tɜːn]", "поворачивать(ся)", ]},
  {"walk": ["[wɔːk]", "идти, гулять", ]},
  // {"wave": ["[weɪv]", "махать рукой", ]},
  {"appear": ["[əˈpɪə]", "появляться", ]},
  {"cease": ["[siːs]", "переставать,, прекращать, прекращение", ]},
  {"complete": ["[kəmˈpliːt]", "завершать,, полный", ]},
  {"continue": ["[kənˈtɪnjuː,", "продолжать(ся)", ]}, // "continue, go on"
  {"delay": ["[dɪˈleɪ]", "задерживать,, задержка", ]},
  {"finish": ["[ˈfɪnɪʃ,]", "—завершать(ся)", ]},
  {"grow": ["[ɡrəʊ]", "расти", ]},
  {"last": ["[lɑːst]", "длиться,, последний", ]},
  {"prepare": [ "[prɪˈpeə]", "готовиться",]},
  {"postpone": ["[pəʊstˈpəʊn]", "откладывать, отсрачивать", ]}, // "put off, postpone"
  {"repeat": ["[rɪˈpiːt]", "повторять", ]},
  {"resume": ["[rɪˈzjuːm]", "возобновлять"]},
  {"suspend": ["[səˈspend]", "приостанавливать"]},
  {"accumulate": ["[əˈkjuːmjəleɪt]", "накапливать"]},
  {"add": ["[æd]", "добавлять, прибавлять"]},
  {"belong": ["[bɪˈlɒŋ]", "принадлежать"]},
  {"collect": ["[kəˈlekt]", "собирать"]},
  {"consume": ["[kənˈsjuːm]", "потреблять"]},
  {"contain": ["[kənˈteɪn]", "содержать"]},
  {"damage": ["[ˈdæmɪdʒ]", "повреждать,, урон, ущерб"]},
  {"eliminate": ["[ɪˈlɪmɪneɪt]", "устранять"]},
  {"empty": ["[ˈempti]", "опорожнять,, пустой"]},
  {"exclude": ["[ɪkˈskluːd]", "исключать"]},
  {"exist": ["[ɪɡˈzɪst]", "существовать"]},
  {"fill": ["[fɪl]", "наполнять"]},
  {"gather": ["[ˈɡæðə]", "собирать(ся)"]},
  {"include": ["[ɪnˈkluːd]", "включать"]},
  {"locate": ["[ləʊˈkeɪt]", "определять местонахождение"]},
  {"maintain": ["[meɪnˈteɪn]", "поддерживать"]},
  {"need": ["[niːd]", "нуждаться,, нужно"]},
  {"place": ["[ˈpleɪs]", "помещать,, место"]},
  {"possess": ["[pəˈzes]", "владеть"]},
  {"preserve": ["[prɪˈzɜːv]", "сохранять"]},
  {"reduce": ["[rɪˈdjuːs]", "сокращать,, уменьшать"]},
  {"remain": ["[rɪˈmeɪn,", "оставаться"]},
  {"require": ["[rɪˈkwaɪə]", "требовать"]},
  {"retain": ["[rɪˈteɪn]", "сохранять за собой,, удерживать"]},
  {"stay": ["[steɪ]", "пребывать"]},
  {"store": ["[stɔː]", "хранить"]},
  {"act": ["[ækt]", "действовать"]},
  {"apply": ["[əˈplaɪ]", "применять"]},
  {"assemble": ["[əˈsembl̩]", "собирать"]},
  {"disassemble": ["[ˌdɪsəˈsembl̩]", "разбирать"]},
  {"attach": ["[əˈtætʃ]", "присоединять"]},
  {"perform": ["[pəˈfɔːm]", "выполнять"]}, // "carry out, perform, fulfil"
  {"conduct": ["[kənˈdʌkt]", "проводить,, поведение"]},
  {"connect": ["[kəˈnekt]", "соединять"]},
  {"control, verify": ["[kənˈtrəʊl,", "проверять"]},
  {"cover": ["[ˈkʌvə]", "накрывать"]},
  {"destroy": ["[dɪˈstroɪ,", "разрушать"]}, // "destroy, demolish"
  {"dilute": ["[daɪˈljuːt]", "разбавлять,, разбавленный"]},
  {"dissolve": ["[dɪˈzɒlv]", "растворять"]},
  {"dry": ["[draɪ]", "сушить"]},
  {"envelop, wrap": ["[ɪnˈveləp, ræp", "завернуть,, обертка"]},
  {"filter": ["[ˈfɪltə]", "фильтровать,, фильтр"]},
  // {"fit": ["[fɪt,", "соответствовать, отрегулировать"]}, // "fit, adjust"
  {"fix": ["[fɪks]", "закреплять"]},
  {"function": ["[ˈfʌŋkʃn̩]", "функционировать,, функция"]},
  {"lock": ["[lɒk]", "запирать,, замок"]},
  {"manufacture": ["[ˌmænjʊˈfæktʃə]", "изготовлять,, производство"]},
  {"mix": ["[mɪks]", "смешивать,, смешивание"]},
  {"moisten": ["[ˈmɔɪsn̩]", "смачивать"]},
  {"nail": ["[neɪl]", "прибить гвоздем,, прибивать, гвоздь"]},
  {"open": ["[ˈəʊpən]", "открывать"]},
  {"pick up": ["[pɪk", "подбирать"]},
  {"pour": ["[pɔː]", "лить"]},
  {"prepare": ["[prɪˈpeə]", "готовить"]},
  {"produce": ["[prəˈdjuːs]", "производить,, продукция"]},
  {"pull": ["[pʊl]", "тянуть"]},
  {"push": ["[pʊʃ]", "толкать,, толчок"]},
  {"repair": ["[rɪˈpeə]", "ремонтировать,, ремонт"]},
  {"replace": ["[rɪˈpleɪs]", "заменять"]},
  {"rub": ["[rʌb]", "тереть"]},
  {"scatter": ["[ˈskætə]", "разбрасывать"]},
  {"scrape": ["[skreɪp]", "скрести"]},
  {"scratch": ["[skrætʃ]", "царапать"]},
  {"screw": ["[skruː]", "прикручивать (гайкой, винтом),, винт"]},
  {"search": ["[sɜːtʃ]", "искать"]},
  {"close": "закрывать"},
  {"glue": ["[glu]", "приклеить"]},
  // {"substitute": ["[ˈsʌbstɪtjuːt]", "заменять"]},
  {"test": ["[test]", "испытывать"]},
  {"tie": ["[taɪ]", "завязывать, привязывать,, галстук"]},
  {"touch": ["[tʌtʃ]", "касаться,, трогать"]},
  {"undo": ["[ʌnˈduː]", "отменить"]},
  {"unfasten": ["[ʌnˈfɑːsn̩]", "растегнуть, отстегивать"]},
  {"use": ["[ˈjuːs]", "использовать"]},
  {"wash": ["[wɒʃ]", "мыть,, стирать"]},
  {"water": ["[ˈwɔːtə]", "поливать,, вода"]},
  {"weld": ["[weld]", "приварить"]},
  {"work": ["[ˈwɜːk]", "работать"]},
  {"accuse": ["[əˈkjuːz]", "обвинять"]},
  {"admire": ["[ədˈmaɪə]", "восхищаться"]},
  {"adore": ["[əˈdɔː]", "обожать"]},
  {"agitate": ["[ˈædʒɪteɪt]", "волновать,, агитировать"]},
  {"believe": ["[bɪˈliːv]", "верить"]},
  {"boast": ["[bəʊst]", "хвастаться"]},
  {"calm down": ["[kɑːm", "успокоиться"]},
  {"care": ["[keə]", "заботиться"]},
  {"comfort": ["[ˈkʌmfət]", "утешать,, комфорт"]},
  {"complain": ["[kəmˈpleɪn]", "жаловаться"]},
  {"cry": ["[kraɪ]", "плакать, кричать,, крик"]},
  {"dislike": ["[dɪsˈlaɪk]", "не любить, не нравиться"]},
  {"disregard": ["[ˌdɪsrɪˈɡɑːd]", "не обращать внимания, игнорировать"]},
  {"doubt": ["[daʊt]", "сомневаться"]},
  {"endure": ["[ɪnˈdjʊə]", "терпеть"]},
  {"enjoy": ["[ɪnˈdʒoɪ]", "наслаждаться"]},
  {"envy": ["[ˈenvi]", "завидовать"]},
  {"esteem": ["[ɪˈstiːm]", "ценить"]},
  {"excite": ["[ɪkˈsaɪt]", "возбуждать"]},
  {"fall in love": ["[fɔːl : lʌv]", "влюбиться"]},
  {"fear": ["[fɪə]", "бояться"]},
  {"feel": ["[fiːl]", "чувствовать"]},
  {"scare": ["[ˈfraɪtn̩, [skeə(r)]", "пугать"]}, // frighten,
  {"hate, detest": ["[heɪt,", "ненавидеть"]},
  {"hesitate": ["[ˈhezɪteɪt]", "колебаться,, стесняться"]},
  {"hope": ["[həʊp]", "надеяться,, надежда"]},
  {"laugh": ["[lɑːf]", "смеяться"]},
  {"like": ["[ˈlaɪk]", "любить, нравиться"]},
  {"neglect": ["[nɪˈɡlekt]", "пренебрегать"]},
  {"offend": ["[əˈfend]", "оскорблять"]},
  {"praise": ["[preɪz]", "хвалить,, хвала"]},
  {"prefer": ["[prɪˈfɜː]", "предпочитать"]},
  {"quarrel": ["[ˈkwɒrəl]", "ссориться,, ссора"]},
  {"rejoice": ["[rɪˈdʒɔɪs]", "радоваться, веселиться"]},
  {"rely": ["[rɪˈlaɪ]", "полагаться"]},
  {"reproach": ["[rɪˈprəʊtʃ]", "упрекать,, упрек"]},
  {"respect": ["[rɪˈspekt]", "уважать"]},
  {"scold": ["[skəʊld]", "бранить,, ругать"]},
  {"shirk": ["[ʃɜːk]", "увиливать"]},
  {"smile": ["[smaɪl]", "улыбаться,, улыбка"]},
  {"suffer": ["[ˈsʌfə]", "страдать"]},
  {"surprise": ["[səˈpraɪz, : əˈmeɪz]", "удивлять"]}, // , astonish, amaze
  {"surrender": ["[səˈrendə]", "капитулировать,, сдаваться, сдача, капитуляция"]},
  {"suspect": ["[səˈspekt]", "подозревать,, подозреваемый"]},
  {"worry": ["[ˈwʌri]", "беспокоиться"]},
  {"wound": ["[wuːnd]", "ранить"]},
  {"ache": ["[eɪk]", "болеть,, боль"]},
  {"bake": ["[beɪk]", "печь"]},
  {"boil": ["[bɔɪl]", "кипятить, кипеть"]},
  {"breathe": ["[briːð]", "дышать"]},
  {"bury": ["[ˈberi]", "хоронить"]},
  {"chew": ["[tʃuː]", "жевать"]},
  {"cook": ["[kʊk]", "готовить (пищу),, повар"]},
  {"cough": ["[kɒf]", "кашлять,, кашель"]},
  {"cure": ["[kjʊə]", "излечивать,, лечение"]},
  {"die": ["[daɪ]", "умирать"]},
  {"dismiss": ["[dɪzˈmɪs]", "увольнять"]},
  {"dress": ["[dres]", "одевать(ся),, платье"]},
  {"dry oneself": ["[draɪ", "вытираться"]},
  {"earn": ["[ɜːn]", "зарабатывать"]},
  {"economize": ["[ɪˈkɒnəmaɪz]", "экономить"]},
  {"employ": ["[ɪmˈploɪ]", "использовать, применять"]},
  {"fry": ["[fraɪ]", "жарить"]},
  {"heal": ["[hiːl]", "заживать, заживлять,, лечить, исцелять"]},
  {"iron": ["[ˈaɪən]", "гладить,, железо, утюг"]},
  {"live": ["[laɪv]", "жить,, реальный, живой, в прямом эфире"]},
  {"marry": ["[ˈmæri]", "жениться"]},
  {"name": ["[ˈneɪm]", "называть,, имя, название"]},
  {"order": ["[ˈɔːdə]", "заказывать,, заказ, ордер"]},
  {"recover": ["[rɪˈkʌvə]", "восстонавливать"]},
  {"rest": ["[rest]", "отдыхать,, отдых"]},
  {"save": ["[seɪv]", "сберегать, копить, спасать"]},
  {"sneeze": ["[sniːz]", "чихать,, чиханье"]},
  {"stew": ["[stjuː]", "тушить (овощи, мясо)"]},
  {"suit": ["[suːt]", "идти (об одежде)"]},
  {"swallow": ["[ˈswɒləʊ]", "глотать,, ласточка, глоток"]},
  // {"treat": ["[triːt]", "лечить"]},
  // {"waste": ["[weɪst]", "тратить понапрасну"]},
  {"weaken": ["[ˈwiːkən]", "слабеть"]},
  {"work": ["[ˈwɜːk]", "работать"]},
  {"analyse": ["[ˈænəlaɪz]", "анализировать"]},
  {"calculate": ["[ˈkælkjʊleɪt]", "вычислять"]},
  {"compare": ["[kəmˈpeə]", "сравнивать"]},
  {"conclude": ["[kənˈkluːd]", "делать вывод"]},
  {"consider": ["[kənˈsɪdə]", "рассматривать"]},
  {"convince": ["[kənˈvɪns]", "убеждать"]},
  {"correct": ["[kəˈrekt]", "исправлять"]},
  {"count": ["[kaʊnt]", "считать"]},
  {"decide": ["[dɪˈsaɪd]", "решать"]},
  {"describe": ["[dɪˈskraɪb]", "описывать"]},
  {"develop": ["[dɪˈveləp]", "разработать"]},
  {"discover": ["[dɪˈskʌvə]", "открывать"]},
  {"distinguish": ["[dɪˈstɪŋɡwɪʃ]", "различать"]},
  {"divide": ["[dɪˈvaɪd]", "делить"]},
  {"examine": ["[ɪɡˈzæmɪn]", "проверять"]},
  {"expect": ["[ɪkˈspekt]", "ожидать"]},
  {"experiment": ["[ɪkˈsperɪmənt]", "экспериментировать"]},
  {"explain": ["[ɪkˈspleɪn]", "объяснять"]},
  {"express": ["[ɪkˈspres]", "выражать,,экспресс"]},
  // {"find out": ["[faɪnd out]", "выяснять"]},
  {"inquire": ["[ɪnˈkwaɪə]", "расследовать"]},
  {"invent": ["[ɪnˈvent]", "изобретать"]},
  {"listen": ["[ˈlɪsn̩]", "слушать"]},
  {"look": ["[lʊk]", "смотреть"]},
  {"memorize": ["[ˈmeməraɪz]", "заучивать, запоминать"]},
  {"multiply": ["[ˈmʌltɪplaɪ]", "умножать"]},
  {"observe": ["[əbˈzɜːv]", "наблюдать"]},
  {"recognize": ["[ˈrekəɡnaɪz]", "узнавать,, распозновать"]},
  {"relate": ["[rɪˈleɪt]", "относиться"]},
  {"remember": ["[rɪˈmembə,", "помнить"]},
  {"research": ["[rɪˈsɜːtʃ]", "исследовать,, иследование, иследовательский"]},
  {"retell": ["[ˌriːˈtel]", "пересказать"]},
  {"subtract": ["[səbˈtrækt]", "вычитать"]},
  {"suppose": ["[səˈpəʊz]", "предполагать"]},
  {"translate": ["[trænzˈleɪt]", "переводить"]},
  {"watch": ["[wɒtʃ]", "следить, наблюдать"]},
  {"accept": ["[əkˈsept]", "принимать"]},
  // {"acquit": ["[əˈkwɪt]", "оправдать"]},
  {"address": ["[əˈdres]", "обращаться,, адрес"]},
  {"advise": ["[ədˈvaɪz]", "советовать"]},
  {"announce": ["[əˈnaʊns]", "объявлять"]},
  {"answer, reply": ["[ˈɑːnsə,", "отвечать"]},
  {"apologize": ["[əˈpɒlədʒaɪz]", "извиняться"]},
  {"ask": ["[ɑːsk]", "спрашивать, просить"]},
  {"beg": ["[beɡ]", "просить"]},
  {"borrow": ["[ˈbɒrəʊ]", "брать взаймы"]},
  // {"bribe": ["[braɪb]", "подкупать"]},
  {"call": ["[kɔːl]", "звать,, вызов"]},
  {"congratulate": ["[kənˈɡrætʃʊleɪt]", "поздравлять"]},
  {"contribute": ["[kənˈtrɪbjuːt]", "способствовать, вносить вклад"]},
  {"convict": ["[kənˈvɪkt]", "признать виновным"]},
  // {"cry": ["[kraɪ]", "кричать"]},
  {"demand": ["[dɪˈmɑːnd]", "требовать, требование"]},
  {"disturb": ["[dɪˈstɜːb]", "мешать, беспокоить"]},
  {"excuse": ["[ɪkˈskjuːz]", "извинять"]},
  {"explain": ["[ɪkˈspleɪn]", "объяснять"]},
  {"receive": ['[rɪˈsiːv]', "получать, принимать, воспринимать"]},
  {"greet": ["[ɡriːt]", "приветствовать"]},
  {"help, assist": ["[help [əˈsɪst]", "помогать"]},
  {"hire": ["[ˈhaɪə]", "нанимать,, прокат"]},
  {"inform": ["[ɪnˈfɔːm]", "информировать"]},
  {"introduce, present (to)": ["[ˌɪntrəˈdjuːs,", "представлять"]},
  {"investigate": ["[ɪnˈvestɪɡeɪt]", "расследовать"]},
  {"invite": ["[ɪnˈvaɪt]", "приглашать"]},
  {"judge": ["[dʒʌdʒ]", "судить"]},
  {"lease": ["[liːs]", "брать или давать напрокат"]},
  // {"lend": ["[lend]", "давать на время"]},
  {"offend": ["[əˈfend]", "оскорблять"]},
  {"offer, suggest": ["[ˈɒfə, [səˈdʒest]", "предлагать"]},
  {"present (with)": ["[prɪˈzent", "дарить"]},
  {"pronounce": ["[prəˈnaʊns]", "произносить"]},
  {"propose": ["[prəˈpəʊz]", "предлагать"]},
  {"provide, supply": ["[prəˈvaɪd,", "снабжать"]},
  {"punish": ["[ˈpʌnɪʃ]", "наказывать"]},
  {"reject": ["[rɪˈdʒekt]", "отвергать,, отклонять"]},
  {"rent": ["[rent]", "прокат"]},
  {"request": ["[rɪˈkwest]", "просить, запрашивать"]},
  {"slander": ["[ˈslɑːndə]", "клеветать,, клевета"]},
  {"talk": "говорить"},
  {"stammer": ["[ˈstæmə]", "заикаться,, заикание"]},
  {"state": ["[steɪt]", "заявлять,, состояние, государство, государственный"]},
  {"suggest": ["[səˈdʒest]", "предлагать (идею)"]},
  {"thank": ["[θæŋk]", "благодарить"]},
  {"trouble": ["[ˈtrʌbl̩,", "беспокоить"]}, // "trouble, bother"
  {"visit": ["[ˈvɪzɪt]", "посещать"]},
  {"wait": ["[weɪt]", "ждать,, ожидание"]},
  {"warn": ["[wɔːn]", "предупреждать"]},
  {"welcome": ["[ˈwelkəm]", "тепло встречать"]},
  {"whisper": ["[ˈwɪspə]", "шептать,, шепот"]},
  {"withhold": ["[wɪðˈhəʊld]", "удерживать"]},
  {"attack": ["[əˈtæk]", "нападать"]},
  {"bomb": ["[bɒm]", "бомбить"]},
  {"capture": ["[ˈkæptʃə]", "захватить"]},
  {"conquer": ["[ˈkɒŋkə]", "завоевывать"]},
  {"defeat": ["[dɪˈfiːt]", "нанести поражение"]},
  {"defend": ["[dɪˈfend]", "защищать"]},
  // {"disarm": ["[dɪsˈɑːm]", "разоружать"]},
  {"expel": ["[ɪkˈspel,", "изгнать"]},
  // {"fight": ["[faɪt]", "сражаться,, бой, борьба"]},
  {"fire": ["[ˈfaɪə]", "обстреливать,,  огонь, пажар"]},
  {"invade": ["[ɪnˈveɪd]", "вторгаться"]},
  {"kill": ["[kɪl]", "убить"]},
  {"liberate": ["[ˈlɪbəreɪt]", "освобождать"]},
  {"miss": ["[mɪs]", "промахнуться,, скучать"]},
  {"occupy": ["[ˈɒkjʊpaɪ]", "оккупировать"]},
  {"overcome": ["[ˌəʊvəˈkʌm]", "преодолеть"]},
  {"point": ["[pɔɪnt]", "направлять,, точка"]},
  {"resist": ["[rɪˈzɪst]", "сопротивляться"]},
  // {"struggle": ["[ˈstrʌɡl̩]", "бороться"]},
  {"submit": "подавать, подчиняться, покорять"},
  {"surrender": ["[səˈrendə]", "сдаться"]},
  {"threaten, menace": ["[ˈθretn̩, [ˈmen.ɪs]", "угрожать, угроза, опасность, зануда"]},
  {"wound": ["[wuːnd]", "ранить"]},
  {"yield": ["[jiːld]", "поддаться"]},
];



// https://iloveenglish.ru/theory/anglijskaya_grammatika/pravilnie_i_nepravilnie_glagoli_anglijskogo_yazika
export const irregularVerbs = [
  {"": ""},
  // {"abide abode abode": "пребывать, придерживаться чего-либо"},
  // {"arise arose arisen": "возникать,, появляться"},
  {"awake awoke awoken": "будить, просыпаться"},
  {"be was;were been": "быть, являться, находиться"},
  {"bear bore born": "нести, перевозить, выдерживать, рождать, медведь"},
  {"beat beat beaten": "бить, ударять, колотить, опережать, ритм, такт"},
  {"become became become": "стать, становиться, делаться"},
  // {"befall befell befallen": "случаться"},
  {"begin began begun": "начинать(ся)"},
  {"behold beheld beheld": "вглядываться, замечать"},
  {"bend bent bent": "гнуть(ся), сгибать(ся), изгиб, наклоняться"},
  // {"beseech besought besought": "умолять, упрашивать"},
  {"beset beset beset": "окружать, осаждать"},

  {"bet bet bet": "держать пари"},
  {"bid bid bid": "предлагать цену, велеть, просить"},
  {"bind bound bound": "связывать, связать, привязывать"},
  {"bite bit bitten": "кусать, кусаться, укусить"},
  // {"bleed bled bled": "кровоточить, опорожнять"},
  {"blow blew blown": "дуть, дунуть, взрывать"},
  {"break broke broken": "ломать, прерывать, разбивать, перерыв"},
  // {"breed bred bred": "порождать, разводить, выводить"},
  {"bring brought brought": "приносить, приводить"},
  {"broadcast broadcast broadcast": "вещать, распространять,, транслировать, вещать, передавать по радио или телевидению"},
  {"build built built": "строить, встраивать"},
  {"burn burnt burnt": "гореть, сжигать, жечь, обжечь"},
  {"burst burst burst": "взрывать(ся), лопнуть, лопаться"},
  {"buy bought bought": "покупать, купить"},
  {"can could could": "мочь физически"},
  {"cast cast cast": "бросать, лить (металл), отбрасывать, забрасывать"},
  {"catch caught caught": "ловить, схватывать"},
  {"choose chose chosen": "выбирать"},
  // {"cling clung clung": "прилипать, цеплять, льнуть, держаться"},
  // {"cleave cleft cloven": "рассечь, расколоть"},
  {"clothe clothed clothed": "одеть, одевать"},
  {"come came come": "приходить, приезжать, приехать, наступить"},
  {"cost cost cost": "оценивать, стоить"},
  {"creep crept crept": "ползать, ползти, подкрадываться, crawl"},
  {"cut cut cut": "резать, обрезать, отрезать, разрезать,, порез"},

  // {"dare durst dared": "сметь"},
  {"deal dealt dealt": "иметь дело, торговать, рассматривать вопрос"},
  {"dig dug dug": "копать, рыть, выкапывать"},
  {"dive dove dived": "нырять, погружение"},
  {"do/does did done": "делать"},
  {"draw drew drawn": "тащить, чертить, рисовать"},
  {"dream dreamt dreamt": "видеть сны, мечтать, сниться, видеть во сне"},
  {"drink drank drunk": "пить, выпивать, напиток"},
  {"drive drove driven": "ехать, везти, водить, гнать"},
  // {"dwell dwelt dwelt": "обитать, пребывать, задерживаться на чем-либо"},
  {"eat ate eaten": "есть, принимать пищу, кушать"},
  {"fall fell fallen": "падать, снижаться, опускаться"},
  {"feed fed fed": "кормить(ся)"},
  {"feel felt felt": "чувствовать, почувствовать, ощущать, испытывать"},
  {"fight fought fought": "бороться, сражаться, воевать"},
  {"find found found": "находить, находиться"},
  {"fit fit fit": "подходить, годиться, соответствовать, приспосабливать"},
  // {"flee fled fled": "бежать, спасаться бегством"},
  // {"fling flung flung": "кидать, бросать, швырять, кидаться"},
  {"fly flew flown": "летать, пролетать, лететь, полетать"},
  {"forbid forbade forbidden": "запрещать"},
  {"forecast forecast forecast": "предвидеть, предсказывать"},
  {"forget forgot forgotten": "забывать"},
  // {"forego forewent foregone": "отказываться, воздерживаться"},
  // {"foretell foretold foretold": "предсказывать, прогнозировать"},

  {"forgive forgave forgiven": "прощать,"},
  // {"forsake forsook forsaken": "бросать, отказываться"},
  {"freeze froze frozen": "замерзать, замораживать"},
  {"get got got": "получать, становиться"},
  // {"gild gilt gilt":"позолотить"},
  {"give gave given": "давать"},
  {"go went gone": "идти, ехать, ходить, ездить"},
  // {"grind ground ground": "точить, молоть"},
  {"grow grew grown": "расти, выращивать"},
  {"hang hung hung": "висеть, вешать, вырастать, отрастать"},
  {"have had had": "иметь, обладать"},
  // {"hew hewed hewed": "рубить, тесать"},
  {"hear heard heard": "слышать, услышать"},
  {"hide hid hidden": "прятать, прятаться, скрывать, скрываться"},
  {"hit hit hit": "ударять, поражать, бить, удариться"},
  {"hold held held": "держать, поддерживать (владеть)"},
  {"hurt hurt hurt": "повредить, причинять боль, ранить"},
  {"keep kept kept": "держать, хранить, сохранять"},
  {"kneel knelt knelt": "становиться на колени"},
  // {"knit knit knit": "вязать, объединяться, связывать, соединять(ся), срастаться"},
  {"know knew known": "знать, узнавать"},
  {"lay laid laid": "класть, накрывать"},
  {"lead led led": "вести, сопровождать, приводить, руководить, возглавлять"},
  {"lean leant leant": "опираться, прислоняться"},
  {"leap leapt leapt": "скакать, прыгать, подскакивать, резко подскочить"},
  {"learn learnt learnt": "учиться, научиться, учить, разучивать, узнавать"},
  {"leave left left": "оставлять, покидать, уходить, уезжать"},
  // {"lend lent lent": "предоставлять, одалживать, давать взаймы"},
  {"let let let": "позволять, разрешать, сдавать в наём"},
  {"lie lay lain": "лежать"},
  {"light lit lit": "зажигать, освещать"},
  {"lose lost lost": "терять, проигрывать"},
  {"make made made": "делать, заставлять, производить, изготавливать"},
  {"may might might": "мочь, иметь право"},

  {"mean meant meant": "означать, значить, подразумевать"},
  {"meet met met": "встречать, встречаться, знакомиться"},
  {"mishear misheard misheard": "ослышаться"},
  {"mislay mislaid mislaid": "класть не на место"},
  {"mistake mistook mistaken": "ошибаться, заблуждаться"},
  // {"mow mowed mown": "косить, жать"},
  // {"overtake overtook overtaken": "догнать"},
  {"pay paid paid": "платить, заплатить, оплачивать"},
  {"prove proved proved": "доказывать, удостоверять"},
  {"put put put": "класть, положить, ставить, помещать"},
  {"quit quit quit": "бросать, покидать, прекращать, увольняться"},
  {"read read read": "читать"},
  {"rebuild rebuilt rebuilt": "перестраивать, восстанавливать"},
  {"rid rid rid": "освобождать, избавлять"},
  {"ride rode ridden": "ехать верхом, в машине. поездка"},
  {"ring rang rung": "звонить, звенеть"},
  {"rise rose risen": "подниматься, восходить, повышаться, возрастать"},
  {"run ran run": "бежать, бегать, течь"},
  // {"saw sawed sawn": "пилить, распиливать"},
  {"say said said": "говорить, сказать, произносить"},
  {"see saw seen": "видеть, увидеть"},
  // {"seek sought sought": "искать, стремиться, добиваться"},
  {"sell sold sold": "продавать, продаваться, торговать"},
  {"send sent sent": "посылать, отправлять"},
  {"set set set": "помещать, ставить"},
  // {"sew sewed sewn": "шить, пришивать, зашивать"},
  {"shake shook shaken": "трясти, качать, раскачивать, трястись"},
  {"shall should should": "быть должным, следует"},
  {"shave shaved shaved": "брить(ся)"},
  // {"shear sheared shorn": "стричь, резать; лишать"},
  // {"shed shed shed": "сбрасывать, проливать"},
  // {"shine shone shone": "сиять, светить, блестеть, светиться"},
  // {"shoe shod shod": "обувать, подковывать"},
  {"shoot shot shot": "стрелять, расстрелять, застрелить"},
  {"show showed shown": "показывать, демонстрировать"},
  {"shrink shrank shrunk": "уменьшаться, сокращаться, сжиматься, сокращать, давать усадку, отскочить, отпрянуть"},

  {"shut shut shut": "закрывать, запирать, закрываться, запираться"},
  {"sing sang sung": "петь, спеть"},
  {"sink sank sunk": "опускаться, погружаться,, потопить, раковина"},
  {"sit sat sat": "сидеть"},
  {"slay slew slain": "убивать, уничтожать"},
  {"sleep slept slept": "спать, засыпать"},
  {"slide slid slid": "скользить, горка,слайд"},
  // {"sling slung slung":"швырять, швырнуть, вешать через плечо, подвешивать"},
  //{"slit slit slit":"резать в длину, вдоль"},
  {"smell smelt smelt": "пахнуть, нюхать"},
  // {"sow sowed sown": "сеять, посеять, засеять, высеивать"},
  {"speak spoke spoken": "говорить"},
  {"speed sped sped": "спешить, ускорять, скорость"},
  // {"spell spelt spelt":"писать, произносить слово по буквам"},
  {"spend spent spent": "тратить, истощать"},
  {"spill spilt spilt": "проливать, разливать"},
  {"spin spun spun":"прясть, крутить, крутиться, кружиться, вертеться"},
  {"spit spat spat": "плевать, насаживать, натыкать, про-"},
  {"split split split": "раскалывать, расщеплять, делить на части"},
  {"spoil spoilt spoilt": "портить, баловать"},
  {"spread spread spread": "распространять(ся)"},
  // {"spring sprang sprung": "прыгать, вскочить, возникать"},
  {"stand stood stood": "стоять, постоять"},
  {"steal stole stolen": "воровать, красть"},

  {"stick stuck stuck": "втыкать, приклеивать(ся), липнуть"},
  // {"sting stung stung": "жалить"},
  {"stink stank stunk": "вонять, отталкивать"},
  // {"strew strewed strewn": "усеять, разбрасывать, расстилать"},
  // {"stride strode stridden":"шагать"},
  {"strike struck struck": "ударять, поражать, бастовать"},
  // {"string strung strung": "связывать, натягивать, нанизывать"},
  // {"strive strove striven": "стремиться, стараться"},
  {"swear swore sworn": "клясться, присягать, браниться"},
  {"sweep swept swept": "мести, подметать"},
  // {"swell swelled swollen": "пухнуть, раздуваться, набухать"},
  {"swim swam swum": "плавать, плыть"},
  {"swing swung swung": "качать(ся), махать, размахивать, качели"},
  {"take took taken": "брать"},
  {"teach taught taught": "обучать, преподавать, учить"},
  {"tear tore torn": "рвать, раз-, с-, от-"},
  {"tell told told": "рассказывать, сообщать"},
  {"think thought thought": "думать"},
  {"throw threw thrown": "кидать, бросать"},
  // {"thrust thrust thrust": "толкать, засовывать, колоть, выгонять, сунуть"},
  // {"tread trod trodden": "ступать, наступать, давить"},
  {"unbend unbent unbent": "разгибаться"},
  // {"undergo underwent undergone": "испытывать, переносить"},
  {"understand understood understood": "понимать, понять"},
  // {"undertake undertook undertaken": "предпринимать, гарантировать"},
  // {"upset upset upset": "огорчать, опрокидывать"},
  {"wake woke woken": "будить, просыпаться"},
  {"wear wore worn": "носить (одежду)"},
  // {"weave wove woven": "ткать, плести, вплетать, сплетать"},
  // {"wed wed wed": "венчать(ся), выдавать замуж"},
  {"weep wept wept": "плакать"},
  {"will would would": "хотеть быть"},
  {"wet wet wet": "мочить, вы-, про-"},
  {"win won won": "выигрывать, получать"},
  // {"wind wound wound": "заводить (механизм), виться, мотать, наматывать, ветер"},
  {"withdraw withdrew withdrawn": "брать назад, отнимать"},
  // {"wring wrung wrung": "жать, выжимать, скручивать"},
  {"write wrote written": "писать, записывать, выписывать, сочинять"},

];
