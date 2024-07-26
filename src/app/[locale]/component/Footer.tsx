'use client';

import { ActionIcon, Anchor, Group, rem } from '@mantine/core';
import { IconBrandBilibili, IconBrandGithub, IconBrandQq } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import classes from './Footer.module.css';
import LingmoLogos from '@/components/LingmoLogos/LingmoLogos';

const links = [
    { link: '/', label: 'home' },
    { link: '/downloads', label: 'downloads' },
    { link: '/blog', label: 'blog' },
    { link: 'https://bbs.lingmo.org', label: 'community' },
];

export function Footer() {
    const t = useTranslations('Headers');
    const items = links.map((link) => (
        <Anchor
          c="dimmed"
          key={link.label}
          href={link.link}
          lh={1}
          size="sm"
        >
            {t(link.label)}
        </Anchor>
    ));

    const year = new Date().getFullYear();

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <LingmoLogos.TitleWIthIcon width={200} height={24} />

                <Group className={classes.links}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <a href="https://space.bilibili.com/595380133/" target="_blank" rel="noreferrer">
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandBilibili style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                    </a>
                    <a href="https://github.com/LingmoOS" target="_blank" rel="noreferrer">
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                    </a>
                    <a href="https://qm.qq.com/q/l8QeupIEjS" target="_blank" rel="noreferrer">
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandQq style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                    </a>
                </Group>
            </div>
            <div style={{
                textAlign: 'center',
                // padding: '20px 0',
                // borderTop: '1px solid #eaeaea',
                // color: '#666',

            }}>
                © 2022-{year} Lingmo OS {t('right')}
                <br />
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                        color: '#666',
                        textDecoration: 'none',
                  }}
                >
                    陇ICP备2024012028号
                </a>
            </div>
        </div>
    );
}
